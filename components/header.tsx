'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card">
      <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary" />
            <span className="text-xl font-bold text-foreground">LuxeHaven</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/properties" className="text-sm text-muted-foreground hover:text-foreground transition">
              Properties
            </Link>
            <Link href="/agents" className="text-sm text-muted-foreground hover:text-foreground transition">
              Agents
            </Link>
            <Link href="/saved" className="text-sm text-muted-foreground hover:text-foreground transition">
              Saved
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/saved">
              <Button variant="ghost" size="icon">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Button className="bg-primary hover:bg-primary/90">Sign In</Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-3 border-t border-border pt-4">
            <Link href="/properties" className="block text-sm text-muted-foreground hover:text-foreground">
              Properties
            </Link>
            <Link href="/agents" className="block text-sm text-muted-foreground hover:text-foreground">
              Agents
            </Link>
            <Link href="/saved" className="block text-sm text-muted-foreground hover:text-foreground">
              Saved
            </Link>
            <Link href="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
              Contact
            </Link>
            <Button className="w-full bg-primary hover:bg-primary/90">Sign In</Button>
          </div>
        )}
      </nav>
    </header>
  )
}
