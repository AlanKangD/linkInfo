'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { JobCard } from '@/components/job-card'
import { Badge } from '@/components/ui/badge'

export function JobsScreen() {
  const [sortBy, setSortBy] = useState<'new' | 'popular' | 'deadline'>('new')
  const [category, setCategory] = useState<string>('all')

  const categories = ['전체', '개발', '디자인', '기획', '마케팅']
  
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
      <div className="space-y-3">
        <JobCard 
          job={{
            id: 1,
            data_sid: 'S001',
            title: '초등학교 교사 채용',
            school: '서울초등학교',
            regdate: new Date(),
            duedate: '2024-12-25',
            link: 'https://example.com/job/1'
          }}
        />
        
        <JobCard 
          job={{
            id: 2,
            data_sid: 'S002',
            title: '중학교 수학 교사 채용',
            school: '서울중학교',
            regdate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
            duedate: '2024-12-20',
            link: 'https://example.com/job/2'
          }}
        />

        <JobCard 
          job={{
            id: 3,
            data_sid: 'S003',
            title: '고등학교 영어 교사 채용',
            school: '서울고등학교',
            regdate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
            duedate: '2024-12-18',
            link: 'https://example.com/job/3'
          }}
        />

        <JobCard 
          job={{
            id: 4,
            data_sid: 'S004',
            title: '초등학교 체육 교사 채용',
            school: '부산초등학교',
            regdate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
            duedate: '2024-12-22',
            link: 'https://example.com/job/4'
          }}
        />

        <JobCard 
          job={{
            id: 5,
            data_sid: 'S005',
            title: '중학교 과학 교사 채용',
            school: '인천중학교',
            regdate: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000),
            duedate: '2024-12-30',
            link: 'https://example.com/job/5'
          }}
        />
      </div>
    </main>
  )
}
