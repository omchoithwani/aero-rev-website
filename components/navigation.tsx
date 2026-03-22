"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const services = [
  { name: "CRM Setup & Management", href: "/services/crm-setup-management" },
  { name: "HubSpot RevOps", href: "/services/hubspot-revops" },
  { name: "Outbound Systems", href: "/services/outbound-lead-generation" },
  { name: "Email Marketing", href: "/services/email-marketing" },
]

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Solutions", href: "/solutions" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Resources", href: "/resources" },
  { name: "Blog", href: "/blog" },
  { name: "HubSpot", href: "/hubspot-partner-agency" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="font-heading text-xl font-semibold text-foreground tracking-tight">
              AeroRev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-12">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div 
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link 
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                  >
                    {link.name}
                  </Link>
                  
                  <div className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-card border border-border shadow-xl p-3 transition-all duration-200",
                    servicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}>
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="btn-secondary text-xs px-6 py-3"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}>
          <div className="flex flex-col px-6 py-8">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  href={link.href}
                  className="block py-4 text-2xl font-heading font-medium text-foreground border-b border-border"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.hasDropdown && (
                  <div className="py-4 pl-4 flex flex-col gap-3 border-b border-border">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="mt-8">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Bottom border */}
      <div className="border-b border-border" />
    </header>
  )
}
