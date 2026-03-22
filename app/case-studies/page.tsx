import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies | AeroRev",
  description: "Real HubSpot RevOps implementations. See how we've built CRM systems, automated sales operations, and integrated complex tech stacks for B2B companies.",
}

const caseStudies = [
  {
    slug: "legal-services-crm",
    title: "Legal Services Firm: End-to-End HubSpot + MyCase Integration",
    client: "Multi-Practice Law Firm",
    industry: "Legal Services",
    challenge: "Three practice areas (criminal defense, estate planning, personal injury) using disconnected systems. No native integration between HubSpot and MyCase. Manual data entry everywhere. Legal documents sent manually.",
    result: "Single unified CRM with bidirectional sync between HubSpot and MyCase via Zapier. Automated legal document generation via Portant. Full client journey automated from lead capture through case creation.",
    metrics: [
      { label: "Manual Data Entry", value: "Eliminated" },
      { label: "Systems Integrated", value: "3" },
      { label: "Document Automation", value: "100%" },
    ],
    tags: ["HubSpot CRM", "Legal", "Zapier", "MyCase", "Portant"],
  },
  {
    slug: "global-leadership-community",
    title: "Global Leadership Community: Membership + Events Automation",
    client: "International Leadership Organization",
    industry: "Community & Events",
    challenge: "Running memberships and high-end adventure events through manual processes. No integration between HubSpot and Outseta (membership portal). Tier-based pricing varied by event. Billing contacts needed separate payment routing.",
    result: "Two automated pipelines (memberships + events) in HubSpot. Custom API integration with Outseta. Tier-based Stripe payment link automation. Full lifecycle from application to onboarding without manual touchpoints.",
    metrics: [
      { label: "Pipelines Built", value: "2" },
      { label: "Platforms Synced", value: "3+" },
      { label: "Manual Billing", value: "0" },
    ],
    tags: ["HubSpot", "Outseta", "Stripe", "Custom API", "Membership"],
  },
  {
    slug: "remote-staffing-sdr",
    title: "Remote Staffing Company: SDR Sales Automation Stack",
    client: "Construction Industry Staffing",
    industry: "B2B Staffing",
    challenge: "SDR team manually routing leads, manually enrolling sequences, no dialer integration. Sales Hub Pro doesn't support auto-enrollment on contact creation. 9 different call dispositions triggering different next steps.",
    result: "Four-tool sales engine: SalesIntel → HubSpot → Zapier → Nooks. Intelligent round-robin + company-match routing. Auto-enrollment workaround using Zapier. Call disposition automation. 45-day recycle loop for soft-no contacts.",
    metrics: [
      { label: "Lead Routing", value: "100% Auto" },
      { label: "Call Dispositions", value: "9 Mapped" },
      { label: "Recycle Loop", value: "45 Days" },
    ],
    tags: ["HubSpot", "SalesIntel", "Zapier", "Nooks", "SDR Automation"],
  },
]

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Real systems we've built
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We build HubSpot systems, automate sales operations, and integrate tech stacks that don't talk to each other. Then we stick around to run them. Here's what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study) => (
              <div 
                key={study.slug}
                className="group relative p-8 lg:p-12 bg-card border border-border hover:border-foreground/20 transition-all"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  {/* Left: Title & Problem */}
                  <div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">
                      {study.client}
                    </div>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6 group-hover:text-foreground/80 transition-colors">
                      {study.title}
                    </h2>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">The Problem</div>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">What We Built</div>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.result}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right: Metrics & CTA */}
                  <div className="flex flex-col justify-between">
                    <div className="space-y-4 mb-8">
                      {study.metrics.map((metric) => (
                        <div key={metric.label} className="flex justify-between items-baseline pb-4 border-b border-border">
                          <span className="text-sm text-muted-foreground">{metric.label}</span>
                          <span className="text-2xl font-heading font-bold text-foreground">{metric.value}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="inline-flex items-center text-sm font-medium text-foreground hover:text-foreground/70 transition-colors group/link"
                    >
                      Read technical breakdown
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Need something like this built?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what's broken. We'll tell you how we'd fix it. No pitch deck. No pressure.
            </p>
            <Link href="/contact" className="btn-primary">
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
