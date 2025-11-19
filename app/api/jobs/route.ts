import { TeacherJob } from '@/components/job-card'
import pool from '@/lib/db'
import { RowDataPacket } from 'mysql2'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const connection = await pool.getConnection()
    
    try {
      const [rows] = await connection.query<RowDataPacket[]>(
        'SELECT id, data_sid, title, school, regdate, duedate, link, created_at, updated_at FROM teacher_jobs ORDER BY data_sid DESC'
      )
      
      // 타입 변환
      const jobs: TeacherJob[] = rows.map((row) => ({
        id: row.id,
        data_sid: row.data_sid,
        title: row.title,
        school: row.school,
        regdate: row.regdate,
        duedate: row.duedate,
        link: row.link,
        created_at: row.created_at,
        updated_at: row.updated_at,
      }))
      
      return NextResponse.json(jobs)
    } finally {
      connection.release()
    }
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch jobs' },
      { status: 500 }
    )
  }
}

