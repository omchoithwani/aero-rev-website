import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Plus } from "lucide-react"

const stats = [
  { value: "$4M+", label: "Revenue Generated" },
  { value: "$15M+", label: "Revenue Leaks Fixed" },
  { value: "6", label: "Years Experience" },
  { value: "USA & UK", label: "Serving Clients" },
]

const services = [
  {
    number: "01",
    title: "CRM Setup & Management",
    description: "Your CRM should drive revenue, not collect dust. We build it right, train your team, and manage it so deals stop falling through cracks.",
    href: "/services/crm-setup-management",
  },
  {
    number: "02",
    title: "HubSpot RevOps",
    description: "Connect your CRM, outbound, and marketing into one system that drives predictable revenue instead of pulling in different directions.",
    href: "/services/hubspot-revops",
  },
  {
    number: "03",
    title: "Outbound Systems",
    description: "Signal-based outbound with personalisation your competitors are not doing. No more spray and pray campaigns that go nowhere.",
    href: "/services/outbound-lead-generation",
  },
  {
    number: "04",
    title: "Email Marketing",
    description: "Rebuild flows, segment properly, and make email your most consistent revenue channel. For ecommerce and B2B brands.",
    href: "/services/email-marketing",
  },
]

const caseStudies = [
  {
    industry: "SaaS Company",
    location: "USA",
    result: "More qualified meetings in Q1 than the previous six months combined",
    metric: "3x",
    metricLabel: "Pipeline Growth",
    href: "/services/crm-setup-management"
  },
  {
    industry: "Recruitment Agency",
    location: "UK",
    result: "Reply rates went from under 1% to 12%",
    metric: "15-20",
    metricLabel: "Monthly Meetings",
    href: "/services/outbound-lead-generation"
  },
  {
    industry: "DTC Ecommerce",
    location: "USA",
    result: "Email now generates 31% of total revenue",
    metric: "$47K",
    metricLabel: "Monthly Revenue Recovered",
    href: "/services/email-marketing"
  },
]

const faqs = [
  {
    question: "What does a HubSpot agency actually do?",
    answer: "A HubSpot agency helps you get real value from your HubSpot investment. That means building your CRM architecture properly, setting up automations that save your team hours, creating reports that actually tell you what is working, and connecting your sales and marketing into one system."
  },
  {
    question: "What is RevOps and do I need it?",
    answer: "RevOps connects your CRM, your outbound, and your email marketing into one system where nothing falls through the cracks. If your sales team does not trust the CRM, your marketing cannot prove what is driving revenue, or your outbound produces nothing, you probably need RevOps."
  },
  {
    question: "How is AeroRev different from other agencies?",
    answer: "Most agencies do one thing and leave. We build the systems, run them, optimise them, and stay accountable to results. We also tell you what is wrong before we start fixing it, even if that means pointing out problems you did not hire us for."
  },
  {
    question: "How long before outbound starts producing results?",
    answer: "Infrastructure setup takes two to three weeks. You should expect qualified replies starting in week four to six. Consistent pipeline takes eight to twelve weeks to build. Anyone promising instant results is either lying or doing it in a way that will burn your domain."
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full viewport, minimal, impactful */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="section-label">Revenue Operations Agency</p>
              <h1 className="display-heading text-foreground">
                Revenue systems
                <br />
                <span className="text-muted-foreground">that actually work</span>
              </h1>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
                AeroRev is a HubSpot Partner agency that fixes broken CRMs, builds outbound pipeline, and scales email revenue for B2B and ecommerce brands in the USA and UK.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary">
                  Book a Free Audit
                  <ArrowRight className="ml-3 h-4 w-4" />
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  Our Approach
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src="/images/hero-team.jpg"
                alt="AeroRev team collaboration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-4xl lg:text-5xl font-semibold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted-foreground tracking-wide uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Clean accordion-style */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="section-label">Our Services</p>
            <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
              Four services.<br />One goal: predictable revenue.
            </h2>
          </div>
          
          <div className="mt-16 border-t border-border">
            {services.map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 py-8 lg:py-10 border-b border-border hover:bg-muted/50 transition-colors px-4 -mx-4"
              >
                <span className="text-sm text-muted-foreground font-medium w-12">
                  {service.number}
                </span>
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground group-hover:text-muted-foreground transition-colors flex-1">
                  {service.title}
                </h3>
                <p className="text-muted-foreground max-w-md leading-relaxed hidden lg:block">
                  {service.description}
                </p>
                <Plus className="h-5 w-5 text-muted-foreground group-hover:rotate-45 transition-transform duration-300" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-[60vh] lg:h-[70vh]">
        <Image
          src="/images/strategy-session.jpg"
          alt="Strategy session"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl px-6">
            <h2 className="font-heading text-3xl lg:text-5xl font-semibold tracking-tight">
              We do not just manage your CRM.
              <br />
              We own the outcome.
            </h2>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 lg:py-32 bg-card">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="section-label">Results</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
                What happens when<br />revenue systems work
              </h2>
            </div>
            <Link href="/contact" className="btn-ghost">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border">
            {caseStudies.map((study, index) => (
              <Link
                key={index}
                href={study.href}
                className="group bg-card p-8 lg:p-10 hover:bg-background transition-colors"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-8">
                  <span>{study.industry}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                  <span>{study.location}</span>
                </div>
                <div className="font-heading text-5xl lg:text-6xl font-semibold text-foreground mb-2">
                  {study.metric}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide mb-6">
                  {study.metricLabel}
                </div>
                <p className="text-foreground leading-relaxed">
                  {study.result}
                </p>
                <div className="mt-8 flex items-center text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-wide">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Two Column - Who We Work With */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border">
            {/* B2B */}
            <div className="bg-background p-10 lg:p-16">
              <p className="section-label">For B2B Companies</p>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mt-4">
                SaaS, Recruitment, Professional Services, and Agencies
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Companies in the USA and UK using or considering a CRM who need it to actually work, outbound that produces pipeline, and revenue systems that scale.
              </p>
              <Link href="/solutions" className="btn-primary mt-10">
                See Our Solutions
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
            
            {/* Ecommerce */}
            <div className="bg-background p-10 lg:p-16">
              <p className="section-label">For Ecommerce Brands</p>
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mt-4">
                DTC, Subscription, and Retail Brands
              </h3>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Brands in the USA and UK who need their email list to become their most consistent revenue channel. Klaviyo, Mailchimp, and HubSpot expertise.
              </p>
              <Link href="/services/email-marketing" className="btn-primary mt-10">
                Unlock Email Revenue
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 lg:py-32 bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <p className="section-label">FAQ</p>
              <h2 className="font-heading text-3xl lg:text-4xl font-semibold text-foreground">
                Questions we get asked
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                If your question is not here, book a call. We will answer it directly.
              </p>
              <Link href="/contact" className="btn-primary mt-10">
                Book a Call
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
            </div>
            
            <div className="flex flex-col">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border-b border-border py-6 first:border-t"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="font-heading text-lg font-medium text-foreground pr-8">
                      {faq.question}
                    </h3>
                    <Plus className="h-5 w-5 text-muted-foreground shrink-0 group-open:rotate-45 transition-transform duration-300" />
                  </summary>
                  <p className="mt-4 text-muted-foreground leading-relaxed pr-8">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-5xl font-semibold text-foreground">
              Ready to fix your revenue systems?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Book a free audit call. We will tell you what is broken, what to fix first, and whether we are the right fit to help.
            </p>
            <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary">
                Book a Free Audit
                <ArrowRight className="ml-3 h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
