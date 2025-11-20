'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Heart, MapPin, DollarSign, Home, Phone, Mail, Share2 } from 'lucide-react'
import { useParams } from 'next/navigation'

const mockProperties = [
  { id: 1, title: 'Modern Downtown Loft', location: 'Downtown, New York', price: 1250000, beds: 2, baths: 2, sqft: 1200, image: '/modern-loft-interior.jpg', type: 'Residential', description: 'Beautiful modern loft in the heart of downtown with stunning city views and contemporary finishes.', yearBuilt: 2015, agent: { name: 'Sarah Johnson', phone: '(555) 123-4567', email: 'sarah@luxehaven.com', image: '/professional-headshot.jpg' } },
  { id: 2, title: 'Luxury Penthouse', location: 'Upper East Side, Manhattan', price: 3500000, beds: 4, baths: 3, sqft: 3500, image: '/luxury-penthouse-view.jpg', type: 'Luxury', description: 'Spectacular penthouse with panoramic city views, luxury finishes, and state-of-the-art amenities.', yearBuilt: 2018, agent: { name: 'Michael Chen', phone: '(555) 234-5678', email: 'michael@luxehaven.com', image: '/professional-headshot.jpg' } },
]

export default function PropertyDetailPage() {
  const params = useParams()
  const propertyId = parseInt(params.id as string, 10)
  const [isSaved, setIsSaved] = useState(false)

  const property = mockProperties.find((p) => p.id === propertyId) || mockProperties[0]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Link href="/properties" className="text-primary hover:text-primary/80 mb-6 inline-flex items-center">
          ← Back to Properties
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative">
                <img
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
                <button
                  onClick={() => setIsSaved(!isSaved)}
                  className={`absolute top-4 right-4 p-3 rounded-full transition ${
                    isSaved ? 'bg-accent' : 'bg-background/90'
                  }`}
                >
                  <Heart
                    className={`h-6 w-6 ${
                      isSaved ? 'fill-accent-foreground text-accent-foreground' : 'text-foreground'
                    }`}
                  />
                </button>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-5 w-5 mr-2" />
                    {property.location}
                  </div>
                </div>
                <Button variant="outline" size="icon" className="border-border">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 p-6 bg-card rounded-lg border border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Price</div>
                  <div className="text-2xl font-bold text-accent">${(property.price / 1000000).toFixed(1)}M</div>
                </div>
                {property.beds > 0 && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Bedrooms</div>
                    <div className="text-2xl font-bold text-foreground">{property.beds}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Bathrooms</div>
                  <div className="text-2xl font-bold text-foreground">{property.baths}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Square Feet</div>
                  <div className="text-2xl font-bold text-foreground">{property.sqft.toLocaleString()}</div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">About This Property</h2>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{property.description}</p>
                <div className="grid grid-cols-2 gap-4 text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Property Type:</span> {property.type}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Year Built:</span> {property.yearBuilt}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Amenities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['Gym', 'Parking', 'Doorman', 'Rooftop', 'Garden', 'Security System', 'Pet Friendly', 'Renovated', 'Hardwood Floors'].map((amenity) => (
                  <div key={amenity} className="flex items-center p-3 bg-card rounded-lg border border-border">
                    <Home className="h-5 w-5 mr-2 text-accent" />
                    <span className="text-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <Card className="sticky top-24 p-6 border-border bg-card">
              <div className="mb-6">
                <div className="text-3xl font-bold text-accent mb-2">${(property.price / 1000000).toFixed(1)}M</div>
                <Button className="w-full bg-primary hover:bg-primary/90 mb-3">Schedule Tour</Button>
                <Button variant="outline" className="w-full border-border">Contact Agent</Button>
              </div>

              <div className="border-t border-border pt-6">
                <h3 className="font-semibold text-foreground mb-4">Agent Information</h3>
                <div className="flex gap-4">
                  <img
                    src={property.agent.image || "/placeholder.svg"}
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{property.agent.name}</h4>
                    <p className="text-sm text-muted-foreground mb-3">Licensed Agent</p>
                    <a href={`tel:${property.agent.phone}`} className="flex items-center text-primary hover:text-primary/80 text-sm mb-2">
                      <Phone className="h-4 w-4 mr-2" />
                      {property.agent.phone}
                    </a>
                    <a href={`mailto:${property.agent.email}`} className="flex items-center text-primary hover:text-primary/80 text-sm">
                      <Mail className="h-4 w-4 mr-2" />
                      {property.agent.email}
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
