import Link from "next/link"
import { ArrowRight, BookOpen, Code2, FileText } from "lucide-react"

export const metadata = {
  title: "Resources | HubSpot Integration Guides & Tutorials | AeroRev",
  description: "Technical guides, integration tutorials, and RevOps resources for B2B companies using HubSpot. Learn how to integrate, automate, and optimize your CRM.",
}

const guides = [
  {
    slug: "hubspot-mycase-integration-law-firms",
    title: "Complete Guide to HubSpot + MyCase Integration for Law Firms",
    description: "Step-by-step technical guide to connecting HubSpot and MyCase using Zapier. Automate client intake, sync contacts and cases, and eliminate manual data entry.",
    category: "Integration Guide",
    readTime: "15 min read",
    icon: Code2,
    tags: ["HubSpot", "MyCase", "Zapier", "Legal"],
  },
  {
    slug: "sdr-automation-stack-hubspot-zapier",
    title: "Building an SDR Automation Stack (HubSpot + Zapier + VoIP)",
    description: "Complete technical guide to automating SDR workflows with HubSpot Sales Hub Pro. Intelligent lead routing, auto-enrollment workaround, and call disposition automation.",
    category: "Technical Guide",
    readTime: "18 min read",
    icon: Code2,
    tags: ["HubSpot", "SDR", "Zapier", "Sales Automation"],
  },
  {
    slug: "membership-events-automation-hubspot",
    title: "Membership + Events Automation in HubSpot",
    description: "Step-by-step guide to running membership organizations and events through HubSpot. Tier-based pricing automation, custom API integrations, and dual-pipeline management.",
    category: "Technical Guide",
    readTime: "17 min read",
    icon: Code2,
    tags: ["HubSpot", "Membership", "Events", "API Integration"],
  },
]

const comingSoon = []

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              HubSpot Integration Guides & Technical Resources
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Step-by-step guides for integrating HubSpot with industry-specific tools, automating sales operations, and building revenue systems that actually work.
            </p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-12">Technical Guides</h2>
          
          <div className="grid grid-cols-1 gap-8">
            {guides.map((guide) => {
              const Icon = guide.icon
              return (
                <Link
                  key={guide.slug}
                  href={`/resources/guides/${guide.slug}`}
                  className="group p-8 lg:p-12 bg-card border border-border hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-secondary/50 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="text-xs font-medium text-muted-foreground">
                          {guide.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">
                          {guide.readTime}
                        </span>
                      </div>
                      
                      <h3 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                        {guide.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {guide.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {guide.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                        Read guide
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Coming Soon</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">
            More technical guides based on our client implementations. Subscribe to get notified when we publish new resources.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comingSoon.map((guide, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border opacity-60"
              >
                <div className="text-xs font-medium text-muted-foreground mb-3">
                  {guide.category} • Coming Soon
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {guide.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Need help implementing any of these?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We build these integrations for clients. We can set it up, test it, and hand it off working.
            </p>
            <Link href="/contact" className="btn-primary">
              Talk to Us About Your Setup
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
