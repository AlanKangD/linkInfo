'use client'

import { JobCard, TeacherJob } from '@/components/job-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export function JobsScreen() {
  const [sortBy, setSortBy] = useState<'new' | 'popular' | 'deadline'>('new')
  const [category, setCategory] = useState<string>('all')
  const [jobs, setJobs] = useState<TeacherJob[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')

  const categories = ['전체', '정부 지원금 공고', '교사 채용 공고']

  // 검색어 debounce (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery)
    }, 300)

    return () => clearTimeout(timer)
  }, [searchQuery])

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

  // 검색 및 필터링된 jobs
  const filteredJobs = useMemo(() => {
    let result = [...jobs]

    // 검색어 필터링 (제목 기준)
    if (debouncedSearchQuery.trim()) {
      const query = debouncedSearchQuery.trim().toLowerCase()
      result = result.filter((job) =>
        job.title?.toLowerCase().includes(query) ||
        job.school?.toLowerCase().includes(query)
      )
    }

    // 카테고리 필터링 (현재는 전체만 있으므로 나중에 확장 가능)
    if (category !== 'all') {
      // TODO: 카테고리 필터링 로직 추가
    }

    // 정렬
    switch (sortBy) {
      case 'new':
        // data_sid 기준 내림차순 (이미 API에서 정렬됨)
        break
      case 'deadline':
        // 마감일 기준 정렬
        result = result.sort((a, b) => {
          if (!a.duedate && !b.duedate) return 0
          if (!a.duedate) return 1
          if (!b.duedate) return -1
          return new Date(a.duedate).getTime() - new Date(b.duedate).getTime()
        })
        break
      case 'popular':
        // 인기순 (현재는 data_sid 기준, 나중에 조회수/좋아요 등 추가 가능)
        break
      default:
        break
    }

    return result
  }, [jobs, debouncedSearchQuery, category, sortBy])

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setDebouncedSearchQuery('')
  }
  
  return (
    <main className="px-4 py-6 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="공고 명 또는 학교명으로 검색..." 
          className="pl-10 pr-20 h-12 rounded-xl"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />
        {searchQuery && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-10 top-1/2 -translate-y-1/2 h-8 w-8"
            onClick={handleClearSearch}
          >
            <X className="h-4 w-4" />
          </Button>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-1 top-1/2 -translate-y-1/2"
          title="고급 필터"
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

      {/* 검색 결과 정보 */}
      {!loading && !error && debouncedSearchQuery.trim() && (
        <div className="text-sm text-muted-foreground">
          '{debouncedSearchQuery}' 검색 결과: {filteredJobs.length}개
        </div>
      )}

      {/* Job List */}
      {loading ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">데이터를 불러오는 중...</p>
        </div>
      ) : error ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-destructive">{error}</p>
        </div>
      ) : filteredJobs.length === 0 ? (
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">
            {debouncedSearchQuery.trim() 
              ? `'${debouncedSearchQuery}'에 대한 검색 결과가 없습니다.`
              : '등록된 공고가 없습니다.'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      )}
    </main>
  )
}
