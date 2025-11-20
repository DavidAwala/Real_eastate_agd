'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, ArrowRight } from 'lucide-react'

const mockSavedProperties = [
  { id: 1, title: 'Modern Downtown Loft', location: 'Downtown, New York', price: 1250000, beds: 2, baths: 2, sqft: 1200, image: '/modern-loft-interior.jpg', type: 'Residential', savedDate: '2024-01-15' },
  { id: 2, title: 'Luxury Penthouse', location: 'Upper East Side, Manhattan', price: 3500000, beds: 4, baths: 3, sqft: 3500, image: '/luxury-penthouse-view.jpg', type: 'Luxury', savedDate: '2024-01-10' },
]

export default function SavedPage() {
  const [saved, setSaved] = useState(mockSavedProperties)

  const handleRemove = (id: number) => {
    setSaved(saved.filter((prop) => prop.id !== id))
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Saved Properties</h1>
          <p className="text-muted-foreground">{saved.length} property/ies saved</p>
        </div>

        {saved.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {saved.map((property) => (
              <Card key={property.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                  <button
                    onClick={() => handleRemove(property.id)}
                    className="absolute top-3 right-3 p-2 rounded-full bg-accent"
                  >
                    <Heart className="h-5 w-5 fill-accent-foreground text-accent-foreground" />
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
                  <div className="flex gap-4 text-sm text-muted-foreground mb-4">
                    {property.beds > 0 && <span>{property.beds} Beds</span>}
                    <span>{property.baths} Baths</span>
                    <span>{property.sqft.toLocaleString()} sqft</span>
                  </div>
                  <Link href={`/property/${property.id}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      View Details <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Heart className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h2 className="text-2xl font-semibold text-foreground mb-2">No saved properties yet</h2>
            <p className="text-muted-foreground mb-6">
              Start exploring properties and save your favorites!
            </p>
            <Link href="/properties">
              <Button className="bg-primary hover:bg-primary/90">
                Browse Properties
              </Button>
            </Link>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
