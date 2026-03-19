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
  title: "HubSpot Partner Agency USA and UK | CRM RevOps and Automation",
  description: "AeroRev is an official HubSpot Partner agency specialising in CRM setup, RevOps and automation for B2B businesses in the USA and UK. Book a free HubSpot audit today.",
}

const hubs = [
  {
    name: "Sales Hub",
    description: "Pipeline management, deal tracking, sequences, meeting scheduling, and sales automation. Built properly, Sales Hub runs your entire sales operation from one place.",
    features: [
      "Pipeline with stages that match how deals actually move",
      "Sequences that nurture leads without manual follow-up",
      "Meeting links that eliminate scheduling back-and-forth",
      "Reporting dashboards that show what is working",
    ],
  },
  {
    name: "Marketing Hub",
    description: "Email marketing, landing pages, forms, ad management, and campaign attribution. Most companies use 20% of what Marketing Hub can do.",
    features: [
      "Email automation tied to contact behaviour",
      "Landing pages that convert visitors to leads",
      "Attribution models that show what drives revenue",
      "Campaign performance tracking end to end",
    ],
  },
  {
    name: "Operations Hub",
    description: "Data sync, automation, data quality tools, and programmable automation. This is the engine room most HubSpot users never touch.",
    features: [
      "Custom coded workflows for complex logic",
      "Data sync between HubSpot and other tools",
      "Data quality automation to keep your database clean",
      "Calculated properties for advanced reporting",
    ],
  },
  {
    name: "Service Hub",
    description: "Ticketing, knowledge base, customer feedback, and SLA management. For companies using HubSpot as their full revenue platform.",
    features: [
      "Ticketing system connected to your CRM",
      "Knowledge base customers can actually find",
      "Customer feedback loops built into the process",
      "SLA tracking and escalation automation",
    ],
  },
]

const badHubSpot = [
  "Duplicate contacts in the thousands — same person appearing five, ten, twenty times.",
  "Broken automations that have been broken for months and nobody noticed.",
  "A pipeline with stages nobody understands or uses correctly.",
  "Reports that contradict each other depending on who built them.",
  "A sales team that stopped logging activity because it feels pointless.",
  "Integrations that were set up once and have been breaking data ever since.",
  "Properties that were created for one campaign and never cleaned up.",
  "Workflows that fire on the wrong triggers and create chaos.",
]

const caseStudies = [
  {
    industry: "SaaS Company",
    situation: "HubSpot portal set up by a junior team member two years ago. Duplicate contacts everywhere, broken automations, sales team using spreadsheets instead of the CRM.",
    result: "Full portal rebuild. CRM adoption went from 30% to 95%. Sales now runs their entire week from HubSpot dashboards.",
  },
  {
    industry: "Professional Services",
    situation: "Marketing and sales in different Hubs with no connection. Marketing generated leads that sales never saw. No attribution model.",
    result: "Connected the full funnel with proper handoffs. Built attribution showing which campaigns drive revenue. Marketing ROI improved 3x.",
  },
  {
    industry: "Recruitment Agency",
    situation: "Using HubSpot like an expensive spreadsheet. No automation, no sequences, manual data entry everywhere.",
    result: "Built full automation suite. Team saves 15+ hours per week. Placement volume increased 40% without adding headcount.",
  },
]

