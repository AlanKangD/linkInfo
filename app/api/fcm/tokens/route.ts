import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { RowDataPacket } from 'mysql2'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const platform = searchParams.get('platform')
    const isActive = searchParams.get('is_active')
    const limit = parseInt(searchParams.get('limit') || '100', 10)
    const offset = parseInt(searchParams.get('offset') || '0', 10)

    const connection = await pool.getConnection()

    try {
      let query = 'SELECT * FROM fcm_tokens WHERE 1=1'
      const params: any[] = []

      if (platform && ['android', 'ios', 'web'].includes(platform)) {
        query += ' AND platform = ?'
        params.push(platform)
      }

      if (isActive !== null) {
        query += ' AND is_active = ?'
        params.push(isActive === '1' ? 1 : 0)
      }

      // 전체 개수 조회
      const countQuery = query.replace('SELECT *', 'SELECT COUNT(*) as total')
      const [countRows] = await connection.query<RowDataPacket[]>(countQuery, params)
      const total = countRows[0]?.total || 0

      // 데이터 조회
      query += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'
      params.push(limit, offset)

      const [rows] = await connection.query<RowDataPacket[]>(query, params)

      return NextResponse.json({
        success: true,
        data: rows,
        total,
        limit,
        offset,
      })
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('FCM 토큰 조회 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '토큰 조회에 실패했습니다.',
      },
      { status: 500 }
    )
  }
}

