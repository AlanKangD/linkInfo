import { Star, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

interface ProductCardProps {
  name: string
  price: string
  rating: number
  image: string
  isNew?: boolean
  isPopular?: boolean
  isFavorited?: boolean
}

export function ProductCard({ name, price, rating, image, isNew, isPopular, isFavorited }: ProductCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
      <CardContent className="p-0">
        <div className="relative aspect-square bg-muted">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover"
          />
          {isNew && (
            <Badge className="absolute top-2 right-2 bg-emerald-500 text-white border-0">
              NEW
            </Badge>
          )}
          {isPopular && (
            <Badge className="absolute top-2 right-2 bg-orange-500 text-white border-0">
              인기
            </Badge>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-2 left-2 h-8 w-8 bg-white/90 hover:bg-white"
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
        <div className="p-3 space-y-2">
          <h3 className="font-medium text-sm leading-tight line-clamp-2">{name}</h3>
          <div className="flex items-center justify-between">
            <span className="font-bold text-base">{price}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
