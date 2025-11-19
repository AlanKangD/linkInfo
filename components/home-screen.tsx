'use client'

import { BottomNav } from '@/components/bottom-nav'
import { FavoritesScreen } from '@/components/favorites-screen'
import { JobCard, TeacherJob } from '@/components/job-card'
import { JobsScreen } from '@/components/jobs-screen'
import { NotificationsScreen } from '@/components/notifications-screen'
import { ProductCard } from '@/components/product-card'
import { ProductsScreen } from '@/components/products-screen'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Bell, Briefcase, Search, Sparkles, TrendingUp, User } from 'lucide-react'
import { useEffect, useState } from 'react'

type Tab = 'home' | 'jobs' | 'products' | 'favorites' | 'notifications'

export function HomeScreen() {
  const [activeTab, setActiveTab] = useState<Tab>('jobs')

  const renderContent = () => {
    switch (activeTab) {
      case 'jobs':
        return <JobsScreen />
      case 'products':
        return <ProductsScreen />
      case 'favorites':
        return <FavoritesScreen />
      case 'notifications':
        return <NotificationsScreen />
      default:
        return <HomeContent />
    }
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">JobHub</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {renderContent()}

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

function HomeContent() {
  const [featuredJobs, setFeaturedJobs] = useState<TeacherJob[]>([])
  const [loading, setLoading] = useState(true)
  const [totalJobs, setTotalJobs] = useState(0)

  useEffect(() => {
    const fetchFeaturedJobs = async () => {
      try {
        setLoading(true)
        const response = await fetch('/api/jobs')
        if (!response.ok) {
          throw new Error('데이터를 가져오는데 실패했습니다.')
        }
        const data: TeacherJob[] = await response.json()
        setTotalJobs(data.length)
        // 최신 3개만 가져오기
        setFeaturedJobs(data.slice(0, 3))
      } catch (err) {
        console.error('Error fetching featured jobs:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedJobs()
  }, [])

  return (
    <main className="px-4 py-6 space-y-6">
      {/* Welcome Section */}
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-balance">안녕하세요, 지수님</h1>
        <p className="text-muted-foreground">오늘의 추천 공고가 {totalJobs}건 있어요</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="직무, 학교명으로 검색..." 
          className="pl-10 h-12 rounded-xl"
        />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">신규 공고</span>
            </div>
            <p className="text-2xl font-bold">{totalJobs}</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp className="h-4 w-4 text-accent-foreground" />
              <span className="text-sm font-medium">전체 공고</span>
            </div>
            <p className="text-2xl font-bold">{totalJobs}</p>
          </CardContent>
        </Card>
      </div>

      {/* Featured Jobs Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">오늘의 추천</h2>
          <Button variant="ghost" size="sm">전체보기</Button>
        </div>
        
        {loading ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-muted-foreground">데이터를 불러오는 중...</p>
          </div>
        ) : featuredJobs.length === 0 ? (
          <div className="flex items-center justify-center py-8">
            <p className="text-muted-foreground">등록된 공고가 없습니다.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {featuredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </section>

      {/* Recommended Products Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">추천 상품</h2>
          <Button variant="ghost" size="sm">더보기</Button>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          <ProductCard 
            name="맥북 프로 M3 Max"
            price="350만원"
            rating={4.8}
            image="/macbook-pro-on-desk.png"
            isNew={true}
          />
          <ProductCard 
            name="LG 그램 16인치"
            price="180만원"
            rating={4.5}
            image="/lg-gram-laptop.jpg"
          />
        </div>
      </section>
    </main>
  )
}
