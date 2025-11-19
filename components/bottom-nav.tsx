'use client'

import { cn } from '@/lib/utils'
import { Bell, Briefcase, Heart, ShoppingBag } from 'lucide-react'

type Tab = 'home' | 'jobs' | 'products' | 'favorites' | 'notifications'

interface BottomNavProps {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const tabs = [
    // { id: 'home' as Tab, label: '홈', icon: Home },
    { id: 'jobs' as Tab, label: '공고', icon: Briefcase },
    { id: 'products' as Tab, label: '상품', icon: ShoppingBag },
    { id: 'favorites' as Tab, label: '즐겨찾기', icon: Heart },
    { id: 'notifications' as Tab, label: '알림', icon: Bell },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon className={cn("h-5 w-5", isActive && "fill-primary")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
