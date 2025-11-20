'use client'

import { useState, useMemo } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, Search, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

const mockProperties = [
  { id: 1, title: 'Modern Downtown Loft', location: 'Downtown, New York', price: 1250000, beds: 2, baths: 2, sqft: 1200, image: '/modern-loft-interior.jpg', type: 'Residential', neighborhood: 'Downtown' },
  { id: 2, title: 'Luxury Penthouse', location: 'Upper East Side, Manhattan', price: 3500000, beds: 4, baths: 3, sqft: 3500, image: '/luxury-penthouse-view.jpg', type: 'Luxury', neighborhood: 'Upper East Side' },
  { id: 3, title: 'Charming Brooklyn Brownstone', location: 'Park Slope, Brooklyn', price: 2100000, beds: 3, baths: 2, sqft: 1800, image: '/brooklyn-brownstone-exterior.jpg', type: 'Residential', neighborhood: 'Park Slope' },
  { id: 4, title: 'Commercial Office Space', location: 'Midtown, Manhattan', price: 5000000, beds: 0, baths: 2, sqft: 5000, image: '/modern-office-space.jpg', type: 'Commercial', neighborhood: 'Midtown' },
  { id: 5, title: 'Waterfront Studio', location: 'Battery Park, NY', price: 895000, beds: 1, baths: 1, sqft: 650, image: '/waterfront-apartment-view.jpg', type: 'Residential', neighborhood: 'Battery Park' },
  { id: 6, title: 'Luxury Estate', location: 'Hamptons, NY', price: 7500000, beds: 6, baths: 5, sqft: 8000, image: '/luxury-estate-mansion.jpg', type: 'Luxury', neighborhood: 'Hamptons' },
  { id: 7, title: 'Cozy Studio Apartment', location: 'East Village, Manhattan', price: 650000, beds: 1, baths: 1, sqft: 500, image: '/studio-apartment-modern.jpg', type: 'Residential', neighborhood: 'East Village' },
  { id: 8, title: 'Modern Family Home', location: 'Queens, NY', price: 1500000, beds: 4, baths: 3, sqft: 2200, image: '/family-home-exterior.jpg', type: 'Residential', neighborhood: 'Queens' },
  { id: 9, title: 'Tech Hub Office', location: 'Tribeca, Manhattan', price: 6500000, beds: 0, baths: 4, sqft: 7000, image: '/tech-office-interior.jpg', type: 'Commercial', neighborhood: 'Tribeca' },
]

export default function PropertiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState('all')
  const [propertyType, setPropertyType] = useState('all')
  const [savedProperties, setSavedProperties] = useState<number[]>([])

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((prop) => {
      const matchesSearch = prop.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        prop.neighborhood.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesType = propertyType === 'all' || prop.type === propertyType

      let matchesPrice = true
      if (priceRange === 'under-500k') matchesPrice = prop.price < 500000
      else if (priceRange === '500k-1m') matchesPrice = prop.price >= 500000 && prop.price < 1000000
      else if (priceRange === '1m-2m') matchesPrice = prop.price >= 1000000 && prop.price < 2000000
      else if (priceRange === 'over-2m') matchesPrice = prop.price >= 2000000

      return matchesSearch && matchesType && matchesPrice
    })
  }, [searchTerm, priceRange, propertyType])

  const toggleSaved = (id: number) => {
    setSavedProperties((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Browse Properties</h1>
          <p className="text-muted-foreground">Find your perfect property from our extensive listings</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
          <div className="lg:col-span-3">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by location or property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-card border-border"
              />
            </div>
          </div>
          <Button variant="outline" className="border-border">
            <SlidersHorizontal className="h-4 w-4 mr-2" />
            More Filters
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Type</label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-input bg-card text-foreground"
            >
              <option value="all">All Types</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Luxury">Luxury</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Price Range</label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-2 rounded-md border border-input bg-card text-foreground"
            >
              <option value="all">All prices</option>
              <option value="under-500k">Under $500k</option>
              <option value="500k-1m">$500k - $1M</option>
              <option value="1m-2m">$1M - $2M</option>
              <option value="over-2m">Over $2M</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Results</label>
            <div className="text-2xl font-bold text-accent">{filteredProperties.length}</div>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
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
                        toggleSaved(property.id)
                      }}
                      className={`absolute top-3 right-3 p-2 rounded-full transition ${
                        savedProperties.includes(property.id) ? 'bg-accent' : 'bg-background/80'
                      }`}
                    >
                      <Heart
                        className={`h-5 w-5 ${
                          savedProperties.includes(property.id)
                            ? 'fill-accent-foreground text-accent-foreground'
                            : 'text-foreground'
                        }`}
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
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-4">No properties found matching your criteria.</p>
            <Button
              onClick={() => {
                setSearchTerm('')
                setPriceRange('all')
                setPropertyType('all')
              }}
              className="bg-primary hover:bg-primary/90"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
