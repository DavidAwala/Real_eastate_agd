'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Star, MapPin, DollarSign, Phone, Mail } from 'lucide-react'

const mockAgents = [
  { id: 1, name: 'Sarah Johnson', specialty: 'Residential', location: 'Manhattan', sales: 450, rating: 4.9, image: '/professional-woman-headshot.jpg', bio: 'Expert in residential properties with 15 years of experience.' },
  { id: 2, name: 'Michael Chen', specialty: 'Luxury', location: 'Upper East Side', sales: 320, rating: 4.8, image: '/professional-man-headshot.jpg', bio: 'Specializes in luxury penthouses and high-end properties.' },
  { id: 3, name: 'Emily Rodriguez', specialty: 'Commercial', location: 'Midtown', sales: 280, rating: 4.7, image: '/professional-woman-headshot-2.jpg', bio: 'Commercial real estate expert with strong portfolio.' },
  { id: 4, name: 'James Wilson', specialty: 'Residential', location: 'Brooklyn', sales: 380, rating: 4.9, image: '/professional-man-headshot-2.jpg', bio: 'Brooklyn specialist helping families find their dream homes.' },
  { id: 5, name: 'Lisa Park', specialty: 'Luxury', location: 'Hamptons', sales: 210, rating: 4.9, image: '/professional-woman-headshot-3.jpg', bio: 'Hamptons luxury estate expert with premium clientele.' },
  { id: 6, name: 'David Martinez', specialty: 'Commercial', location: 'Financial District', sales: 290, rating: 4.8, image: '/professional-man-headshot-3.jpg', bio: 'Financial district commercial space specialist.' },
]

export default function AgentsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-3">Our Expert Agents</h1>
          <p className="text-lg text-muted-foreground">
            Meet our experienced team of real estate professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockAgents.map((agent) => (
            <Card key={agent.id} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden bg-muted">
                <img
                  src={agent.image || "/placeholder.svg"}
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-1">{agent.name}</h3>
                <p className="text-sm text-accent font-semibold mb-3">{agent.specialty}</p>
                <p className="text-sm text-muted-foreground mb-4">{agent.bio}</p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center text-sm">
                  <div>
                    <div className="font-bold text-foreground">{agent.sales}</div>
                    <div className="text-xs text-muted-foreground">Sales</div>
                  </div>
                  <div>
                    <div className="flex items-center justify-center text-accent font-bold mb-1">
                      {agent.rating} <Star className="h-3 w-3 fill-accent ml-1" />
                    </div>
                    <div className="text-xs text-muted-foreground">Rating</div>
                  </div>
                  <div>
                    <div className="font-bold text-foreground flex items-center justify-center">
                      <MapPin className="h-4 w-4 mr-1" /> {agent.location.split(',')[0]}
                    </div>
                    <div className="text-xs text-muted-foreground">Location</div>
                  </div>
                </div>

                <div className="space-y-2 pt-4 border-t border-border">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-sm">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Agent
                  </Button>
                  <Button variant="outline" className="w-full border-border text-sm">
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
