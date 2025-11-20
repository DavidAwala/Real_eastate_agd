import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold text-foreground mb-4">LuxeHaven</h3>
            <p className="text-sm text-muted-foreground">Discover your dream property with LuxeHaven premium real estate platform.</p>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Browse</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/properties" className="hover:text-foreground">All Properties</Link></li>
              <li><Link href="/properties?type=residential" className="hover:text-foreground">Residential</Link></li>
              <li><Link href="/properties?type=commercial" className="hover:text-foreground">Commercial</Link></li>
              <li><Link href="/properties?type=luxury" className="hover:text-foreground">Luxury</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">About Us</Link></li>
              <li><Link href="/" className="hover:text-foreground">Careers</Link></li>
              <li><Link href="/" className="hover:text-foreground">Blog</Link></li>
              <li><Link href="/" className="hover:text-foreground">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/" className="hover:text-foreground">Privacy</Link></li>
              <li><Link href="/" className="hover:text-foreground">Terms</Link></li>
              <li><Link href="/" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">&copy; 2025 LuxeHaven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