const faqs = [
  {
    question: "What is a HubSpot Partner agency and why does it matter?",
    answer: "A HubSpot Partner agency is certified by HubSpot to implement and manage their platform. It matters because it means we have demonstrated expertise across all Hubs, we have direct access to HubSpot support for complex issues, and we are accountable to a standard HubSpot holds us to. You get a higher quality implementation than you would from a generalist agency.",
  },
  {
    question: "How do I choose the right HubSpot implementation partner?",
    answer: "Look for a partner with demonstrated experience in your industry or business model. Ask for case studies and references. Make sure they understand the full platform, not just one Hub. Most importantly, find a partner who will stay engaged after implementation — HubSpot is not a set-and-forget tool.",
  },
  {
    question: "Which HubSpot Hubs does AeroRev work with?",
    answer: "All of them. Sales Hub, Marketing Hub, Operations Hub, Service Hub, and CMS Hub. Most of our clients use Sales and Marketing Hub together, with Operations Hub for advanced automation. We recommend what you actually need, not the most expensive package.",
  },
  {
    question: "Can you audit our existing HubSpot portal before we commit to anything?",
    answer: "Yes. We offer a free HubSpot audit that examines your current setup and identifies what is broken, what is missing, and what opportunities you are leaving on the table. You will get a clear picture of your portal's health and a prioritised list of what to fix first. No obligation.",
  },
  {
    question: "How long does a HubSpot implementation take?",
    answer: "Depends on complexity. A straightforward Sales Hub implementation for a small team takes three to four weeks. Full platform implementations across multiple Hubs with migrations and integrations can take eight to twelve weeks. We will give you a realistic timeline after understanding your specific needs.",
  },
]

export default function HubSpotPartnerPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
                Official HubSpot Partner
              </span>
              <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                HubSpot implementation that actually works
              </h1>
              <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
                AeroRev is an official HubSpot Partner agency. We build HubSpot portals that your team will actually use, with automation that actually runs, and reporting that actually tells you something useful.
              </p>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Free HubSpot Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-64 h-64 rounded-2xl bg-card border border-primary/20 flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="font-heading text-3xl font-bold text-foreground">HubSpot</div>
                  <div className="font-heading text-xl font-bold text-primary">Partner</div>
                  <p className="mt-4 text-sm text-muted-foreground">Certified expertise across all Hubs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Partnership Means */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              What being a HubSpot Partner means for you
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              This is not just a badge. Being a HubSpot Partner means certified expertise across all Hubs, direct access to HubSpot support for complex issues, and a standard of implementation that HubSpot holds us accountable to.
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Certified expertise across Sales, Marketing, Operations, and Service Hub",
                "Direct access to HubSpot support for complex technical issues",
                "Early access to new features and beta programs",
                "Accountability to HubSpot's partner standards",
              ].map((item, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hub Breakdown */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            What we build in each Hub
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Most companies use 20% of what HubSpot can do. We unlock the rest.
          </p>
          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hubs.map((hub) => (
              <div
                key={hub.name}
                className="p-8 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {hub.name}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {hub.description}
                </p>
                <ul className="mt-6 flex flex-col gap-3">
                  {hub.features.map((feature, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Bad HubSpot Looks Like */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                What bad HubSpot looks like
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                If any of these sound familiar, your HubSpot portal is costing you more than it is making you. The good news is all of this is fixable.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {badHubSpot.map((point, index) => (
                <div key={index} className="flex gap-3 p-4 rounded-lg bg-background border border-border">
                  <span className="text-destructive font-bold shrink-0">—</span>
                  <p className="text-foreground text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What AeroRev Does Differently */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              What AeroRev does differently
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Most HubSpot implementations fail because the agency sets it up and leaves. We build it, run it, optimise it, and stay accountable to results. HubSpot is not a set-and-forget tool. It needs ongoing attention to deliver value.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { stat: "Operator-level", label: "Depth across all Hubs" },
                { stat: "Ongoing", label: "Management and optimisation" },
                { stat: "Strategic", label: "Direction as you grow" },
              ].map((item) => (
                <div key={item.label} className="p-6 rounded-xl bg-card border border-border">
                  <div className="font-heading text-xl font-bold text-primary">{item.stat}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
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
            HubSpot transformations that worked
          </h2>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-6 rounded-xl border border-border bg-background">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {study.industry}
                </span>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {study.situation}
                </p>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-foreground font-medium leading-relaxed">
                    {study.result}
                  </p>
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
              Ready to make HubSpot actually work?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a free HubSpot audit. We will examine your current setup, show you what is broken, and give you a prioritised list of what to fix first. No obligation.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Book a Free HubSpot Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services/crm-setup-management" className="text-muted-foreground hover:text-primary transition-colors">
                CRM Setup
              </Link>
              <span className="text-border">|</span>
              <Link href="/services/hubspot-revops" className="text-muted-foreground hover:text-primary transition-colors">
                HubSpot RevOps
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
