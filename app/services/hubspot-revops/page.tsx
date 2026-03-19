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
  title: "HubSpot RevOps Agency for B2B Companies | USA and UK",
  description: "AeroRev builds Revenue Operations systems on HubSpot. Automation, lifecycle management, reporting and sales-marketing alignment for B2B businesses in the USA and UK.",
}

const painPoints = [
  "Sales and marketing are pulling in different directions.",
  "No reliable reporting on what is actually driving revenue.",
  "Manual processes everywhere that should be automated.",
  "No visibility into which leads are worth pursuing.",
  "Leadership makes decisions based on gut feel because the data cannot be trusted.",
  "Nobody agrees on what a qualified lead actually means.",
  "Deals stall and nobody knows why until it is too late.",
  "Your HubSpot portal is using maybe 20% of what it can do.",
]

const services = [
  {
    title: "Workflow Automation",
    description: "We remove manual work from every part of your revenue process. Lead routing, deal updates, task creation, notifications — all automated so your team can focus on selling.",
  },
  {
    title: "Lifecycle Stage Management",
    description: "Every contact and deal is tracked from first touch to closed revenue. No more guessing where a lead came from or how long deals take to close.",
  },
  {
    title: "Reporting Dashboards",
    description: "Leadership dashboards that tell you exactly what is working and what is not. Attribution models that show which activities drive revenue.",
  },
  {
    title: "Sales and Marketing Alignment",
    description: "Agreed definitions of what makes a lead qualified. Shared visibility into the full funnel. Accountability on both sides.",
  },
  {
    title: "Process Documentation",
    description: "The system runs regardless of who is in the seat. New hires get up to speed fast. Nothing lives only in someone's head.",
  },
  {
    title: "Ongoing Optimisation",
    description: "As your business changes, we evolve the systems. Monthly reviews. Continuous improvement. No set-and-forget.",
  },
]

const caseStudies = [
  {
    industry: "B2B Tech Company",
    situation: "Sales and marketing had not been aligned in two years. Marketing was generating leads, sales was ignoring most of them, and nobody agreed on what a qualified lead actually was. Conversion rates were terrible and finger-pointing was constant.",
    solution: "We built a shared lead scoring model both teams agreed on. Created automated handoff processes with clear SLAs. Built dashboards both teams could see showing the full funnel from first touch to close.",
    result: "Lead-to-close rate improved by 47%. Sales stopped complaining about lead quality. Marketing could finally prove which campaigns were driving revenue. The blame game ended.",
  },
  {
    industry: "Consulting Firm",
    situation: "No visibility into which marketing activities were generating revenue. They were spending on campaigns with no attribution model and had no idea what was working. Budget decisions were based on gut feel.",
    solution: "We built a full attribution model in HubSpot connecting marketing touchpoints to closed revenue. Created campaign performance dashboards. Set up proper UTM tracking and source attribution.",
    result: "For the first time, leadership could see exactly which channels were driving pipeline. They cut spend on underperforming campaigns and doubled down on what worked. ROI on marketing spend improved by 3x.",
  },
]

const faqs = [
  {
    question: "What is RevOps in plain English?",
    answer: "RevOps, or Revenue Operations, is the discipline of connecting your CRM, your sales process, and your marketing into one system where nothing falls through the cracks and every decision is backed by real data. It is about making sure your entire revenue engine works together instead of operating in silos.",
  },
  {
    question: "Do I need RevOps if I am already using HubSpot?",
    answer: "Using HubSpot and using it well are two very different things. Most companies we work with are using maybe 20% of what HubSpot can do. RevOps is about unlocking the rest — connecting all the pieces into a system that drives predictable revenue, not just storing contacts.",
  },
  {
    question: "How is RevOps different from CRM management?",
    answer: "CRM management is about keeping your database clean and your system running. RevOps is bigger — it is about designing the entire revenue process, aligning teams, building automation, and creating the reporting infrastructure that lets you make decisions based on data instead of gut feel.",
  },
  {
    question: "What does a RevOps engagement with AeroRev actually look like from week one?",
    answer: "Week one is all about understanding your current state. We audit your HubSpot portal, interview key stakeholders, and document every pain point. Then we present a prioritised roadmap of what to fix first. Implementation typically starts in week two or three, with regular check-ins as we build.",
  },
  {
    question: "How long before we see results?",
    answer: "You will see quick wins in the first month — usually around data quality and basic automation. More significant results like improved conversion rates and better reporting typically show up in months two and three. Full RevOps transformation takes six to twelve months, but the impact compounds over time.",
  },
]

export default function HubSpotRevOpsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              HubSpot RevOps
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Revenue Operations that connects every part of your business
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              AeroRev builds HubSpot RevOps systems that align sales and marketing, automate the manual work, and give leadership the reporting they actually need. For B2B companies in the USA and UK.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Free RevOps Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Plain English Explanation */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              RevOps in three sentences
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              RevOps is the discipline of connecting your CRM, your outbound, and your marketing into one system where nothing falls through the cracks and every decision is backed by real data. That is it. No MBA required.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                What broken RevOps looks like
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                If any of these sound familiar, your revenue operation is leaving money on the table. The good news is these are all fixable.
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
            What we build in HubSpot
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            RevOps is not one thing. It is a system of connected capabilities that make your entire revenue operation work better.
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
                "B2B companies that have outgrown spreadsheets and need a proper revenue infrastructure.",
                "Companies where sales and marketing are not talking to each other and revenue is suffering.",
                "Companies that have HubSpot but are using 20% of what it can do and know they are leaving value on the table.",
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
            RevOps transformations that worked
          </h2>
          <div className="mt-16 flex flex-col gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-8 lg:p-10 rounded-2xl border border-border bg-background">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {study.industry}
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
              Ready to connect your revenue operation?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a free RevOps audit. We will show you exactly where your HubSpot is underperforming and what it would take to fix it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Free RevOps Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services/crm-setup-management" className="text-muted-foreground hover:text-primary transition-colors">
                CRM Setup
              </Link>
              <span className="text-border">|</span>
              <Link href="/hubspot-partner-agency" className="text-muted-foreground hover:text-primary transition-colors">
                HubSpot Partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
