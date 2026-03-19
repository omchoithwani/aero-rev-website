import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Settings, TrendingUp, Mail, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services',
  description: 'AeroRev offers HubSpot CRM setup, RevOps consulting, outbound lead generation, and email marketing services for B2B and ecommerce brands.',
}

const services = [
  {
    icon: Settings,
    title: 'CRM Setup & Management',
    description: 'We configure, clean, and manage your HubSpot CRM so your sales team can actually use it. No more messy data, broken workflows, or manual processes.',
    href: '/services/crm-setup-management',
    features: ['HubSpot implementation', 'Data migration & cleanup', 'Pipeline setup', 'Custom properties & views'],
  },
  {
    icon: TrendingUp,
    title: 'HubSpot RevOps',
    description: 'Align your marketing, sales, and customer success teams around revenue. We build the systems, processes, and dashboards that drive predictable growth.',
    href: '/services/hubspot-revops',
    features: ['Revenue architecture', 'Process automation', 'Reporting dashboards', 'Team alignment'],
  },
  {
    icon: Users,
    title: 'Outbound Lead Generation',
    description: 'Done-for-you B2B outbound campaigns that book qualified meetings. We handle ICP research, list building, copy, and multi-channel outreach.',
    href: '/services/outbound-lead-generation',
    features: ['ICP research', 'List building', 'Cold email campaigns', 'LinkedIn outreach'],
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Retention and lifecycle email programs that turn one-time buyers into repeat customers. For ecommerce and SaaS brands ready to maximize LTV.',
    href: '/services/email-marketing',
    features: ['Welcome sequences', 'Abandoned cart flows', 'Win-back campaigns', 'Newsletter strategy'],
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="inline-block text-primary font-medium mb-4 tracking-wide uppercase text-sm">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance">
              Revenue Systems That Actually Work
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              We help B2B and ecommerce brands fix broken revenue systems, build outbound pipeline, and scale email revenue. No fluff, no templates, just results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group block p-8 md:p-10 bg-secondary/30 border border-border rounded-xl hover:border-primary/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-2 gap-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Book a free strategy call and we&apos;ll help you identify the biggest revenue opportunities in your business.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
            <Link href="/contact">
              Book Your Free Strategy Call
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
