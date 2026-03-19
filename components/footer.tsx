"use client"

import Link from "next/link"
import { Linkedin } from "lucide-react"
import { useEffect } from "react"

const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Solutions", href: "/solutions" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "CRM Setup and Management", href: "/services/crm-setup-management" },
    { name: "HubSpot RevOps", href: "/services/hubspot-revops" },
    { name: "Outbound Systems", href: "/services/outbound-lead-generation" },
    { name: "Email Marketing", href: "/services/email-marketing" },
  ],
  resources: [
    { name: "HubSpot Partner", href: "/hubspot-partner-agency" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
  ],
}

export function Footer() {
  useEffect(() => {
    // Load HubSpot tracking code
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.id = 'hs-script-loader'
    script.async = true
    script.defer = true
    script.src = '//js.hs-scripts.com/45587544.js'
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.getElementById('hs-script-loader')
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <footer className="bg-card border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-1">
              <span className="font-heading text-xl font-bold text-foreground">Aero</span>
              <span className="font-heading text-xl font-bold text-primary">Rev</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              AeroRev works on a retainer basis with B2B and ecommerce clients in the USA and UK. 
              We build revenue systems, run them, and stay accountable to results.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/aero-rev/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://ecosystem.hubspot.com/marketplace/solutions/aero-rev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                HubSpot Partner Directory
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Services</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-heading font-semibold text-foreground">Resources</h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="mailto:hello@aerorev.com"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                hello@aerorev.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AeroRev. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Serving B2B and ecommerce brands in the USA and UK.
          </p>
        </div>
      </div>
    </footer>
  )
}
