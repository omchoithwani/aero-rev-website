import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Email Marketing Agency — Klaviyo Mailchimp and HubSpot",
  description: "AeroRev manages email marketing on Klaviyo, Mailchimp and HubSpot. Flows, segmentation, copy, design and revenue attribution for ecommerce and B2B brands in the USA and UK.",
}

const platforms = [
  {
    name: "Klaviyo",
    description: "The gold standard for ecommerce email. Deep integration with Shopify and other platforms. Built for DTC brands that want email to be a real revenue channel.",
  },
  {
    name: "Mailchimp",
    description: "Right for smaller brands or those with simpler needs. We configure it to punch above its weight with proper segmentation and automation.",
  },
  {
    name: "HubSpot",
    description: "Ideal for B2B companies that want email marketing connected to their CRM and sales process. Full funnel visibility from first touch to close.",
  },
]

const painPoints = [
  "Flows were set up once and never touched again.",
  "Your entire list gets the same campaign regardless of purchase behaviour.",
  "Copy sounds like it came from a template. Design looks like every other brand.",
  "Open rates are okay but click rates are embarrassing.",
  "Revenue from email does not reflect the size and quality of your list.",
  "You have no idea what percentage of revenue email is actually driving.",
  "Campaigns go out on a calendar, not based on customer behaviour.",
  "You have tried agencies before and they just sent more volume, not better emails.",
]

const services = [
  {
    title: "Flow Build and Optimisation",
    description: "All core and advanced automations built from scratch or rebuilt. Welcome, abandoned cart, post-purchase, winback, browse abandonment, and more.",
  },
  {
    title: "Campaign Management",
    description: "Campaign calendar built around the customer journey, not just promotional dates. Strategic planning, copywriting, design, and send management.",
  },
  {
    title: "List Segmentation",
    description: "Segmented by purchase behaviour, engagement level, product affinity, and lifecycle stage. The right message to the right person at the right time.",
  },
  {
    title: "Copy and Design",
    description: "Copy written to where each customer actually is. Design that stands out in a crowded inbox and drives clicks, not just looks nice.",
  },
  {
    title: "Deliverability Management",
    description: "Emails that actually land. List hygiene, domain reputation monitoring, and inbox placement optimisation.",
  },
  {
    title: "Revenue Attribution",
    description: "Know exactly what email is generating every single month. Revenue dashboards, flow performance, campaign ROI — all tracked and reported.",
  },
]

const caseStudies = [
  {
    industry: "DTC Ecommerce Brand",
    location: "USA",
    platform: "Klaviyo",
    situation: "A DTC brand had been on Klaviyo for eighteen months but had only the default welcome flow set up. Everything else was manual campaigns sent to the full list. Email was contributing 9% of total revenue.",
    solution: "We built out all core flows — welcome, abandoned cart, post-purchase, winback, browse abandonment. Segmented the list by purchase frequency and category affinity. Rewrote campaigns to speak to where each customer actually was in their journey.",
    result: "Within ninety days, email was 28% of total revenue. Revenue per email sent increased by 340%. The brand now treats email as their most predictable revenue channel.",
  },
  {
    industry: "UK Ecommerce Brand",
    location: "UK",
    platform: "Klaviyo",
    situation: "A UK ecommerce brand had switched email providers three times in two years looking for a tool to solve a strategy problem. The emails were going out but not converting. Open rates were decent, click rates were terrible.",
    solution: "We kept them on Klaviyo and fixed the actual problem. Rewrote the copy and design approach completely. Restructured the campaign calendar around customer behaviour instead of promotional dates. Fixed segmentation so repeat buyers were not getting the same emails as first-time visitors.",
    result: "Click rate improved from 1.2% to 4.8%. Conversion rate from email doubled. Revenue per email sent tripled. They stopped looking for a new tool because the current one finally worked.",
  },
]

