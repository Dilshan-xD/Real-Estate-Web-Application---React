'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import { Property } from '@/types/property'
import { formatPrice } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { properties } from '@/data/properties'
import dynamic from 'next/dynamic'
import 'react-image-gallery/styles/css/image-gallery.css'

const ImageGallery = dynamic(() => import('react-image-gallery'), { ssr: false })

export default function PropertyPage({ params }: { params: { id: string } }) {
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    const found = properties.find(p => p.id === params.id)
    setProperty(found || null)
  }, [params.id])

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
          <ChevronLeft className="mr-1 h-4 w-4" />
          {'Back to search'}
        </Link>
        <Card className="p-8 text-center">
          <h1 className="text-2xl font-bold mb-2">{'Property Not Found'}</h1>
          <p className="text-muted-foreground">
            {'The property you\'re looking for doesn\'t exist or has been removed.'}
          </p>
        </Card>
      </div>
    )
  }

  const images = property.images.map(src => ({
    original: src,
    thumbnail: src,
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center text-primary hover:underline mb-4">
        <ChevronLeft className="mr-1 h-4 w-4" />
        {'Back to search'}
      </Link>
      
      <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
        <div className="space-y-4">
          <ImageGallery 
            items={images} 
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
            showBullets={true}
            autoPlay={false}
          />
        </div>

        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
            <p className="text-3xl font-bold text-primary mb-4">
              {formatPrice(property.price)}
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span>{`${property.bedrooms} bedrooms`}</span>
              <span>{property.type}</span>
              <span>{property.postcode}</span>
            </div>
          </div>

          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">{'Description'}</TabsTrigger>
              <TabsTrigger value="floorplan">{'Floor Plan'}</TabsTrigger>
              <TabsTrigger value="map">{'Map'}</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-4">
              <p className="text-muted-foreground">{property.description}</p>
            </TabsContent>
            <TabsContent value="floorplan" className="mt-4">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
                <Image
                  src={property.floorPlan}
                  alt={`Floor plan for ${property.title}`}
                  fill
                  className="object-contain"
                />
              </div>
            </TabsContent>
            <TabsContent value="map" className="mt-4">
              <div className="aspect-video rounded-lg bg-muted flex items-center justify-center">
                <p className="text-muted-foreground">
                  {'Map view requires API key configuration'}
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

