import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { RowDataPacket, ResultSetHeader } from 'mysql2'
import { getOrGenerateUserId } from '@/lib/user-id-generator'

interface TokenRequest {
  token: string
  platform?: 'android' | 'ios' | 'web'
  device_id?: string
  user_id?: string
}

export async function POST(request: NextRequest) {
  try {
    const body: TokenRequest = await request.json()
    const { token, platform = 'android', device_id, user_id } = body

    // 토큰 검증
    if (!token || typeof token !== 'string' || token.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: '토큰이 필요합니다.' },
        { status: 400 }
      )
    }

    // 플랫폼 검증
    if (platform && !['android', 'ios', 'web'].includes(platform)) {
      return NextResponse.json(
        { success: false, error: '유효하지 않은 플랫폼입니다.' },
        { status: 400 }
      )
    }

    const connection = await pool.getConnection()

    try {
      // user_id 생성 또는 사용
      const finalUserId = getOrGenerateUserId(user_id)

      // 기존 토큰이 있는지 확인
      const [existingRows] = await connection.query<RowDataPacket[]>(
        'SELECT id, user_id FROM fcm_tokens WHERE token = ?',
        [token]
      )

      if (existingRows.length > 0) {
        // 기존 토큰 업데이트
        const existingToken = existingRows[0]
        const updateUserId = user_id || existingToken.user_id || getOrGenerateUserId()

        await connection.query<ResultSetHeader>(
          `UPDATE fcm_tokens 
           SET platform = ?, device_id = ?, user_id = ?, is_active = 1, 
               last_used_at = NOW(), updated_at = NOW()
           WHERE token = ?`,
          [platform, device_id || null, updateUserId, token]
        )

        const [updatedRows] = await connection.query<RowDataPacket[]>(
          'SELECT * FROM fcm_tokens WHERE token = ?',
          [token]
        )

        return NextResponse.json({
          success: true,
          message: '토큰이 업데이트되었습니다.',
          data: updatedRows[0],
        })
      } else {
        // 새 토큰 저장
        const insertUserId = getOrGenerateUserId(user_id)

        const [result] = await connection.query<ResultSetHeader>(
          `INSERT INTO fcm_tokens (token, platform, device_id, user_id, is_active, last_used_at)
           VALUES (?, ?, ?, ?, 1, NOW())`,
          [token, platform, device_id || null, insertUserId]
        )

        const [newRows] = await connection.query<RowDataPacket[]>(
          'SELECT * FROM fcm_tokens WHERE id = ?',
          [result.insertId]
        )

        return NextResponse.json({
          success: true,
          message: '토큰이 저장되었습니다.',
          data: newRows[0],
        })
      }
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('FCM 토큰 저장 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '토큰 저장에 실패했습니다.',
      },
      { status: 500 }
    )
  }
}

