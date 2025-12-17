import pool from '@/lib/db'
import { RowDataPacket } from 'mysql2'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const type = searchParams.get('type') // 'all' | 'job' | 'product' | 'system'
    const limit = parseInt(searchParams.get('limit') || '50', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)

    const connection = await pool.getConnection()

    try {
      // push_notifications 테이블에서 알림 조회
      let whereClause = ''
      const params: any[] = []

      // 타입 필터링 (data 필드의 type 값으로 필터링)
      if (type && type !== 'all') {
        const typeValue = type === 'jobs' ? 'new_job' : type
        // JSON_EXTRACT 사용 (MySQL 5.7+)
        whereClause = ` AND JSON_EXTRACT(data, '$.type') = ?`
        params.push(typeValue)
      }

      // 전체 개수 조회
      let countQuery = `SELECT COUNT(*) as total FROM push_notifications WHERE 1=1${whereClause}`
      const [countRows] = await connection.query<RowDataPacket[]>(
        countQuery,
        params
      )
      const total = countRows[0]?.total || 0

      // 컬럼 존재 여부 확인
      const [columns] = await connection.query<RowDataPacket[]>(
        `SELECT COLUMN_NAME 
         FROM INFORMATION_SCHEMA.COLUMNS 
         WHERE TABLE_SCHEMA = DATABASE() 
         AND TABLE_NAME = 'push_notifications' 
         AND COLUMN_NAME IN ('read_at', 'sent_at', 'created_at')`
      )
      const columnNames = columns.map((col) => col.COLUMN_NAME)
      const hasReadAt = columnNames.includes('read_at')
      const dateColumn = columnNames.includes('sent_at') ? 'sent_at' : 'created_at'

      // 데이터 조회 (최신순)
      const readAtSelect = hasReadAt ? ', read_at' : ', NULL as read_at'
      const query = `
        SELECT 
          id,
          title,
          body as message,
          data,
          status,
          ${dateColumn} as created_at${readAtSelect}
        FROM push_notifications
        WHERE 1=1${whereClause}
        ORDER BY ${dateColumn} DESC
        LIMIT ? OFFSET ?
      `
      const queryParams = [...params, limit, offset]
      const [rows] = await connection.query<RowDataPacket[]>(query, queryParams)

      // 알림 데이터 변환
      const notifications = rows.map((row) => {
        let notificationType: 'job' | 'product' | 'system' = 'system'
        let message = row.message || ''

        // data 필드에서 type 추출
        if (row.data) {
          try {
            const data = typeof row.data === 'string' ? JSON.parse(row.data) : row.data
            const dataType = data?.type

            if (dataType === 'new_job' || dataType === 'job') {
              notificationType = 'job'
              // 공고 정보가 있으면 메시지에 포함
              if (data.title && data.school) {
                message = `${data.title} - ${data.school}`
              } else if (data.title) {
                message = data.title
              } else if (data.school) {
                message = data.school
              }
            } else if (dataType === 'product') {
              notificationType = 'product'
            } else {
              notificationType = 'system'
            }
          } catch (e) {
            // JSON 파싱 실패 시 기본값 사용
            console.warn('Failed to parse notification data:', e)
          }
        }

        // 시간 계산 (상대 시간)
        let timeAgo = '알 수 없음'
        if (row.created_at) {
          try {
            const sentAt = new Date(row.created_at)
            if (!isNaN(sentAt.getTime())) {
              const now = new Date()
              const diffMs = now.getTime() - sentAt.getTime()
              const diffMins = Math.floor(diffMs / 60000)
              const diffHours = Math.floor(diffMs / 3600000)
              const diffDays = Math.floor(diffMs / 86400000)

              if (diffMins < 1) {
                timeAgo = '방금 전'
              } else if (diffMins < 60) {
                timeAgo = `${diffMins}분 전`
              } else if (diffHours < 24) {
                timeAgo = `${diffHours}시간 전`
              } else {
                timeAgo = `${diffDays}일 전`
              }
            }
          } catch (e) {
            console.warn('Failed to calculate time ago:', e)
          }
        }

        return {
          id: String(row.id),
          type: notificationType,
          title: row.title || '알림',
          message: message || row.message || '',
          time: timeAgo,
          isRead: !!row.read_at,
          createdAt: row.created_at,
          data: row.data,
        }
      })

      return NextResponse.json({
        success: true,
        data: notifications,
        total,
        limit,
        offset,
      })
    } finally {
      connection.release()
    }
  } catch (error: any) {
    // push_notifications 테이블이 없거나 컬럼이 없는 경우 빈 배열 반환
    if (
      error?.code === 'ER_NO_SUCH_TABLE' ||
      error?.code === 'ER_BAD_FIELD_ERROR' ||
      error?.message?.includes('push_notifications') ||
      error?.message?.includes("doesn't exist") ||
      error?.message?.includes('Unknown column')
    ) {
      console.log('push_notifications 테이블 또는 컬럼이 없습니다. 빈 배열을 반환합니다.')
      return NextResponse.json({
        success: true,
        data: [],
        total: 0,
        limit: 50,
        offset: 0,
      })
    }

    console.error('알림 조회 오류:', error)
    console.error('에러 상세:', {
      code: error?.code,
      message: error?.message,
      stack: error?.stack,
    })
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '알림 조회에 실패했습니다.',
        details: process.env.NODE_ENV === 'development' ? String(error) : undefined,
      },
      { status: 500 }
    )
  }
}

// 알림 읽음 처리
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json()
    const { notificationIds, markAllAsRead } = body

    const connection = await pool.getConnection()

    try {
      // read_at 컬럼 존재 여부 확인
      const [columns] = await connection.query<RowDataPacket[]>(
        `SELECT COLUMN_NAME 
         FROM INFORMATION_SCHEMA.COLUMNS 
         WHERE TABLE_SCHEMA = DATABASE() 
         AND TABLE_NAME = 'push_notifications' 
         AND COLUMN_NAME = 'read_at'`
      )
      const hasReadAt = columns.length > 0

      if (hasReadAt) {
        if (markAllAsRead) {
          // 모든 알림 읽음 처리
          await connection.query(
            `UPDATE push_notifications 
             SET read_at = NOW() 
             WHERE read_at IS NULL`
          )
        } else if (notificationIds && Array.isArray(notificationIds)) {
          // 특정 알림들 읽음 처리
          const placeholders = notificationIds.map(() => '?').join(',')
          await connection.query(
            `UPDATE push_notifications 
             SET read_at = NOW() 
             WHERE id IN (${placeholders}) AND read_at IS NULL`,
            notificationIds
          )
        }
      }

      return NextResponse.json({ success: true })
    } finally {
      connection.release()
    }
  } catch (error: any) {
    // push_notifications 테이블이 없는 경우 성공으로 처리
    if (error?.code === 'ER_NO_SUCH_TABLE') {
      return NextResponse.json({ success: true })
    }

    console.error('알림 읽음 처리 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '알림 읽음 처리에 실패했습니다.',
      },
      { status: 500 }
    )
  }
}

