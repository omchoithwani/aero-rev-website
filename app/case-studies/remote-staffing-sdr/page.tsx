import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Remote Staffing SDR Automation Case Study | AeroRev",
  description: "How we built a four-tool sales automation stack for a remote staffing company, routing leads intelligently and auto-enrolling contacts into sequences despite Sales Hub Pro limitations.",
}

export default function RemoteStaffingSDRCaseStudy() {
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
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">HubSpot</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">SalesIntel</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Zapier</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Nooks</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">SDR Automation</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Remote Staffing: SDR Sales Automation Stack
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Construction industry staffing company connecting US companies with remote professionals in India. We built a four-tool sales engine that routes leads intelligently, auto-enrolls sequences, and automates follow-up based on call dispositions.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Automated Lead Routing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">9</div>
              <div className="text-sm text-muted-foreground">Call Dispositions Mapped</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">45d</div>
              <div className="text-sm text-muted-foreground">Auto-Recycle Loop</div>
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
              This remote staffing company connects construction companies across the US with skilled professionals in India (estimators, BIM specialists, project managers, finance controllers). Value prop: 60-70% payroll cost savings, deep talent pool, time zone alignment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              They had product-market fit and a growing pipeline. What they didn't have was a sales operation that could keep up. Here's what was broken:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Manual lead routing:</strong> Lead generators found prospects in SalesIntel, exported them to HubSpot, then manually assigned them to SDRs</li>
              <li className="text-muted-foreground"><strong>No sequence automation:</strong> SDRs manually enrolled every contact into sequences</li>
              <li className="text-muted-foreground"><strong>Disconnected dialer:</strong> Nooks (their VoIP tool) wasn't integrated, so call outcomes didn't trigger next steps in HubSpot</li>
              <li className="text-muted-foreground"><strong>9 different call dispositions with no automation:</strong> Different outcomes (interested, not interested, callback, wrong number, etc.) all required manual follow-up</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The SDR team was spending more time on admin than selling. They needed a system where leads got routed automatically, sequences enrolled automatically, and follow-up happened based on call outcomes without anyone touching it.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Technical Challenges</h2>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">1. Sales Hub Pro Doesn't Support Auto-Enrollment on Contact Creation</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HubSpot's native limitation: you cannot automatically enroll a contact into a sequence the moment they're created. Sequences require manual enrollment or workflow enrollment via Sales Hub Enterprise (which they didn't have).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              We needed to find a workaround that didn't require upgrading to Enterprise.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">2. Intelligent Routing: Round-Robin + Company Matching</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
              If a new contact came from an existing company, they needed to go to the SDR who already owned that company. If it was a brand new company, both the contact and company needed to be assigned to an SDR via round-robin. This logic had to happen automatically on contact creation.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">3. Call Disposition Automation</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Nine different call outcomes, each triggering different next steps. "Interested" → move to qualified pipeline. "Callback requested" → create task for specific date/time. "Not interested" → wait 45 days then re-enroll. "Wrong number" → mark as bad data. All of this needed to happen automatically based on what the SDR selected in Nooks.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What We Built</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">The Four-Tool Sales Engine</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>SalesIntel → HubSpot → Zapier → Nooks</strong>
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Phase 1: Lead Ingestion (SalesIntel → HubSpot)</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Lead generators use SalesIntel to find prospects matching the ICP</li>
              <li className="text-muted-foreground">Native SalesIntel-HubSpot integration exports contacts directly to HubSpot</li>
              <li className="text-muted-foreground">Creates both contact record AND company record (if company doesn't exist)</li>
              <li className="text-muted-foreground">Contact automatically set to Lead Status = "Not Attempted"</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Phase 2: Intelligent Routing (HubSpot Workflows)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Workflow logic triggers on contact creation:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Check if contact is associated to an existing company</li>
              <li className="text-muted-foreground">If YES → Check if that company already has an owner → Assign contact to same owner</li>
              <li className="text-muted-foreground">If NO (new company) → Round-robin assignment → Assign both contact AND company to next SDR in rotation</li>
              <li className="text-muted-foreground">Result: Existing accounts stay with their SDR, new accounts distributed evenly</li>
            </ol>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Phase 3: Auto-Enrollment Workaround (Zapier)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Problem:</strong> Sales Hub Pro doesn't allow sequence auto-enrollment on contact creation.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Solution:</strong> Built a Zapier integration that watches for new contacts in HubSpot and enrolls them into sequences via API.
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Trigger: New contact created in HubSpot with Lead Status = "Not Attempted"</li>
              <li className="text-muted-foreground">Action: Zapier calls HubSpot Engagements API → Enrolls contact into cold outreach sequence</li>
              <li className="text-muted-foreground">Result: 100% auto-enrollment without Sales Hub Enterprise</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Phase 4: Dialer Integration (Nooks ↔ HubSpot)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Native Nooks-HubSpot integration:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Sequences in HubSpot create call tasks</li>
              <li className="text-muted-foreground">Tasks sync to Nooks dialer automatically</li>
              <li className="text-muted-foreground">SDRs make calls inside Nooks</li>
              <li className="text-muted-foreground">Call dispositions selected in Nooks sync back to HubSpot as call outcomes</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Phase 5: Call Disposition Automation (HubSpot Workflows)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Nine call dispositions, each triggering different automation:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Interested:</strong> Move contact to qualified pipeline, assign to AE, send introduction email</li>
              <li className="text-muted-foreground"><strong>Callback Requested:</strong> Create task for specific date/time, unenroll from sequence</li>
              <li className="text-muted-foreground"><strong>Not Interested (Soft No):</strong> Unenroll from sequence, wait 45 days, re-enroll automatically</li>
              <li className="text-muted-foreground"><strong>Not Interested (Hard No):</strong> Mark as unqualified, do not contact again</li>
              <li className="text-muted-foreground"><strong>Wrong Number:</strong> Mark contact as bad data, notify lead gen team</li>
              <li className="text-muted-foreground"><strong>Left Voicemail:</strong> Continue sequence, add note to record</li>
              <li className="text-muted-foreground"><strong>Gatekeeper:</strong> Research decision-maker, create task for SDR to find correct contact</li>
              <li className="text-muted-foreground"><strong>No Answer:</strong> Continue sequence, try again next day</li>
              <li className="text-muted-foreground"><strong>Out of Business:</strong> Mark company as closed, remove from active prospecting</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Zero manual lead assignments:</strong> Round-robin and company-match logic handles all routing automatically. SDRs never manually assign leads.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>100% auto-enrollment:</strong> Every contact gets enrolled into the sequence automatically on creation, despite Sales Hub Pro limitations. Zapier workaround solved the problem without upgrading to Enterprise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Call disposition automation eliminates manual follow-up:</strong> SDRs select an outcome in Nooks, and HubSpot handles everything else. No manual task creation. No manual re-enrollment. No manual data cleanup.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>45-day recycle loop for soft-no contacts:</strong> Contacts who say "not interested right now" automatically re-enter the sequence 45 days later without any manual work.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Technical Stack</h2>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>HubSpot Sales Hub Professional</strong> - CRM, sequences, workflow automation, task management</li>
              <li className="text-muted-foreground"><strong>SalesIntel</strong> - B2B contact database and prospecting tool</li>
              <li className="text-muted-foreground"><strong>Zapier</strong> - Middleware enabling auto-enrollment workaround</li>
              <li className="text-muted-foreground"><strong>Nooks</strong> - VoIP dialer with native HubSpot integration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Building an SDR team that needs to move faster?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We design sales automation stacks where the system does the heavy lifting and your team does the selling.
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
