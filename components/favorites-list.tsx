'use client'

import { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { Property } from '@/types/property'
import { useFavorites } from '@/hooks/use-favorites'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

export function FavoritesList() {
  const { favorites, removeFavorite, clearFavorites, addFavorite } = useFavorites()
  const [isDragOver, setIsDragOver] = useState(false)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = () => {
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    try {
      const propertyJson = e.dataTransfer.getData('application/json')
      if (propertyJson) {
        const property = JSON.parse(propertyJson) as Property
        addFavorite(property)
      }
    } catch (error) {
      console.error('Error adding favorite:', error)
    }
  }

  return (
<Card
  className={`sticky top-4 ${isDragOver ? 'ring-2 ring-primary' : ''}`}
  onDragOver={handleDragOver}
  onDragLeave={handleDragLeave}
  onDrop={handleDrop}
>
  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
    <CardTitle className="text-lg font-semibold">{'Favorites'}</CardTitle>
    {favorites.length > 0 && (
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={clearFavorites}
        className="text-muted-foreground hover:text-destructive"
      >
        {'Clear all'}
      </Button>
    )}
  </CardHeader>
  <CardContent className="space-y-4">
    {favorites.length === 0 ? (
      <p className="text-center text-sm text-muted-foreground">
        {'Drag properties here or click the heart icon to add to favorites'}
      </p>
    ) : (
      favorites.map((property) => (
        <div
          key={property.id}
          className="flex items-start gap-3 rounded-lg p-2 hover:bg-muted/50"
        >
          <div className="relative h-16 w-16 flex-none overflow-hidden rounded-md">
            <Image
              src={property.images[0]}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium line-clamp-1">{property.title}</h3>
            <p className="text-sm text-muted-foreground">
              {formatPrice(property.price)}
            </p>
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 text-muted-foreground hover:text-destructive"
            onClick={() => removeFavorite(property.id)}
          >
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">{'Remove from favorites'}</span>
          </Button>
        </div>
      ))
    )}
  </CardContent>
</Card>
  )
}

