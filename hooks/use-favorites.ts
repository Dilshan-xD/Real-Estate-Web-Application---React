import { useState, useEffect, useCallback } from 'react'
import { Property } from '@/types/property'

export function useFavorites() {
  const [favorites, setFavorites] = useState<Property[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('favorites')
    if (stored) {
      try {
        setFavorites(JSON.parse(stored))
      } catch (error) {
        console.error('Error loading favorites:', error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = useCallback((property: Property) => {
    setFavorites(prev => {
      if (prev.some(p => p.id === property.id)) return prev
      return [...prev, property]
    })
  }, [])

  const removeFavorite = useCallback((id: string) => {
    setFavorites(prev => prev.filter(p => p.id !== id))
  }, [])

  const toggleFavorite = useCallback((property: Property) => {
    setFavorites(prev => {
      const exists = prev.some(p => p.id === property.id)
      if (exists) {
        return prev.filter(p => p.id !== property.id)
      }
      return [...prev, property]
    })
  }, [])

  const isFavorite = useCallback((id: string) => {
    return favorites.some(p => p.id === id)
  }, [favorites])

  const clearFavorites = useCallback(() => {
    setFavorites([])
  }, [])

  return {
    favorites,
    addFavorite,
    removeFavorite,
    toggleFavorite,
    isFavorite,
    clearFavorites
  }
}

