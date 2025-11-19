'use client'

import { useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ProductCard } from '@/components/product-card'
import { Badge } from '@/components/ui/badge'

export function ProductsScreen() {
  const [sortBy, setSortBy] = useState<'popular' | 'new' | 'price'>('popular')
  const [category, setCategory] = useState<string>('all')

  const categories = ['전체', '노트북', '키보드', '마우스', '모니터', '의자']
  
  return (
    <main className="px-4 py-6 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          placeholder="상품명으로 검색..." 
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
          variant={sortBy === 'popular' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('popular')}
        >
          인기순
        </Button>
        <Button
          variant={sortBy === 'new' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('new')}
        >
          신규순
        </Button>
        <Button
          variant={sortBy === 'price' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSortBy('price')}
        >
          가격순
        </Button>
      </div>

      {/* Product Grid */}
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
        <ProductCard 
          name="매직 키보드"
          price="17만원"
          rating={4.7}
          image="/magic-keyboard.jpg"
        />
        <ProductCard 
          name="허먼밀러 에어론"
          price="189만원"
          rating={4.9}
          image="/herman-miller-aeron.png"
          isPopular={true}
        />
        <ProductCard 
          name="로지텍 MX Master"
          price="12만원"
          rating={4.6}
          image="/logitech-mx-master-mouse.jpg"
        />
        <ProductCard 
          name="LG 울트라와이드"
          price="65만원"
          rating={4.5}
          image="/lg-ultrawide-monitor.jpg"
        />
      </div>
    </main>
  )
}
