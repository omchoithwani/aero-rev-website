import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Legal Services CRM Case Study | AeroRev",
  description: "How we integrated HubSpot, MyCase, and Portant for a multi-practice law firm, automating the entire client journey from lead capture through case creation and document generation.",
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
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Zapier</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">MyCase</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Portant</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Legal Services: End-to-End HubSpot + MyCase Integration
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Multi-practice law firm with three separate practice areas using disconnected systems. We unified everything into HubSpot, built a bidirectional sync with MyCase, and automated legal document generation.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">0</div>
              <div className="text-sm text-muted-foreground">Manual Data Entry</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">3</div>
              <div className="text-sm text-muted-foreground">Systems Integrated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Document Automation</div>
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
              This law firm specialized in criminal defense, estate planning, elder law, and personal injury. Three practice areas. Over 1,000 cases handled. But their internal systems were a mess.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              They used MyCase for case management (because that's what law firms use), but all their marketing, lead capture, and client communication happened in HubSpot. The two systems didn't talk to each other. Staff manually copied data between them. Legal documents were generated manually and sent via email.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The managing partner knew this was eating time and creating errors, but nobody had the bandwidth to fix it. They needed someone to build the integration, automate the workflows, and make the whole thing actually work.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Technical Challenge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>No native integration exists between HubSpot and MyCase.</strong> You can't just connect them with a button click. The integration had to be built from scratch using Zapier as the middleware.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The data flow had to be bidirectional. New leads in HubSpot needed to create cases in MyCase. Updates in MyCase (notes, activities, case status) needed to sync back to HubSpot. And legal documents needed to generate automatically based on deal stage triggers.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What We Built</h2>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">HubSpot CRM Setup</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Configured Sales Hub Professional and Marketing Hub Professional with custom pipelines for each practice area:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Criminal Defense:</strong> Consultation → Retained → Case Open → Case Closed</li>
              <li className="text-muted-foreground"><strong>Estate Planning:</strong> Initial Meeting → Planning Phase → Documentation → Execution</li>
              <li className="text-muted-foreground"><strong>Personal Injury:</strong> Inquiry → Conflict Check → Engagement → Active Matter → Closed</li>
            </ul>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">HubSpot ↔ MyCase Integration (Zapier)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Direction 1: HubSpot → MyCase</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Trigger: Deal stage moves to "Retained" or "Engagement" in HubSpot</li>
              <li className="text-muted-foreground">Action: Zapier creates a new case in MyCase with all contact details, case type, and retainer information</li>
              <li className="text-muted-foreground">Result: Staff don't manually re-enter client data into MyCase</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Direction 2: MyCase → HubSpot</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Trigger: New note or activity logged in MyCase</li>
              <li className="text-muted-foreground">Action: Zapier creates a corresponding note or task in HubSpot attached to the contact record</li>
              <li className="text-muted-foreground">Result: Marketing and sales teams see what's happening in active cases without logging into MyCase</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Document Automation (Portant + HubSpot)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Integrated Portant (document automation tool) with HubSpot to auto-generate legal documents:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Trigger: Deal reaches specific stages (e.g., "Retained" or "Documentation")</li>
              <li className="text-muted-foreground">Action: Portant pulls contact/deal data from HubSpot and generates pre-filled legal agreements, retainer forms, or estate planning documents</li>
              <li className="text-muted-foreground">Delivery: Documents automatically sent to client via email with e-signature request</li>
              <li className="text-muted-foreground">Result: No manual document creation. No copying data into templates. 100% automated.</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Zero manual data entry:</strong> Staff no longer copy client information between HubSpot and MyCase. The integration handles it automatically.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Full visibility across teams:</strong> Marketing and sales teams see case updates in HubSpot without needing MyCase access. Legal staff see lead source and communication history without leaving MyCase.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Document automation eliminates manual work:</strong> Legal agreements, retainers, and estate planning documents generate automatically and go out for e-signature the moment a deal hits the right stage.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Technical Stack</h2>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>HubSpot Sales Hub Professional</strong> - CRM, deal tracking, contact management</li>
              <li className="text-muted-foreground"><strong>HubSpot Marketing Hub Professional</strong> - Lead capture, email automation, client communication</li>
              <li className="text-muted-foreground"><strong>MyCase</strong> - Case management software (industry-standard for law firms)</li>
              <li className="text-muted-foreground"><strong>Zapier</strong> - Middleware connecting HubSpot ↔ MyCase (bidirectional sync)</li>
              <li className="text-muted-foreground"><strong>Portant</strong> - Document generation and automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need to integrate systems that don't talk to each other?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We build integrations between HubSpot and industry-specific tools like MyCase, and automate the workflows that waste your team's time.
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
