import Link from "next/link"
import { ArrowRight, Target, Users, TrendingUp, Award } from "lucide-react"

export const metadata = {
  title: "About AeroRev | HubSpot Partner Agency for B2B Revenue Operations",
  description: "AeroRev is a HubSpot-partnered Revenue Operations agency serving B2B and ecommerce businesses in the USA and UK. We build, run, and stay accountable to revenue systems.",
}

const values = [
  {
    icon: Target,
    title: "Problem first, tools second",
    description: "We diagnose before implementing. No cookie-cutter solutions. No forcing HubSpot where it does not belong.",
  },
  {
    icon: TrendingUp,
    title: "Accountable to outcomes",
    description: "We do not disappear after setup. We stay on retainer, run the systems, and own the results.",
  },
  {
    icon: Users,
    title: "Work with founders and leaders",
    description: "We work directly with decision-makers who want honest direction, not agencies selling the most expensive package.",
  },
  {
    icon: Award,
    title: "Partner, not vendor",
    description: "HubSpot certified. Built systems for 60+ accounts. We know what works and what does not.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We build revenue systems that actually work
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              AeroRev is a HubSpot-partnered Revenue Operations agency serving B2B and ecommerce businesses in the USA and UK.
            </p>
            <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
              We build revenue systems, run them on retainer, and stay accountable to results. No disappearing after setup. No generic playbooks.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
                What we do
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                We work with B2B and ecommerce companies who are paying for HubSpot but not getting the value they expected. Revenue is stuck. Data is messy. Teams are not using the CRM.
              </p>
              <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                We fix it. Clean up the chaos. Build systems that fit how your team actually works. Then we stay on retainer to run it and keep it working.
              </p>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">HubSpot CRM Setup and Management</h3>
                <p className="mt-2 text-muted-foreground">
                  We set up HubSpot properly from the start or clean up the mess from a bad implementation. Custom objects, pipelines, workflows, reporting.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Revenue Operations</h3>
                <p className="mt-2 text-muted-foreground">
                  We connect sales, marketing, and customer success into one revenue engine. Forecasting, attribution, lifecycle stage tracking, deal scoring.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Outbound Systems</h3>
                <p className="mt-2 text-muted-foreground">
                  We build and manage signal-based cold email and LinkedIn outbound. No spray and pray. Hyper-personalised messaging your competitors are not doing.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-xl font-semibold text-foreground">Email Marketing</h3>
                <p className="mt-2 text-muted-foreground">
                  For ecommerce brands, we build and manage email marketing systems in Klaviyo, Mailchimp, or HubSpot. Flows, segmentation, campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            How we work
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Audit</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We dig into your current setup. What is broken? What is working? What are you actually trying to achieve?
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Plan</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We build a roadmap. No fluff. Clear priorities. What gets fixed first, what comes later, what gets left alone.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Build</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We implement. Clean data, build workflows, set up pipelines, train your team. We do the work, you stay focused on revenue.
              </p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <span className="font-heading text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">Run</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We stay on retainer. Manage campaigns, optimise workflows, troubleshoot issues, keep everything running. You get results, not tickets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            What we believe
          </h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value) => {
              const Icon = value.icon
              return (
                <div key={value.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">{value.title}</h3>
                    <p className="mt-2 text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Who we are
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              AeroRev is led by Om Choithwani, a HubSpot specialist with 6+ years of experience across multiple HubSpot partner agencies including INSIDEA and webdew.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Om has worked hands-on with 60+ HubSpot accounts, scaling everything from startup CRM setups to enterprise RevOps transformations. He knows what breaks, what scales, and what actually drives revenue.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              AeroRev operates as an independent consultancy, not an agency selling packages. We work on retainer with clients who want honest direction and accountability to results.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a 
                href="https://www.linkedin.com/in/omchoithwani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                Connect on LinkedIn →
              </a>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://ecosystem.hubspot.com/marketplace/solutions/aero-rev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
              >
                View HubSpot Partner Profile →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
              Ready to fix what is broken?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Book a call or send us a message. We will tell you exactly what is stuck and how we would fix it.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/services" className="btn-secondary">
                View services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
