export interface Property {
  id: string
  title: string
  type: 'house' | 'flat' | 'apartment'
  price: number
  bedrooms: number
  description: string
  shortDescription: string
  postcode: string
  dateAdded: string
  images: string[]
  floorPlan: string
  location: {
    lat: number
    lng: number
  }
}

export interface SearchFilters {
  type: string
  minPrice: number | ''
  maxPrice: number | ''
  minBedrooms: number | ''
  maxBedrooms: number | ''
  postcode: string
  dateFrom: string
  dateTo: string
}

