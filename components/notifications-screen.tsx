'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { handleNotificationNavigation } from '@/lib/notification-navigation'
import { BellIcon, Briefcase, ShoppingBag } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

type NotificationType = 'all' | 'jobs' | 'products' | 'system'

interface Notification {
  id: string
  type: 'job' | 'product' | 'system'
  title: string
  message: string
  time: string
  isRead: boolean
  data?: any
}

const filters: { id: NotificationType; label: string }[] = [
  { id: 'all', label: '전체' },
  { id: 'jobs', label: '공고' },
  { id: 'products', label: '상품' },
  { id: 'system', label: '시스템' },
]

export function NotificationsScreen() {
  const [filter, setFilter] = useState<NotificationType>('all')
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  // Hydration 에러 방지: 클라이언트에서만 렌더링
  useEffect(() => {
    setMounted(true)
  }, [])

  // 알림 데이터 가져오기
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true)
        setError(null)

        // 필터에 맞는 타입 매핑
        const typeParam = filter === 'all' ? 'all' : filter === 'jobs' ? 'job' : filter

        const response = await fetch(`/api/notifications?type=${typeParam}`)
        if (!response.ok) {
          throw new Error('알림을 가져오는데 실패했습니다.')
        }

        const result = await response.json()
        if (result.success) {
          setNotifications(result.data || [])
        } else {
          throw new Error(result.error || '알림을 가져오는데 실패했습니다.')
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.')
        console.error('Error fetching notifications:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchNotifications()
  }, [filter])

  const filteredNotifications = useMemo(() => {
    if (filter === 'all') {
      return notifications
    }
    return notifications.filter(n => {
      if (filter === 'jobs') return n.type === 'job'
      return n.type === filter
    })
  }, [notifications, filter])

  const handleNotificationClick = async (notification: Notification) => {
    // 읽지 않은 알림이면 읽음 처리
    if (!notification.isRead) {
      try {
        await fetch('/api/notifications', {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            notificationIds: [parseInt(notification.id)],
          }),
        })
        // 로컬 상태 업데이트
        setNotifications((prev) =>
          prev.map((n) =>
            n.id === notification.id ? { ...n, isRead: true } : n
          )
        )
      } catch (e) {
        console.error('Failed to mark notification as read:', e)
      }
    }

    // 알림 클릭 시 네비게이션 처리
    if (notification.data) {
      try {
        const data = typeof notification.data === 'string' 
          ? JSON.parse(notification.data) 
          : notification.data

        handleNotificationNavigation({
          messageId: notification.id,
          title: notification.title,
          body: notification.message,
          data: data,
        })
      } catch (e) {
        console.error('Failed to parse notification data:', e)
      }
    }
  }

  const handleMarkAllAsRead = async () => {
    try {
      await fetch('/api/notifications', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          markAllAsRead: true,
        }),
      })
      // 로컬 상태 업데이트
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, isRead: true }))
      )
    } catch (e) {
      console.error('Failed to mark all notifications as read:', e)
    }
  }

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
  
  // Hydration 에러 방지: 마운트 전에는 기본 UI만 표시
  if (!mounted) {
    return (
      <main className="px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">알림</h1>
        </div>
        <div className="flex gap-2">
          {filters.map((f) => (
            <Badge
              key={f.id}
              variant="outline"
              className="px-4 py-2"
            >
              {f.label}
            </Badge>
          ))}
        </div>
        <div className="flex items-center justify-center py-12">
          <p className="text-muted-foreground">알림을 불러오는 중...</p>
        </div>
      </main>
    )
  }

  return (
    <main className="px-4 py-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">알림</h1>
        {notifications.some(n => !n.isRead) && (
          <Button variant="ghost" size="sm" onClick={handleMarkAllAsRead}>
            모두 읽음
          </Button>
        )}
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
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">알림을 불러오는 중...</p>
          </div>
        ) : error ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-destructive">{error}</p>
          </div>
        ) : filteredNotifications.length === 0 ? (
          <div className="flex items-center justify-center py-12">
            <p className="text-muted-foreground">
              {filter === 'all' 
                ? '알림이 없습니다.' 
                : `${filters.find(f => f.id === filter)?.label || ''} 알림이 없습니다.`}
            </p>
          </div>
        ) : (
          filteredNotifications.map((notification) => (
            <Card 
              key={notification.id}
              className={`cursor-pointer transition-colors ${
                !notification.isRead ? 'bg-primary/5 border-primary/20' : ''
              }`}
              onClick={() => handleNotificationClick(notification)}
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
          ))
        )}
      </div>
    </main>
  )
}
