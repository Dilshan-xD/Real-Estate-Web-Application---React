'use client'

import { useProperties } from '@/hooks/use-properties'
import { PropertyCard } from '@/components/property-card'
import { SearchForm } from '@/components/search-form'
import { FavoritesList } from '@/components/favorites-list'

export default function HomePage() {
  const { properties, searchFilters, setSearchFilters } = useProperties()

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                RealEstate
              </span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80" href="/buy">Buy</a>
              <a className="transition-colors hover:text-foreground/80" href="/rent">Rent</a>
              <a className="transition-colors hover:text-foreground/80" href="/prices">House Prices</a>
              <a className="transition-colors hover:text-foreground/80" href="/agents">Find Agent</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-screen-2xl px-4 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          <div className="w-full lg:w-3/4 space-y-8">
            <SearchForm
              filters={searchFilters}
              onFilterChange={setSearchFilters}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
              {properties.length === 0 && (
                <div className="col-span-full text-center">
                  <p className="text-lg text-muted-foreground">
                    No properties found matching your criteria
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
            <FavoritesList />
          </div>
        </div>
      </main>

      <style jsx>{`
        @media (max-width: 1024px) {
          main > div {
            flex-direction: column;
          }
          main > div > div {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

