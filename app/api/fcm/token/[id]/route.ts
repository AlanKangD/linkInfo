import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { ResultSetHeader } from 'mysql2'

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id, 10)

    if (isNaN(id) || id <= 0) {
      return NextResponse.json(
        { success: false, error: '유효하지 않은 ID입니다.' },
        { status: 400 }
      )
    }

    const connection = await pool.getConnection()

    try {
      const [result] = await connection.query<ResultSetHeader>(
        'DELETE FROM fcm_tokens WHERE id = ?',
        [id]
      )

      if (result.affectedRows === 0) {
        return NextResponse.json(
          { success: false, error: '토큰을 찾을 수 없습니다.' },
          { status: 404 }
        )
      }

      return NextResponse.json({
        success: true,
        message: '토큰이 삭제되었습니다.',
      })
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('FCM 토큰 삭제 오류:', error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : '토큰 삭제에 실패했습니다.',
      },
      { status: 500 }
    )
  }
}

