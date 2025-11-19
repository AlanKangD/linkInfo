'use client'

import { useState, useEffect } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { JobCard, TeacherJob } from '@/components/job-card'
import { Badge } from '@/components/ui/badge'

export function JobsScreen() {
  const [sortBy, setSortBy] = useState<'new' | 'popular' | 'deadline'>('new')
  const [category, setCategory] = useState<string>('all')
  const [jobs, setJobs] = useState<TeacherJob[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const categories = ['전체', '개발', '디자인', '기획', '마케팅']

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/jobs')
        if (!response.ok) {
          throw new Error('데이터를 가져오는데 실패했습니다.')
        }
        const data = await response.json()
        setJobs(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.')
        console.error('Error fetching jobs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])
  
  return (
    <main className="px-4 py-6 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="직무, 회사명으로 검색..." 
          className="pl-10 pr-12 h-12 rounded-xl"
        />
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-1 top-1/2 -translate-y-1/2"
        >
          <SlidersHorizontal className="h-5 w-5" />
        </Button>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => (
          <Badge
            key={cat}
            variant={category === cat.toLowerCase() ? 'default' : 'outline'}
            className="px-4 py-2 cursor-pointer whitespace-nowrap"
            onClick={() => setCategory(cat.toLowerCase())}
          >
            {cat}
          </Badge>
        ))}
      </div>

      {/* Sort Filter */}
      <div className="flex gap-2">
        <Button
          variant={sortBy === 'new' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('new')}
        >
          신규순
        </Button>
        <Button
          variant={sortBy === 'popular' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('popular')}
        >
          인기순
        </Button>
        <Button
          variant={sortBy === 'deadline' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('deadline')}
        >
          마감임박
        </Button>
      </div>

      {/* Job List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">데이터를 불러오는 중...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-destructive">{error}</p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">등록된 공고가 없습니다.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  )
}