const faqs = [
  {
    question: "Klaviyo or Mailchimp — which is right for my business?",
    answer: "Klaviyo is built for ecommerce and integrates deeply with Shopify, WooCommerce, and other platforms. It is more powerful for segmentation and automation but costs more. Mailchimp is simpler and cheaper, good for smaller brands or those with basic needs. For serious ecommerce revenue, Klaviyo is usually the right choice. We will tell you honestly which makes sense for your situation.",
  },
  {
    question: "What email flows should every ecommerce brand have running?",
    answer: "At minimum: welcome series, abandoned cart, browse abandonment, post-purchase, and winback. Beyond that, it depends on your business — VIP flows, replenishment reminders, cross-sell sequences, sunset flows for inactive subscribers. Most brands we work with are running less than half of what they should be.",
  },
  {
    question: "How do you measure and report on email revenue?",
    answer: "We track revenue attribution directly in Klaviyo or your ESP. Monthly reports show total email revenue, revenue by flow, revenue by campaign, revenue per email sent, and trends over time. You will know exactly what email is contributing and which specific emails are driving the most.",
  },
  {
    question: "Can you migrate us from Mailchimp to Klaviyo?",
    answer: "Yes. We handle the full migration — list export and import, flow rebuild, template recreation, integration setup. We do it carefully to avoid deliverability issues and make sure nothing breaks during the transition.",
  },
  {
    question: "Do you handle copy and design or just strategy?",
    answer: "Both. Strategy without execution is just a document that sits in a folder. We handle the full picture — strategy, copywriting, design, technical setup, send management, and ongoing optimisation. You should not have to coordinate between multiple vendors to get email working.",
  },
]

export default function EmailMarketingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              Email Marketing
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Make email your most predictable revenue channel
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              AeroRev manages email marketing on Klaviyo, Mailchimp, and HubSpot for ecommerce and B2B brands. Flows that convert. Campaigns that sell. Revenue you can count on.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Unlock Your Email Revenue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            Platforms we work with
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {platform.name}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                Your email list is leaving money on the table
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Most brands have a list of thousands and email contributing 10-15% of revenue. It should be 25-35%. The difference is not volume — it is strategy, segmentation, and execution.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {painPoints.map((point, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-lg bg-card border border-border">
                  <span className="text-primary font-bold shrink-0">—</span>
                  <p className="text-foreground text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            What we build and manage
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Email marketing is not one thing. It is flows, campaigns, segmentation, copy, design, deliverability, and reporting — all working together.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Who this is for
            </h2>
            <div className="mt-12 flex flex-col gap-6 text-left">
              {[
                "Ecommerce and DTC brands in the USA and UK who know their email should be doing more than it is.",
                "B2B companies on HubSpot who want their email marketing to be a real revenue channel, not an afterthought.",
                "Brands that have tried agencies before and just got more volume, not better results.",
              ].map((item, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            Email transformations that worked
          </h2>
          <div className="mt-16 flex flex-col gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-8 lg:p-10 rounded-2xl border border-border bg-background">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {study.industry}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    {study.location}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium">
                    {study.platform}
                  </span>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div>
                    <h4 className="font-heading font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                      The Situation
                    </h4>
                    <p className="mt-2 text-foreground leading-relaxed">{study.situation}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-muted-foreground text-sm uppercase tracking-wide">
                      What We Did
                    </h4>
                    <p className="mt-2 text-foreground leading-relaxed">{study.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-primary text-sm uppercase tracking-wide">
                      The Result
                    </h4>
                    <p className="mt-2 text-foreground leading-relaxed">{study.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
              Frequently asked questions
            </h2>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                  <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-card border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-balance">
              Ready to make email your best revenue channel?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a call. We will audit your current email programme and show you exactly where the revenue opportunities are.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Unlock Your Email Revenue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                All Solutions
              </Link>
              <span className="text-border">|</span>
              <Link href="/services/crm-setup-management" className="text-muted-foreground hover:text-primary transition-colors">
                CRM Setup
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
