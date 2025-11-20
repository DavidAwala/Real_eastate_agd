'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  const [location, setLocation] = useState('')
  const [priceRange, setPriceRange] = useState('all')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (location) params.append('location', location)
    if (priceRange !== 'all') params.append('price', priceRange)
    window.location.href = `/properties?${params.toString()}`
  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url(/placeholder.svg?height=600&width=1200&query=luxury-apartment-interior)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore premium properties and discover the perfect place to live.
          </p>
        </div>

        <form onSubmit={handleSearch} className="mx-auto max-w-2xl">
          <div className="bg-card rounded-lg shadow-lg p-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Location
                </label>
                <Input
                  type="text"
                  placeholder="City, neighborhood, or zip"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="bg-input border-input"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Price Range
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-input bg-input text-foreground"
                >
                  <option value="all">All prices</option>
                  <option value="under-500k">Under $500k</option>
                  <option value="500k-1m">$500k - $1M</option>
                  <option value="1m-2m">$1M - $2M</option>
                  <option value="over-2m">Over $2M</option>
                </select>
              </div>

              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-accent mb-2">2,400+</div>
            <p className="text-muted-foreground">Active Listings</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">500+</div>
            <p className="text-muted-foreground">Expert Agents</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-accent mb-2">98%</div>
            <p className="text-muted-foreground">Customer Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
