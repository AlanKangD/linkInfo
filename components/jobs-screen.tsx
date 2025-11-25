'use client'

import { JobCard, TeacherJob } from '@/components/job-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { ArrowDownUp, Filter, Search, SlidersHorizontal, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

interface FilterState {
  regdateStart: string
  regdateEnd: string
  duedateStart: string
  duedateEnd: string
  schoolFilter: string
}

export function JobsScreen() {
  const [sortBy, setSortBy] = useState<'new' | 'popular' | 'deadline'>('new')
  const [category, setCategory] = useState<string>('all')
  const [jobs, setJobs] = useState<TeacherJob[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('')
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen, setIsSortOpen] = useState(false)
  const [filters, setFilters] = useState<FilterState>({
    regdateStart: '',
    regdateEnd: '',
    duedateStart: '',
    duedateEnd: '',
    schoolFilter: '',
  })

  const categories = ['전체', '정부 지원금 공고', '교사 채용 공고']

  // 카테고리를 job_type으로 변환
  const getJobTypeFromCategory = (cat: string): string | null => {
    if (cat === 'all') return null
    if (cat === '정부 지원금 공고') return 'g'
    if (cat === '교사 채용 공고') return 't'
    return null
  }

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
        // 카테고리에 따른 job_type 필터 추가
        const jobType = getJobTypeFromCategory(category)
        const url = jobType 
          ? `/api/jobs?job_type=${jobType}`
          : '/api/jobs'
        
        const response = await fetch(url)
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
  }, [category])

  // 적용된 필터 개수 계산
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (filters.regdateStart) count++
    if (filters.regdateEnd) count++
    if (filters.duedateStart) count++
    if (filters.duedateEnd) count++
    if (filters.schoolFilter.trim()) count++
    return count
  }, [filters])

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

    // 등록일 필터링
    if (filters.regdateStart) {
      const startDate = new Date(filters.regdateStart)
      startDate.setHours(0, 0, 0, 0)
      result = result.filter((job) => {
        if (!job.regdate) return false
        const jobDate = new Date(job.regdate)
        jobDate.setHours(0, 0, 0, 0)
        return jobDate >= startDate
      })
    }
    if (filters.regdateEnd) {
      const endDate = new Date(filters.regdateEnd)
      endDate.setHours(23, 59, 59, 999)
      result = result.filter((job) => {
        if (!job.regdate) return false
        const jobDate = new Date(job.regdate)
        jobDate.setHours(0, 0, 0, 0)
        return jobDate <= endDate
      })
    }

    // 마감일 필터링
    if (filters.duedateStart) {
      const startDate = new Date(filters.duedateStart)
      startDate.setHours(0, 0, 0, 0)
      result = result.filter((job) => {
        if (!job.duedate) return false
        const jobDate = new Date(job.duedate)
        jobDate.setHours(0, 0, 0, 0)
        return jobDate >= startDate
      })
    }
    if (filters.duedateEnd) {
      const endDate = new Date(filters.duedateEnd)
      endDate.setHours(23, 59, 59, 999)
      result = result.filter((job) => {
        if (!job.duedate) return false
        const jobDate = new Date(job.duedate)
        jobDate.setHours(0, 0, 0, 0)
        return jobDate <= endDate
      })
    }

    // 학교명 필터링
    if (filters.schoolFilter.trim()) {
      const schoolQuery = filters.schoolFilter.trim().toLowerCase()
      result = result.filter((job) =>
        job.school?.toLowerCase().includes(schoolQuery)
      )
    }

    // 카테고리 필터링은 API 레벨에서 처리되므로 여기서는 불필요
    // (이미 category 변경 시 API를 다시 호출함)

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
  }, [jobs, debouncedSearchQuery, category, sortBy, filters])

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.currentTarget.blur()
    }
  }

  const handleClearSearch = () => {
    setSearchQuery('')
    setDebouncedSearchQuery('')
  }

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleResetFilters = () => {
    setFilters({
      regdateStart: '',
      regdateEnd: '',
      duedateStart: '',
      duedateEnd: '',
      schoolFilter: '',
    })
  }

  const handleApplyFilters = () => {
    setIsFilterOpen(false)
  }
  
  return (
    <main className="px-4 py-6 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
        <Input 
          placeholder="공고 명 또는 학교명으로 검색..." 
          className={`pl-10 ${searchQuery ? 'pr-28' : 'pr-20'} h-12 rounded-xl`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyDown={handleSearchKeyDown}
        />
        
        {/* 아이콘들을 flex로 정렬 */}
        <div className="absolute right-1 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {searchQuery && (
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              onClick={handleClearSearch}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
          
          {/* 정렬 Popover */}
          <Popover open={isSortOpen} onOpenChange={setIsSortOpen}>
            <PopoverTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8"
                title="정렬"
              >
                <ArrowDownUp className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2" align="end">
              <div className="space-y-1">
                <Button
                  variant={sortBy === 'new' ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setSortBy('new')
                    setIsSortOpen(false)
                  }}
                >
                  신규순
                </Button>
                <Button
                  variant={sortBy === 'popular' ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setSortBy('popular')
                    setIsSortOpen(false)
                  }}
                >
                  인기순
                </Button>
                <Button
                  variant={sortBy === 'deadline' ? 'default' : 'ghost'}
                  size="sm"
                  className="w-full justify-start"
                  onClick={() => {
                    setSortBy('deadline')
                    setIsSortOpen(false)
                  }}
                >
                  마감임박
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          {/* 필터 Dialog */}
          <Dialog open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 relative"
                title="고급 필터"
              >
                <SlidersHorizontal className="h-5 w-5" />
                {activeFilterCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>필터</DialogTitle>
              <DialogDescription>
                원하는 조건을 선택하여 공고를 필터링하세요.
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* 등록일 필터 */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">등록일</Label>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="regdate-start" className="text-sm">
                      시작일
                    </Label>
                    <Input
                      id="regdate-start"
                      type="date"
                      value={filters.regdateStart}
                      onChange={(e) => handleFilterChange('regdateStart', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="regdate-end" className="text-sm">
                      종료일
                    </Label>
                    <Input
                      id="regdate-end"
                      type="date"
                      value={filters.regdateEnd}
                      onChange={(e) => handleFilterChange('regdateEnd', e.target.value)}
                      min={filters.regdateStart || undefined}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* 마감일 필터 */}
              <div className="space-y-3">
                <Label className="text-base font-semibold">마감일</Label>
                <div className="space-y-2">
                  <div className="space-y-2">
                    <Label htmlFor="duedate-start" className="text-sm">
                      시작일
                    </Label>
                    <Input
                      id="duedate-start"
                      type="date"
                      value={filters.duedateStart}
                      onChange={(e) => handleFilterChange('duedateStart', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="duedate-end" className="text-sm">
                      종료일
                    </Label>
                    <Input
                      id="duedate-end"
                      type="date"
                      value={filters.duedateEnd}
                      onChange={(e) => handleFilterChange('duedateEnd', e.target.value)}
                      min={filters.duedateStart || undefined}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              {/* 학교명 필터 */}
              <div className="space-y-3">
                <Label htmlFor="school-filter" className="text-base font-semibold">
                  학교명
                </Label>
                <Input
                  id="school-filter"
                  placeholder="학교명으로 필터링..."
                  value={filters.schoolFilter}
                  onChange={(e) => handleFilterChange('schoolFilter', e.target.value)}
                />
              </div>
            </div>

            <DialogFooter className="flex-row gap-2 sm:gap-0">
              <Button
                variant="outline"
                onClick={handleResetFilters}
                className="flex-1 sm:flex-initial"
              >
                초기화
              </Button>
              <Button
                onClick={handleApplyFilters}
                className="flex-1 sm:flex-initial"
              >
                적용 ({activeFilterCount})
              </Button>
            </DialogFooter>
          </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((cat) => {
          const categoryValue = cat === '전체' ? 'all' : cat
          return (
            <Badge
              key={cat}
              variant={category === categoryValue ? 'default' : 'outline'}
              className="px-4 py-2 cursor-pointer whitespace-nowrap"
              onClick={() => setCategory(categoryValue)}
            >
              {cat}
            </Badge>
          )
        })}
      </div>

      {/* 검색 결과 정보 */}
      {!loading && !error && (debouncedSearchQuery.trim() || activeFilterCount > 0) && (
        <div className="text-sm text-muted-foreground flex items-center gap-2 flex-wrap">
          {debouncedSearchQuery.trim() && (
            <span>'{debouncedSearchQuery}' 검색 결과</span>
          )}
          {activeFilterCount > 0 && (
            <span className="flex items-center gap-1">
              <Filter className="h-3.5 w-3.5" />
              필터 {activeFilterCount}개 적용
            </span>
          )}
          <span className="font-medium">총 {filteredJobs.length}개</span>
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
