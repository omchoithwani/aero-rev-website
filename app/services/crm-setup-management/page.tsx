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
  title: "CRM Setup and Management Agency | HubSpot Pipedrive and More",
  description: "AeroRev sets up and manages CRMs that actually work. HubSpot, Pipedrive, Monday.com, Salesforce, Zoho and more. B2B teams in the USA and UK.",
}

const platforms = [
  {
    name: "HubSpot",
    description: "The gold standard for growing B2B companies. We are a certified HubSpot Partner with deep expertise across all Hubs.",
  },
  {
    name: "Pipedrive",
    description: "Built for sales teams that want simplicity without sacrificing power. Great for companies with straightforward pipelines.",
  },
  {
    name: "Monday.com",
    description: "Flexible enough to handle complex workflows. We configure it to run like a proper CRM, not a glorified spreadsheet.",
  },
  {
    name: "Salesforce",
    description: "Enterprise-grade for companies that need it. We build it so your team can actually use it without a manual.",
  },
  {
    name: "Zoho",
    description: "Full suite at a fraction of the cost. Right for companies that need CRM, email, and support in one place.",
  },
  {
    name: "Notion",
    description: "For early-stage companies not ready for a traditional CRM. We build lightweight systems that scale.",
  },
]

const painPoints = [
  "Your team avoids the CRM because the data cannot be trusted.",
  "Deals disappear into the void and nobody knows where they went.",
  "Nobody owns keeping it clean or properly maintained.",
  "Reports tell management almost nothing useful.",
  "The pipeline has stages nobody understands or uses.",
  "Integrations were set up once and have been broken for months.",
  "Your team works around the CRM instead of through it.",
  "You have paid for it for months and it has not changed a single outcome.",
]

const services = [
  "CRM architecture built from scratch around how your team actually works",
  "Pipeline design with stages that reflect how deals really move, not a default template",
  "Property and field configuration that captures what matters",
  "Integration setup with your existing tools",
  "Team training on what the platform is actually capable of",
  "Ongoing management, maintenance, and optimisation",
  "Regular audits to catch problems before they cost you money",
  "Strategic direction on what to build next as your business grows",
]

const caseStudies = [
  {
    industry: "Professional Services Firm",
    platform: "Pipedrive",
    situation: "A professional services firm had been running Pipedrive for three years. The pipeline had seventeen stages nobody used, deals were being manually moved, and the reporting told management almost nothing useful.",
    solution: "We rebuilt the pipeline from scratch with five clear stages that matched how their deals actually progressed. Set up automated deal movement based on activity. Built reporting dashboards that gave leadership real visibility.",
    result: "Deal close rate improved by 34%. The sales team stopped working around the CRM. Management now runs their weekly meetings from the dashboard instead of guessing.",
  },
  {
    industry: "SaaS Startup",
    platform: "HubSpot",
    situation: "A SaaS startup bought HubSpot and had it set up by a junior team member. Six months later they had duplicate contacts everywhere, broken automations, and a sales team that had gone back to using spreadsheets.",
    solution: "We deduplicated and cleaned the entire database. Rebuilt automations that actually worked. Retrained the team on proper CRM usage and built accountability into the process.",
    result: "CRM adoption went from 30% to 95%. Duplicate contacts eliminated. The sales team now logs every activity because they actually see value in doing it.",
  },
  {
    industry: "Staffing Agency",
    platform: "Monday.com to HubSpot",
    situation: "A staffing agency wanted to move from Monday.com to HubSpot without losing historical data or disrupting the placement team mid-quarter.",
    solution: "We migrated the entire operation in phases. Historical data preserved. Team trained on the new system during the transition. Zero disruption to ongoing placements.",
    result: "Clean migration with zero data loss. Team was fully onboarded within two weeks. Placement volume actually increased during the quarter of migration.",
  },
]

const faqs = [
  {
    question: "How long does a CRM setup take?",
    answer: "Depends on the complexity of your business and the platform. A straightforward HubSpot or Pipedrive setup typically takes three to four weeks. Complex migrations or enterprise Salesforce implementations can take eight to twelve weeks. We will give you a clear timeline after we understand your specific situation.",
  },
  {
    question: "What does ongoing CRM management actually include?",
    answer: "Weekly or biweekly health checks on data quality. Automation monitoring and fixes. User support when your team has questions. Monthly reporting on CRM adoption and data trends. Quarterly audits to catch problems early. Strategic recommendations on what to build next. We become your CRM team without you having to hire one.",
  },
  {
    question: "Can you fix a badly set up CRM portal without starting from scratch?",
    answer: "Usually, yes. Most broken CRMs can be cleaned up and restructured without losing your data. We will audit what you have, tell you what is salvageable, and build a plan to fix it. Sometimes starting fresh is faster, but we will be honest about which approach makes sense for your situation.",
  },
  {
    question: "Do you train our team as part of the engagement?",
    answer: "Absolutely. A CRM is only as good as the people using it. We train your team on proper usage, show them what the platform can actually do, and build documentation so new hires can get up to speed. Training is not an add-on. It is core to what we do.",
  },
  {
    question: "Which CRM should we be on?",
    answer: "Depends on your business size, complexity, budget, and what you actually need. HubSpot is usually right for growing B2B companies that want an all-in-one platform. Pipedrive is great for sales-focused teams that want simplicity. Salesforce is for enterprises with complex requirements. We will tell you honestly which platform fits your situation, even if it means less work for us.",
  },
]

export default function CRMSetupPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              CRM Setup and Management
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your CRM should run your revenue operation. Not the other way around.
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              AeroRev sets up and manages CRMs that actually work. HubSpot, Pipedrive, Monday.com, Salesforce, Zoho, and more. For B2B teams in the USA and UK who are done with expensive contact lists.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Get Your CRM Diagnosed
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
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            We are platform agnostic. We will tell you which one is right for your business, then build it properly.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="p-6 rounded-xl border border-border bg-background"
              >
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {platform.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
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
                A broken CRM costs you more than just the subscription
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Every deal that slips through the cracks. Every report that cannot be trusted. Every hour your team spends working around the system instead of through it. That is real money lost every single month.
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
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              What we actually do
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We do not just set up your CRM and hand you a login. We build it around how your business actually works, train your team, and stay to make sure it keeps working.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-background border border-border">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <p className="text-foreground text-sm">{service}</p>
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
                "B2B companies on any CRM platform that is not working the way it should.",
                "Companies moving to a new CRM and needing it built right from day one.",
                "Companies that have had a CRM for years and are embarrassed by how little value they get from it.",
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
            CRM transformations that worked
          </h2>
          <div className="mt-16 flex flex-col gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="p-8 lg:p-10 rounded-2xl border border-border bg-background">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    {study.industry}
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
              Ready to make your CRM actually work?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a free CRM diagnosis. We will tell you exactly what is broken and how we would fix it.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Your CRM Diagnosed
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services/hubspot-revops" className="text-muted-foreground hover:text-primary transition-colors">
                HubSpot RevOps
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
