'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import { useState } from 'react'

const mockProperties = [
  {
    id: 1,
    title: 'Modern Downtown Loft',
    location: 'Downtown, New York',
    price: 1250000,
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: '/modern-loft-interior.jpg',
    type: 'Residential',
  },
  {
    id: 2,
    title: 'Luxury Penthouse',
    location: 'Upper East Side, Manhattan',
    price: 3500000,
    beds: 4,
    baths: 3,
    sqft: 3500,
    image: '/luxury-penthouse-view.jpg',
    type: 'Luxury',
  },
  {
    id: 3,
    title: 'Charming Brooklyn Brownstone',
    location: 'Park Slope, Brooklyn',
    price: 2100000,
    beds: 3,
    baths: 2,
    sqft: 1800,
    image: '/brooklyn-brownstone-exterior.jpg',
    type: 'Residential',
  },
  {
    id: 4,
    title: 'Commercial Office Space',
    location: 'Midtown, Manhattan',
    price: 5000000,
    beds: 0,
    baths: 2,
    sqft: 5000,
    image: '/modern-office-space.jpg',
    type: 'Commercial',
  },
  {
    id: 5,
    title: 'Waterfront Studio',
    location: 'Battery Park, NY',
    price: 895000,
    beds: 1,
    baths: 1,
    sqft: 650,
    image: '/waterfront-apartment-view.jpg',
    type: 'Residential',
  },
  {
    id: 6,
    title: 'Luxury Estate',
    location: 'Hamptons, NY',
    price: 7500000,
    beds: 6,
    baths: 5,
    sqft: 8000,
    image: '/luxury-estate-mansion.jpg',
    type: 'Luxury',
  },
]

function PropertyCard({ property }: { property: typeof mockProperties[0] }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <Link href={`/property/${property.id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full">
        <div className="relative h-48 overflow-hidden bg-muted">
          <img
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
          <button
            onClick={(e) => {
              e.preventDefault()
              setIsSaved(!isSaved)
            }}
            className={`absolute top-3 right-3 p-2 rounded-full transition ${
              isSaved ? 'bg-accent' : 'bg-background/80'
            }`}
          >
            <Heart
              className={`h-5 w-5 ${isSaved ? 'fill-accent-foreground text-accent-foreground' : 'text-foreground'}`}
            />
          </button>
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
            {property.type}
          </span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg text-foreground mb-1 line-clamp-1">
            {property.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{property.location}</p>
          <div className="mb-4">
            <p className="text-2xl font-bold text-accent">
              ${(property.price / 1000000).toFixed(1)}M
            </p>
          </div>
          <div className="flex gap-4 text-sm text-muted-foreground">
            {property.beds > 0 && <span>{property.beds} Beds</span>}
            <span>{property.baths} Baths</span>
            <span>{property.sqft.toLocaleString()} sqft</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}

export default function FeaturedProperties() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-3">Featured Properties</h2>
          <p className="text-lg text-muted-foreground">
            Discover our handpicked selection of premium properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {mockProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center">
          <Link href="/properties">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
