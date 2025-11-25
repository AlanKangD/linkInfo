import { TeacherJob } from '@/components/job-card'
import pool from '@/lib/db'
import { RowDataPacket } from 'mysql2'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const connection = await pool.getConnection()
    
    try {
      // 쿼리 파라미터에서 job_type 필터 가져오기
      const { searchParams } = new URL(request.url)
      const jobType = searchParams.get('job_type')
      
      // 기본 쿼리
      let query = 'SELECT id, data_sid, title, school, job_type, regdate, duedate, link, created_at, updated_at FROM teacher_jobs'
      const params: any[] = []
      
      // job_type 필터 추가
      if (jobType && (jobType === 'g' || jobType === 't')) {
        query += ' WHERE job_type = ?'
        params.push(jobType)
      }
      
      query += ' ORDER BY data_sid DESC'
      
      const [rows] = await connection.query<RowDataPacket[]>(query, params)
      
      // 타입 변환
      const jobs: TeacherJob[] = rows.map((row) => ({
        id: row.id,
        data_sid: row.data_sid,
        title: row.title,
        school: row.school,
        job_type: row.job_type || 't', // 기본값 설정
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

