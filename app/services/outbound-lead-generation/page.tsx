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
  title: "Cold Email and LinkedIn Outbound Agency for B2B | USA and UK",
  description: "AeroRev builds and manages signal-based hyper-personalised cold email and LinkedIn outbound systems for B2B companies in the USA and UK. No spray and pray.",
}

const painPoints = [
  "You pull lists from Apollo and hit send with generic copy.",
  "Reply rates are near zero and getting worse.",
  "Your sending domain ended up on a blacklist.",
  "Prospects feel like they are getting the same email as everyone else. Because they are.",
  "You have tried outbound twice before with different agencies and got nothing.",
  "Your team writes sequences but they sound like bulk mail.",
  "Domain health is suffering and deliverability is dropping.",
  "You have given up on outbound because you are convinced it does not work.",
]

const services = [
  {
    title: "Domain and Inbox Infrastructure",
    description: "Built for deliverability, not just volume. Multiple sending domains, proper DNS setup, inbox warmup protocols that protect your reputation from day one.",
  },
  {
    title: "Signal-Based Targeting",
    description: "Hiring signals, funding rounds, tech stack changes, role changes, behavioural intent. Triggers that indicate a company is in a buying moment right now.",
  },
  {
    title: "Hyper-Personalised Sequences",
    description: "Written at an individual level, not a template with a first name token. We find the signal that tells us why this person needs what you offer right now.",
  },
  {
    title: "LinkedIn Profile Optimisation",
    description: "When prospects check you out after reading your email, what they see backs up what you said. Profile positioning that converts visitors into conversations.",
  },
  {
    title: "Outreach Execution",
    description: "We do not set it up and hand it back. We run the campaigns, manage replies, and optimise every single week.",
  },
  {
    title: "Ongoing Optimisation",
    description: "A/B testing, sequence refinement, signal adjustment. Continuous improvement based on what the data tells us.",
  },
]

const caseStudies = [
  {
    industry: "SaaS Company",
    location: "USA",
    situation: "A SaaS company had tried outbound twice before with two different agencies and got nothing. Generic sequences, no personalisation, domain ended up on a blacklist. They were convinced outbound did not work for their market.",
    solution: "We rebuilt from the ground up with fresh infrastructure, signal-based targeting using hiring signals and tech stack triggers, and sequences written at an individual level. Every email referenced something specific about the prospect's situation.",
    result: "Reply rates went from under 1% to 14%. Domain health fully recovered within six weeks. They now book 25+ qualified meetings per month from cold outbound alone and have hired two SDRs to handle the volume.",
  },
  {
    industry: "Recruitment Agency",
    location: "UK",
    situation: "Needed to reach HR directors at mid-market companies. The challenge was that everyone in their space was doing the same generic outreach. Their emails looked exactly like every other recruiter in the inbox.",
    solution: "We built a LinkedIn and cold email system that used role change signals and company growth indicators to reach the right people at exactly the right moment. Messaging was specific enough to stop the scroll — referencing recent hires, open roles, and team growth.",
    result: "Response rate went from 2% to 18%. Placement pipeline tripled within four months. They now have more candidate briefs than they can handle.",
  },
]

const faqs = [
  {
    question: "What is signal-based outbound?",
    answer: "Signal-based outbound means targeting prospects based on specific triggers that indicate they might be in a buying moment. Instead of blasting a list of job titles, we look for signals like recent funding rounds, hiring activity in relevant functions, tech stack changes, role changes, and company news. These signals tell us who to reach out to and why right now is the right time.",
  },
  {
    question: "How long before outbound starts producing results?",
    answer: "Infrastructure setup takes two to three weeks. Domain warmup runs alongside that. You should expect to see qualified replies starting in week four to six. Consistent, predictable pipeline takes eight to twelve weeks to build. Anyone promising instant results from cold outbound is either lying or doing it in a way that will burn your domain.",
  },
  {
    question: "Do you manage outbound ongoing or just build the system?",
    answer: "We manage it ongoing. We do not build a system and hand you a login. We run the campaigns, manage reply handling, optimise sequences weekly, and stay accountable to results. Outbound is not a set-and-forget channel. It requires constant refinement.",
  },
  {
    question: "What makes AeroRev different from every other outbound agency?",
    answer: "Most outbound agencies personalise to the company level. We personalise to the individual moment. We find the signal that tells us why this specific person, at this specific company, needs what you offer right now. Then we write to that exact situation. Not to their industry. Not to their job title. To their actual moment.",
  },
  {
    question: "What happens if reply rates drop?",
    answer: "Reply rates fluctuate. That is normal. When they drop, we diagnose why. Is it the messaging? The targeting? Deliverability issues? Seasonal factors? We have processes for each scenario. The key is catching drops early and responding quickly. That is part of ongoing management.",
  },
]

export default function OutboundPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide">
              Outbound Systems
            </span>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Outbound that your prospects actually want to read
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              AeroRev builds and manages signal-based cold email and LinkedIn outbound systems for B2B companies. No spray and pray. No generic templates. Personalisation your competitors are not doing.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              See How We Build Outbound
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
              Spray and pray is dead
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Pulling a list from Apollo and hitting send is not a strategy. It burns your domain, ruins your sender reputation with your ICP, and produces nothing except a growing feeling that outbound does not work. It does work. The way most companies do it does not.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, index) => (
              <div key={index} className="flex gap-3 p-4 rounded-lg bg-background border border-border">
                <span className="text-primary font-bold shrink-0">—</span>
                <p className="text-foreground text-sm">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground text-center">
            How we build outbound that works
          </h2>
          <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
            Outbound is a system, not a task. Every piece has to work together or the whole thing fails.
          </p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="p-6 rounded-xl border border-border bg-card"
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

      {/* The AeroRev Difference */}
      <section className="py-20 lg:py-28 bg-card">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-foreground">
                The AeroRev difference
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Most outbound agencies personalise to the company level. We personalise to the individual moment.
              </p>
              <p className="mt-4 text-foreground leading-relaxed">
                We find the signal that tells us why this person, at this company, needs what you offer right now. Then we write to that. Not to their industry. Not to their job title. To their actual situation.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                That is why our reply rates are 5-10x higher than industry average. That is why prospects reply saying the email felt like someone actually did their homework. Because we did.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5">
              <div className="flex flex-col gap-6">
                <div>
                  <div className="font-heading text-4xl font-bold text-primary">5-10x</div>
                  <p className="mt-1 text-foreground">Higher reply rates than industry average</p>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-primary">14%</div>
                  <p className="mt-1 text-foreground">Average reply rate on signal-based campaigns</p>
                </div>
                <div>
                  <div className="font-heading text-4xl font-bold text-primary">25+</div>
                  <p className="mt-1 text-foreground">Qualified meetings per month for typical clients</p>
                </div>
              </div>
            </div>
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
                "B2B companies in SaaS, Recruitment, Professional Services, and Agencies that need consistent qualified pipeline.",
                "Companies that have tried outbound before and got nothing, or got results that did not stick.",
                "Companies that are done with spray and pray and want outbound that actually reflects their brand.",
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
            Outbound transformations that worked
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
              Ready to build outbound that actually works?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Book a call. We will show you exactly how signal-based outbound works and what kind of results you can expect.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                See How We Build Outbound
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/services/hubspot-revops" className="text-muted-foreground hover:text-primary transition-colors">
                HubSpot RevOps
              </Link>
              <span className="text-border">|</span>
              <Link href="/solutions" className="text-muted-foreground hover:text-primary transition-colors">
                All Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
