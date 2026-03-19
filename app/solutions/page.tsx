import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Revenue Solutions for B2B and Ecommerce Brands",
  description: "Whether you need CRM, outbound or email marketing, AeroRev builds solutions around your specific revenue problem. B2B and ecommerce brands in the USA and UK.",
}

const solutionBuckets = [
  {
    title: "Your CRM Is Costing You More Than It Is Making You",
    pain: [
      "Your team avoids the CRM because the data is unreliable.",
      "Deals disappear into the void and nobody knows why.",
      "You have paid for it for months and it has not changed a single outcome.",
      "Reports tell management almost nothing useful.",
      "Nobody owns keeping it clean or maintained.",
    ],
    solution: "AeroRev builds your CRM properly, trains your team on what it is actually capable of, and owns the ongoing management. We turn your expensive contact list into a revenue-driving system.",
    proof: "A professional services firm on Pipedrive had a pipeline with seventeen stages nobody used. After we rebuilt it, their deal close rate improved by 34% and the team stopped working around the CRM.",
    cta: "Fix My CRM",
    href: "/services/crm-setup-management",
  },
  {
    title: "Your Outbound Is Producing Nothing",
    pain: [
      "You pull lists from Apollo and hit send with generic copy.",
      "Reply rates are near zero and your domain health is suffering.",
      "You have tried outbound twice before with two different agencies and got nothing.",
      "Prospects feel like they are getting the same email as everyone else. Because they are.",
      "Your sending domain ended up on a blacklist.",
    ],
    solution: "AeroRev builds signal-based outbound infrastructure with hyper-personalised sequences. We find the trigger that tells us why this person, at this company, needs what you offer right now. Then we write to that specific moment.",
    proof: "A SaaS company tried outbound twice before. Generic sequences, no personalisation, domain blacklisted. We rebuilt from the ground up with signal-based targeting. Reply rates went from under 1% to 14%. They now book 25+ qualified meetings per month.",
    cta: "Build My Outbound",
    href: "/services/outbound-lead-generation",
  },
  {
    title: "Your Email List Is Sitting There Making Excuses",
    pain: [
      "Flows were set up once and never touched again.",
      "The same campaign goes to everyone regardless of what they bought or when.",
      "Copy sounds like it came from a template. Design looks like every other brand.",
      "Open rates are okay but click rates embarrass you.",
      "Revenue from email does not reflect the size and quality of the list.",
    ],
    solution: "AeroRev rebuilds all core flows, segments your list by behaviour, and rewrites campaigns to speak to where each customer actually is. We make email your most consistent revenue channel.",
    proof: "A DTC brand on Klaviyo had email contributing 9% of total revenue. We rebuilt flows, segmented by purchase frequency and category affinity. Within ninety days, email was 28% of total revenue.",
    cta: "Unlock My Email Revenue",
    href: "/services/email-marketing",
  },
]

export default function SolutionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              You do not need to know what RevOps is
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              You just need to know which of these problems sounds familiar. Pick the one that hits closest to home and we will show you how we fix it.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Buckets */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {solutionBuckets.map((bucket, index) => (
              <div
                key={index}
                className="p-8 lg:p-12 rounded-2xl border border-border bg-background"
              >
                <h2 className="font-heading text-2xl lg:text-3xl font-bold text-foreground">
                  {bucket.title}
                </h2>
                
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Pain Column */}
                  <div>
                    <h3 className="font-heading font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                      Does this sound familiar?
                    </h3>
                    <ul className="mt-4 flex flex-col gap-3">
                      {bucket.pain.map((point, i) => (
                        <li key={i} className="flex gap-3 text-foreground">
                          <span className="text-primary">—</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution Column */}
                  <div>
                    <h3 className="font-heading font-semibold text-primary text-sm uppercase tracking-wide">
                      What AeroRev does
                    </h3>
                    <p className="mt-4 text-foreground leading-relaxed">
                      {bucket.solution}
                    </p>
                    
                    <div className="mt-8 p-6 rounded-xl bg-card border border-border">
                      <h4 className="font-heading font-semibold text-muted-foreground text-xs uppercase tracking-wide">
                        Real Result
                      </h4>
                      <p className="mt-2 text-sm text-foreground leading-relaxed">
                        {bucket.proof}
                      </p>
                    </div>
                  </div>
                </div>

                <Link
                  href={bucket.href}
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {bucket.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RevOps Explanation */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              What is RevOps anyway?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              RevOps, or Revenue Operations, is the discipline of connecting your CRM, your outbound, and your email marketing into one system where nothing falls through the cracks and every decision is backed by real data. You do not need to care about the label. You just need the result.
            </p>
            <p className="mt-4 text-lg text-foreground">
              If you want the system that connects all three, that is what we build.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Talk to Us About RevOps
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Full Service Overview */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Four services. One revenue system.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Available individually or as a complete revenue operation.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "CRM Setup and Management",
                description: "HubSpot, Pipedrive, Monday.com, Salesforce, Zoho, and more. Built properly. Managed continuously.",
                href: "/services/crm-setup-management",
              },
              {
                title: "HubSpot RevOps",
                description: "Workflow automation, lifecycle management, reporting, and sales-marketing alignment on HubSpot.",
                href: "/services/hubspot-revops",
              },
              {
                title: "Outbound Systems",
                description: "Signal-based cold email and LinkedIn outbound. Built and managed end to end.",
                href: "/services/outbound-lead-generation",
              },
              {
                title: "Email Marketing",
                description: "Klaviyo, Mailchimp, and HubSpot. Flows, segmentation, copy, design, and revenue attribution.",
                href: "/services/email-marketing",
              },
            ].map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group flex flex-col p-8 rounded-2xl border border-border bg-background hover:border-primary/50 transition-all"
              >
                <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-auto pt-6 flex items-center text-primary font-medium text-sm">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Not sure which one applies to you?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Talk to us and we will tell you exactly where your revenue is leaking. No pitch. Just honest direction on what needs to happen first.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
