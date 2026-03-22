import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Case Studies | AeroRev",
  description: "Real results from HubSpot RevOps implementations. See how we've helped B2B and ecommerce companies fix their revenue systems and drive growth.",
}

const caseStudies = [
  {
    slug: "legal-services-crm",
    title: "Legal Services Firm: HubSpot CRM Implementation",
    client: "Multi-Practice Law Firm",
    industry: "Legal Services",
    challenge: "Three separate practice areas using disconnected systems. No pipeline visibility. Clients falling through cracks.",
    result: "Single unified CRM across all practices. 40% reduction in client follow-up time. Full pipeline visibility for partners.",
    metrics: [
      { label: "Pipeline Visibility", value: "0% → 100%" },
      { label: "Follow-up Time", value: "-40%" },
      { label: "Client Retention", value: "+25%" },
    ],
    tags: ["HubSpot CRM", "Legal", "Multi-Pipeline"],
  },
  {
    slug: "saas-outbound-pipeline",
    title: "B2B SaaS: Outbound Lead Generation System",
    client: "HR Tech SaaS Platform",
    industry: "B2B SaaS",
    challenge: "Cold outbound was spray-and-pray. 0.3% reply rate. Sales team wasting time on unqualified leads.",
    result: "Signal-based targeting. Hyper-personalized sequences. 4.2% reply rate. 12 qualified demos per month.",
    metrics: [
      { label: "Reply Rate", value: "0.3% → 4.2%" },
      { label: "Qualified Demos", value: "2 → 12/month" },
      { label: "Cost per Demo", value: "-65%" },
    ],
    tags: ["Outbound", "B2B SaaS", "Cold Email"],
  },
  {
    slug: "ecommerce-email-revenue",
    title: "Ecommerce Brand: Email Marketing Revenue Growth",
    client: "D2C Fashion Brand",
    industry: "Ecommerce",
    challenge: "Email marketing existed but wasn't optimized. Basic flows. No segmentation. Revenue attribution unclear.",
    result: "Advanced flows + behavioral segmentation. Email revenue grew from 18% to 34% of total revenue in 6 months.",
    metrics: [
      { label: "Email Revenue %", value: "18% → 34%" },
      { label: "Flow Conversion", value: "+127%" },
      { label: "Revenue per Email", value: "+89%" },
    ],
    tags: ["Email Marketing", "Ecommerce", "Klaviyo"],
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
              Real results from real clients
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              We do not just set up systems and disappear. We stay on retainer, run the operations, and own the results. Here's what that looks like.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {caseStudies.map((study, index) => (
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
                        <div className="text-sm font-semibold text-foreground mb-2">Challenge</div>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-semibold text-foreground mb-2">Result</div>
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
                      Read full case study
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
              Want results like these?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what's broken. We'll tell you how we'd fix it. No pitch. No pressure.
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
