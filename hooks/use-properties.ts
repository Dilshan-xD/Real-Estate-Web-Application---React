import { useState, useCallback } from 'react'
import { Property, SearchFilters } from '@/types/property'
import { properties } from '@/data/properties'

export function useProperties() {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    type: '',
    minPrice: '',
    maxPrice: '',
    minBedrooms: '',
    maxBedrooms: '',
    postcode: '',
    dateFrom: '',
    dateTo: ''
  })

  const filteredProperties = useCallback(() => {
    return properties.filter(property => {
      if (searchFilters.type && property.type !== searchFilters.type) return false
      if (searchFilters.minPrice && property.price < searchFilters.minPrice) return false
      if (searchFilters.maxPrice && property.price > searchFilters.maxPrice) return false
      if (searchFilters.minBedrooms && property.bedrooms < searchFilters.minBedrooms) return false
      if (searchFilters.maxBedrooms && property.bedrooms > searchFilters.maxBedrooms) return false
      if (searchFilters.postcode && !property.postcode.toLowerCase().includes(searchFilters.postcode.toLowerCase())) return false
      if (searchFilters.dateFrom && new Date(property.dateAdded) < new Date(searchFilters.dateFrom)) return false
      if (searchFilters.dateTo && new Date(property.dateAdded) > new Date(searchFilters.dateTo)) return false
      return true
    })
  }, [searchFilters])

  const getPropertyById = useCallback((id: string) => {
    return properties.find(property => property.id === id)
  }, [])

  return {
    properties: filteredProperties(),
    searchFilters,
    setSearchFilters,
    getPropertyById
  }
}

