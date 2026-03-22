import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Legal Services CRM Case Study | AeroRev",
  description: "How we unified three separate practice areas into a single HubSpot CRM, improving client retention by 25% and reducing follow-up time by 40%.",
}

export default function LegalServicesCaseStudy() {
  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="pt-32 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/case-studies" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Case Studies
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">HubSpot CRM</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Legal</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Multi-Pipeline</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Legal Services Firm: HubSpot CRM Implementation
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Multi-practice law firm with three separate practice areas using disconnected systems. We unified everything into HubSpot and stayed on retainer to manage it.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">0% → 100%</div>
              <div className="text-sm text-muted-foreground">Pipeline Visibility</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">-40%</div>
              <div className="text-sm text-muted-foreground">Follow-up Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">+25%</div>
              <div className="text-sm text-muted-foreground">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This law firm had three practice areas: family law, estate planning, and business law. Each practice used different tools. Family law used spreadsheets. Estate planning used an old legal CRM that nobody understood. Business law used email and memory.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Partners had no visibility into what was happening across the firm. Clients would call in and get different answers depending on who picked up. Follow-ups were missed. Opportunities disappeared.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The managing partner knew this was costing them clients and revenue, but nobody had time to fix it. They needed someone to diagnose the mess, build a system that actually worked, and stick around to run it.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What We Built</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Single HubSpot CRM with three custom pipelines:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Family Law: Consultation → Retained → Case Open → Case Closed</li>
              <li className="text-muted-foreground">Estate Planning: Initial Meeting → Planning Phase → Documentation → Execution</li>
              <li className="text-muted-foreground">Business Law: Inquiry → Conflict Check → Engagement → Active Matter → Closed</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Unified client records:</strong> Every interaction across all practices in one place. Partners can see the full relationship history.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Automated workflows:</strong> Follow-up reminders, document requests, billing triggers, case milestone notifications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Custom integrations:</strong> Connected MyCase (case management software) via Zapier and Portant for automated document generation.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>100% pipeline visibility:</strong> Partners can see exactly what's happening in every practice area. Weekly pipeline reviews went from "guessing" to "knowing."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>40% reduction in follow-up time:</strong> Automated reminders and task sequences mean staff spend less time manually tracking what needs to happen next.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>25% increase in client retention:</strong> Nothing falls through the cracks anymore. Clients get consistent communication. Renewals and referrals went up.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why It Worked</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We did not just build it and leave. We stayed on retainer to manage the CRM, train new staff, optimize workflows, and fix issues as they came up.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The managing partner did not want to become a HubSpot admin. They wanted someone to own it so they could focus on practicing law. That's what we did.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help with your CRM?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tell us what's broken. We'll tell you how we'd fix it.
          </p>
          <Link href="/contact" className="btn-primary">
            Book a Call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
