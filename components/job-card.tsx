import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale/ko'
import { Calendar, Clock, ExternalLink, Heart, School } from 'lucide-react'

export type JobType = 'g' | 't'

export interface TeacherJob {
  id: number
  data_sid: string
  title: string
  school: string
  job_type: JobType
  regdate: string | Date | null
  duedate: string | null
  link: string | null
  created_at?: string | Date
  updated_at?: string | Date
}

interface JobCardProps {
  job: TeacherJob
  isFavorited?: boolean
  onFavoriteToggle?: (jobId: number) => void
}

export function JobCard({
  job,
  isFavorited,
  onFavoriteToggle,
}: JobCardProps) {
  const formatDate = (date: string | Date | null): string => {
    if (!date) return '-'
    try {
      const dateObj = typeof date === 'string' ? new Date(date) : date
      return format(dateObj, 'yyyy.MM.dd', { locale: ko })
    } catch {
      return date.toString()
    }
  }

  const getDaysUntilDeadline = (duedate: string | null): string | null => {
    if (!duedate) return null
    try {
      // duedate가 "YYYY-MM-DD" 형식인지 확인
      const dateStr = duedate.includes('-') ? duedate : duedate
      const deadline = new Date(dateStr)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      deadline.setHours(0, 0, 0, 0)
      
      const diffTime = deadline.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays < 0) return '마감'
      if (diffDays === 0) return '오늘 마감'
      if (diffDays <= 3) return `D-${diffDays}`
      return null
    } catch {
      return null
    }
  }

  const deadlineBadge = getDaysUntilDeadline(job.duedate)
  const isNew = job.regdate && (() => {
    try {
      const regDate = typeof job.regdate === 'string' ? new Date(job.regdate) : job.regdate
      const today = new Date()
      const diffTime = today.getTime() - regDate.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays <= 7
    } catch {
      return false
    }
  })()

  const handleCardClick = () => {
    if (job.link) {
      window.open(job.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Card 
      className={`hover:shadow-md transition-shadow ${job.link ? 'cursor-pointer' : ''}`}
      onClick={handleCardClick}
    >
      <CardContent className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-base leading-tight">{job.title || '제목 없음'}</h3>
              {isNew && (
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700 border-emerald-200 h-5 px-1.5 text-xs">
                  신규
                </Badge>
              )}
              {deadlineBadge && (
                <Badge 
                  variant="secondary" 
                  className={`h-5 px-1.5 text-xs ${
                    deadlineBadge === '마감' || deadlineBadge === '오늘 마감'
                      ? 'bg-red-100 text-red-700 border-red-200'
                      : 'bg-orange-100 text-orange-700 border-orange-200'
                  }`}
                >
                  {deadlineBadge}
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <School className="h-4 w-4" />
              <span>{job.school || '학교명 없음'}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {onFavoriteToggle && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 shrink-0"
                onClick={(e) => {
                  e.stopPropagation()
                  onFavoriteToggle(job.id)
                }}
              >
                <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
            )}
            {job.link && (
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 shrink-0"
                onClick={(e) => {
                  e.stopPropagation()
                  window.open(job.link!, '_blank', 'noopener,noreferrer')
                }}
              >
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs text-muted-foreground pt-2 border-t">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            <span>등록일: {formatDate(job.regdate)}</span>
          </span>
          {job.duedate && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>마감일: {formatDate(job.duedate)}</span>
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
