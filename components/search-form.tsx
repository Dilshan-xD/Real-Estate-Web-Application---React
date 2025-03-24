'use client'

import { SearchFilters } from '@/types/property'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { DatePicker } from '@/components/ui/date-picker'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Search } from 'lucide-react'

interface SearchFormProps {
  filters: SearchFilters
  onFilterChange: (filters: SearchFilters) => void
}

export function SearchForm({ filters, onFilterChange }: SearchFormProps) {
  const handleChange = (key: keyof SearchFilters, value: any) => {
    let newValue = value;
    if (key === 'type' && value === 'any') {
      newValue = '';
    } else if ((key === 'minBedrooms' || key === 'maxBedrooms') && (value === 'no_min' || value === 'no_max')) {
      newValue = '';
    } else if (key === 'minBedrooms' || key === 'maxBedrooms') {
      newValue = value ? Number(value) : '';
    }

    onFilterChange({
      ...filters,
      [key]: newValue
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{'Search Properties'}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Label htmlFor="type">{'Property Type'}</Label>
            <Select
              value={filters.type || 'any'}
              onValueChange={(value) => handleChange('type', value)}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Any type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">{'Any type'}</SelectItem>
                <SelectItem value="house">{'House'}</SelectItem>
                <SelectItem value="flat">{'Flat'}</SelectItem>
                <SelectItem value="apartment">{'Apartment'}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="minPrice">{'Min Price'}</Label>
            <Input
              id="minPrice"
              type="number"
              placeholder="No min"
              value={filters.minPrice}
              onChange={(e) => handleChange('minPrice', e.target.value ? Number(e.target.value) : '')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxPrice">{'Max Price'}</Label>
            <Input
              id="maxPrice"
              type="number"
              placeholder="No max"
              value={filters.maxPrice}
              onChange={(e) => handleChange('maxPrice', e.target.value ? Number(e.target.value) : '')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="minBedrooms">{'Min Bedrooms'}</Label>
            <Select
              value={filters.minBedrooms?.toString() || 'no_min'}
              onValueChange={(value) => handleChange('minBedrooms', value)}
            >
              <SelectTrigger id="minBedrooms">
                <SelectValue placeholder="No min" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no_min">{'No min'}</SelectItem>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="maxBedrooms">{'Max Bedrooms'}</Label>
            <Select
              value={filters.maxBedrooms?.toString() || 'no_max'}
              onValueChange={(value) => handleChange('maxBedrooms', value)}
            >
              <SelectTrigger id="maxBedrooms">
                <SelectValue placeholder="No max" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="no_max">{'No max'}</SelectItem>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>{'Date From'}</Label>
            <DatePicker
              value={filters.dateFrom ? new Date(filters.dateFrom) : undefined}
              onChange={(date) => handleChange('dateFrom', date?.toISOString() || '')}
            />
          </div>

          <div className="space-y-2">
            <Label>{'Date To'}</Label>
            <DatePicker
              value={filters.dateTo ? new Date(filters.dateTo) : undefined}
              onChange={(date) => handleChange('dateTo', date?.toISOString() || '')}
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            placeholder="Search by postcode..."
            value={filters.postcode}
            onChange={(e) => handleChange('postcode', e.target.value)}
            className="flex-1"
          />
          <Button type="submit" variant="secondary">
            <Search className="mr-2 h-4 w-4" />
            {'Search'}
          </Button>
        </div>
      </CardContent>

      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Card>
  )
}

