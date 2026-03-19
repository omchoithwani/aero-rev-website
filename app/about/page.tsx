import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Linkedin, Play } from "lucide-react"

export const metadata: Metadata = {
  title: "About AeroRev | HubSpot RevOps and Outbound Agency USA and UK",
  description: "Meet Adarsh and Om — the operators behind AeroRev. 6 years experience, $4M+ revenue generated and $15M+ in revenue leaks fixed for B2B and ecommerce brands.",
}

const founders = [
  {
    name: "Adarsh Mishra",
    role: "Co-founder",
    bio: "Revenue operations specialist with deep expertise in HubSpot implementation and B2B outbound systems. Has built and scaled revenue operations for SaaS companies and agencies across the USA and UK.",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Om Choithwani",
    role: "Co-founder",
    bio: "Email marketing and ecommerce revenue expert. Specialises in Klaviyo, Mailchimp, and HubSpot email systems that turn lists into consistent revenue channels for DTC and B2B brands.",
    linkedin: "https://linkedin.com",
  },
]

const industries = [
  "SaaS and Tech",
  "Recruitment and Staffing",
  "Ecommerce and DTC",
  "Professional Services",
  "Agencies",
]

const testimonials = [
  { industry: "B2B Tech Company", result: "Revenue operations transformed in 90 days" },
  { industry: "Recruitment Agency", result: "From zero outbound to 20+ meetings per month" },
  { industry: "DTC Brand", result: "Email revenue contribution tripled" },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              We exist because most agencies let their clients down
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              The agency world is full of teams that take a brief, disappear for three weeks, and hand you a document that sits in a folder forever. That is not how revenue systems get fixed.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                The AeroRev approach
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                We get inside your business. We understand your entire revenue picture. We tell you exactly where money is being lost and why. Then we fix it. At the same time, we build you a strong and consistent stream of new pipeline from the outside.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Most agencies pick one lane. We cover the whole track. We are strategic revenue partners first and executors second. Every client gets honest direction on what to fix, what to prioritise, and what is actively costing them money right now.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="font-heading text-4xl font-bold text-primary">$4M+</div>
                <p className="mt-2 text-foreground font-medium">Revenue Generated</p>
                <p className="mt-1 text-sm text-muted-foreground">Direct, attributable revenue generated for our clients through improved systems and outbound campaigns.</p>
              </div>
              <div className="p-6 rounded-xl border border-border bg-background">
                <div className="font-heading text-4xl font-bold text-primary">$15M+</div>
                <p className="mt-2 text-foreground font-medium">Revenue Leaks Fixed</p>
                <p className="mt-1 text-sm text-muted-foreground">Money that was being left on the table through broken systems, missed follow-ups, and underperforming email.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Six years of real work
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Between us, we have close to six years of combined experience building revenue systems for B2B and ecommerce businesses across the USA and UK. That includes time at HubSpot partner agencies, independent consulting, and working directly inside scaling companies.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We have seen the inside of broken revenue operations. CRMs with seventeen pipeline stages nobody uses. Outbound campaigns that burned through sending domains in weeks. Email programmes that sent the same campaign to everyone regardless of behaviour. We know exactly what goes wrong because we have fixed it dozens of times.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            How AeroRev works
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnose", description: "We audit your current systems and tell you exactly where money is being lost. No sugarcoating." },
              { step: "02", title: "Build", description: "We build the systems properly. CRM architecture, outbound infrastructure, email flows. Done right." },
              { step: "03", title: "Run", description: "We do not hand it back and disappear. We run the systems, optimise continuously, and stay in the weeds." },
              { step: "04", title: "Scale", description: "As your business grows, we evolve the systems. Strategic direction on what to build next." },
            ].map((item) => (
              <div key={item.step} className="p-6 rounded-xl border border-border bg-background">
                <div className="font-heading text-5xl font-bold text-primary/20">{item.step}</div>
                <h3 className="mt-4 font-heading text-xl font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HubSpot Partnership */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="p-8 lg:p-12 rounded-2xl border border-primary/20 bg-primary/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                  Official Partner
                </span>
                <h2 className="mt-4 font-heading text-3xl lg:text-4xl font-bold text-foreground">
                  HubSpot Partner Agency
                </h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  AeroRev is an official HubSpot Partner. This is not just a badge. It means certified expertise across all Hubs, direct access to HubSpot support, and a higher standard of implementation that HubSpot holds us accountable to.
                </p>
                <Link
                  href="/hubspot-partner-agency"
                  className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Learn more about our HubSpot practice
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-48 h-48 rounded-2xl bg-card border border-border flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-foreground">HubSpot<br/>Partner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            Meet the founders
          </h2>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {founders.map((founder) => (
              <div key={founder.name} className="flex flex-col lg:flex-row gap-8 p-8 rounded-2xl border border-border bg-background">
                <div className="w-32 h-32 rounded-xl bg-secondary shrink-0" />
                <div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.role}</p>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{founder.bio}</p>
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            Hear from our clients
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="aspect-video rounded-xl bg-card border border-border flex items-center justify-center cursor-pointer group-hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="h-6 w-6 text-primary ml-1" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-foreground">{testimonial.industry}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Industries we work in
            </h2>
            <p className="mt-4 text-muted-foreground">
              We have deep experience in these five industries. If you are in one of them, we already know your pain points.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <div
                key={industry}
                className="px-6 py-3 rounded-full border border-border bg-background text-foreground font-medium"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Ready to work with operators who actually care about results?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a call. We will tell you exactly what is broken and how we would fix it. Then you decide if you want to work together.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Work With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
