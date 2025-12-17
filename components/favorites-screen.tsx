'use client'

import { JobCard, TeacherJob } from '@/components/job-card'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { FileX } from 'lucide-react'
import { useEffect, useState } from 'react'

type FavoriteTab = 'jobs' | 'products'

export function FavoritesScreen() {
  const [activeTab, setActiveTab] = useState<FavoriteTab>('jobs')
  const [favoriteJobs, setFavoriteJobs] = useState<TeacherJob[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // TODO: 실제 즐겨찾기 API에서 데이터 가져오기
    // 현재는 빈 배열로 설정 (데이터가 없을 때 빈 상태 표시)
    setFavoriteJobs([])
    setLoading(false)
  }, [])
  
  return (
    <main className="px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">즐겨찾기</h1>
        <Button variant="ghost" size="sm">편집</Button>
      </div>

      {/* Tab Navigation */}
      <div className="flex gap-2 border-b">
        <button
          onClick={() => setActiveTab('jobs')}
          className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${
            activeTab === 'jobs' 
              ? 'text-primary' 
              : 'text-muted-foreground'
          }`}
        >
          공고 12
          {activeTab === 'jobs' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`flex-1 pb-3 text-sm font-medium transition-colors relative ${
            activeTab === 'products' 
              ? 'text-primary' 
              : 'text-muted-foreground'
          }`}
        >
          상품 5
          {activeTab === 'products' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      </div>

      {/* Content */}
      {activeTab === 'jobs' ? (
        loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">로딩 중...</p>
          </div>
        ) : favoriteJobs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
            <FileX className="h-16 w-16 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">즐겨찾기한 공고가 없습니다</h3>
            <p className="text-muted-foreground mb-6">관심있는 공고를 즐겨찾기에 추가해보세요</p>
            <Button>공고 둘러보기</Button>
          </div>
        ) : (
          <div className="space-y-3">
            {favoriteJobs.map((job) => (
              <JobCard 
                key={job.id}
                job={job}
                isFavorited={true}
                onFavoriteToggle={(jobId) => {
                  // TODO: 즐겨찾기 해제 API 호출
                  setFavoriteJobs(prev => prev.filter(j => j.id !== jobId))
                }}
              />
            ))}
          </div>
        )
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <ProductCard 
            name="맥북 프로 M3 Max"
            price="350만원"
            rating={4.8}
            image="/macbook-pro-on-desk.png"
            isFavorited={true}
          />
          <ProductCard 
            name="허먼밀러 에어론"
            price="189만원"
            rating={4.9}
            image="/herman-miller-aeron.png"
            isFavorited={true}
          />
        </div>
      )}

      {/* Empty State Example (commented for now)
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <FileX className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-lg font-semibold mb-2">즐겨찾기한 공고가 없습니다</h3>
        <p className="text-muted-foreground mb-6">관심있는 공고를 즐겨찾기에 추가해보세요</p>
        <Button>공고 둘러보기</Button>
      </div>
      */}
    </main>
  )
}
