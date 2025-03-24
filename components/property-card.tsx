'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Property } from '@/types/property'
import { useFavorites } from '@/hooks/use-favorites'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { useState } from 'react'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard({ property }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites()
  const [isDragging, setIsDragging] = useState(false)

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('application/json', JSON.stringify(property))
    setIsDragging(true)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
  }

  return (
    <Card 
      className={`group relative overflow-hidden ${isDragging ? 'opacity-50' : ''}`}
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <CardHeader className="p-0">
        <div className="aspect-video relative">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <Button
            size="icon"
            variant="ghost"
            className={`absolute right-2 top-2 z-10 h-8 w-8 rounded-full bg-white/80 ${
              isFavorite(property.id) ? 'text-red-500' : 'text-gray-500 hover:text-red-500'
            }`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggleFavorite(property)
            }}
          >
            <Heart className="h-4 w-4" fill={isFavorite(property.id) ? 'currentColor' : 'none'} />
            <span className="sr-only">
              {isFavorite(property.id) ? 'Remove from favorites' : 'Add to favorites'}
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <Link href={`/property/${property.id}`} className="block">
          <h3 className="font-semibold line-clamp-1">{property.title}</h3>
          <p className="mt-1 text-2xl font-bold">{formatPrice(property.price)}</p>
          <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
            {property.shortDescription}
          </p>
        </Link>
      </CardContent>
      <CardFooter className="grid grid-cols-3 gap-2 border-t p-4 text-sm text-muted-foreground">
        <div>{property.type}</div>
        <div>{`${property.bedrooms} beds`}</div>
        <div>{property.postcode}</div>
      </CardFooter>

      <style jsx>{`
        @media (max-width: 1024px) {
          .group {
            width: 100%;
          }
        }
      `}</style>
    </Card>
  )
}

