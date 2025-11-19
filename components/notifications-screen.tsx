'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Briefcase, ShoppingBag, BellIcon } from 'lucide-react'

type NotificationType = 'all' | 'jobs' | 'products' | 'system'

interface Notification {
  id: string
  type: 'job' | 'product' | 'system'
  title: string
  message: string
  time: string
  isRead: boolean
}

export function NotificationsScreen() {
  const [filter, setFilter] = useState<NotificationType>('all')
  
  const notifications: Notification[] = [
    {
      id: '1',
      type: 'job',
      title: '새로운 공고가 등록되었어요',
      message: '시니어 프론트엔드 - 네이버',
      time: '10분 전',
      isRead: false
    },
    {
      id: '2',
      type: 'job',
      title: '즐겨찾기한 공고가 마감 임박',
      message: '백엔드 개발자 - 카카오',
      time: '2시간 전',
      isRead: false
    },
    {
      id: '3',
      type: 'product',
      title: '추천 상품 할인 이벤트',
      message: '맥북 프로 15% 할인',
      time: '1일 전',
      isRead: true
    },
    {
      id: '4',
      type: 'system',
      title: '새로운 기능이 추가되었습니다',
      message: '이제 공고를 필터링할 수 있어요',
      time: '2일 전',
      isRead: true
    },
  ]

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filter)

  const filters: { id: NotificationType; label: string }[] = [
    { id: 'all', label: '전체' },
    { id: 'jobs', label: '공고' },
    { id: 'products', label: '상품' },
    { id: 'system', label: '시스템' },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case 'job':
        return <Briefcase className="h-5 w-5 text-primary" />
      case 'product':
        return <ShoppingBag className="h-5 w-5 text-accent-foreground" />
      default:
        return <BellIcon className="h-5 w-5 text-muted-foreground" />
    }
  }
  
  return (
    <main className="px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">알림</h1>
        <Button variant="ghost" size="sm">모두 읽음</Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2">
        {filters.map((f) => (
          <Badge
            key={f.id}
            variant={filter === f.id ? 'default' : 'outline'}
            className="px-4 py-2 cursor-pointer"
            onClick={() => setFilter(f.id)}
          >
            {f.label}
          </Badge>
        ))}
      </div>

      {/* Notification List */}
      <div className="space-y-3">
        {filteredNotifications.map((notification) => (
          <Card 
            key={notification.id}
            className={`cursor-pointer transition-colors ${
              !notification.isRead ? 'bg-primary/5 border-primary/20' : ''
            }`}
          >
            <CardContent className="p-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0 mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-medium text-sm">{notification.title}</h3>
                    {!notification.isRead && (
                      <div className="flex-shrink-0 h-2 w-2 bg-primary rounded-full mt-1" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {notification.message}
                  </p>
                  <span className="text-xs text-muted-foreground">
                    {notification.time}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
