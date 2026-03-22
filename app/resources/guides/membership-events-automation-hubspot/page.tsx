import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Users } from "lucide-react"

export const metadata = {
  title: "Membership + Events Automation in HubSpot: Complete Guide (2026)",
  description: "Technical guide to automating membership organizations and events in HubSpot. Tier-based pricing, custom API integrations, payment automation, and dual-pipeline management.",
  keywords: "HubSpot membership automation, events management HubSpot, membership software, tier-based pricing automation, HubSpot Outseta integration",
}

export default function MembershipEventsAutomationGuide() {
  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="pt-32 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/resources" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Resources
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-secondary/50 text-sm font-medium mb-6">
            Technical Guide • Updated March 2026
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            Membership + Events Automation in HubSpot: Complete Guide
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step guide to running membership organizations and events through HubSpot. Tier-based pricing automation, custom API integrations with payment platforms, and dual-pipeline management for memberships + events.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Tier-based pricing automation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Payment platform integration</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Custom API workarounds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Running a membership organization or events business through HubSpot requires solving several technical challenges:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground mb-4">
            <li><strong>Two separate pipelines:</strong> Membership applications + Event registrations (different logic, different workflows)</li>
            <li><strong>Tier-based pricing:</strong> Members pay different rates than non-members. Pricing varies by event + membership tier.</li>
            <li><strong>Payment platform integration:</strong> No native connectors between HubSpot and membership platforms (Outseta, MemberPress, etc.)</li>
            <li><strong>Billing contact routing:</strong> Event applicants can nominate someone else to handle payment</li>
            <li><strong>Human review step:</strong> Membership applications need manual approval before payment links are sent</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            This guide walks through building a complete automation system that handles all of this in HubSpot.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Problem Membership Organizations Face</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Membership organizations and event-based communities typically run into these operational challenges:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Manual application processing:</strong> Applications come in via forms. Someone manually reviews them, approves/rejects, then emails payment links.</li>
              <li className="text-muted-foreground"><strong>Tier-based pricing confusion:</strong> Members pay one price. Non-members pay another. Pricing varies by event. Staff look up pricing in spreadsheets.</li>
              <li className="text-muted-foreground"><strong>Payment platforms don't integrate:</strong> Membership portals (Outseta, MemberPress, Wild Apricot) don't natively connect to CRMs like HubSpot.</li>
              <li className="text-muted-foreground"><strong>Billing contact complexity:</strong> Event registrants can nominate someone else to receive the payment link and handle billing.</li>
              <li className="text-muted-foreground"><strong>No payment status visibility:</strong> Once someone signs up in the membership portal, that status doesn't flow back to HubSpot automatically.</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Dual-Pipeline Architecture</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The solution requires two separate pipelines in HubSpot, each with different logic:
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Pipeline 1: Membership Applications</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Purpose:</strong> Manage membership applications, tier assignment, payment, and onboarding.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Stages:</strong> Application Received → Under Review → Approved → Payment Sent → Active Member → Renewal Due
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Pipeline 2: Event Registrations</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Purpose:</strong> Manage event applications, eligibility checks, tier-based pricing, payment, and confirmations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Stages:</strong> Application Received → Eligibility Check → Payment Link Sent → Payment Confirmed → Registered → Event Complete
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 1: Membership Pipeline Setup</h2>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">1.1 Create Custom Properties for Membership Tiers</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>In HubSpot, create these contact-level properties:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Membership Tier</strong> (Dropdown): Veteran Member, Virgin Member, Under-35 Discount, Non-Member</li>
              <li className="text-muted-foreground"><strong>Membership Status</strong> (Dropdown): Applicant, Active, Expired, Cancelled</li>
              <li className="text-muted-foreground"><strong>Membership Start Date</strong> (Date)</li>
              <li className="text-muted-foreground"><strong>Membership Renewal Date</strong> (Date)</li>
              <li className="text-muted-foreground"><strong>Payment Status</strong> (Dropdown): Pending, Paid, Failed</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">1.2 Membership Application Workflow</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Create HubSpot Workflow: "Membership Application - Processing"</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Trigger:</strong> Deal created in "Membership Applications" pipeline
              </li>
              <li className="text-muted-foreground">
                <strong>Workflow Step 1:</strong> Set deal stage to "Under Review"
              </li>
              <li className="text-muted-foreground">
                <strong>Wait for Manual Action:</strong> Team reviews application and manually assigns Membership Tier property
              </li>
              <li className="text-muted-foreground">
                <strong>Trigger Point:</strong> When "Membership Tier" property is set (approval decision made)
              </li>
              <li className="text-muted-foreground">
                <strong>Workflow Step 2:</strong> Send personalized email with link to membership portal
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Email template includes tier-specific pricing and portal link</li>
                  <li>Portal link directs to Outseta (or MemberPress, Wild Apricot, etc.)</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Workflow Step 3:</strong> Move deal to "Payment Sent" stage
              </li>
            </ol>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">1.3 Payment Status Sync (Custom API Integration)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Problem:</strong> When someone signs up and pays in Outseta (or your membership platform), that status doesn't automatically flow back to HubSpot.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Solution:</strong> Build a custom API integration that syncs payment confirmation from Outseta → HubSpot.
            </p>
            
            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-6">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Why Not Zapier?</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Outseta's data model requires reading account-level membership status and matching it to the correct HubSpot contact via email. Zapier's pre-built Outseta triggers don't handle this reliably. A custom API integration using Outseta's API + HubSpot's API ensures accurate matching and prevents duplicate records.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How the custom API works:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Script polls Outseta API for new account signups (runs every 5 minutes)</li>
              <li className="text-muted-foreground">Matches Outseta account email to HubSpot contact via email address</li>
              <li className="text-muted-foreground">Updates HubSpot contact properties: Membership Status = "Active", Payment Status = "Paid", Membership Start Date</li>
              <li className="text-muted-foreground">Triggers HubSpot workflow to send welcome email and move deal to "Active Member" stage</li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 2: Events Pipeline Setup</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">2.1 Create Event-Specific Properties</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Create these deal-level properties in HubSpot:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Event Name</strong> (Dropdown): List all events (e.g., "Iceland Trek", "Leadership Summit", "Nepal Expedition")</li>
              <li className="text-muted-foreground"><strong>Billing Contact Email</strong> (Text): Email of person handling payment (if different from applicant)</li>
              <li className="text-muted-foreground"><strong>Tier-Based Price</strong> (Number): Auto-calculated based on tier + event</li>
              <li className="text-muted-foreground"><strong>Stripe Payment Link</strong> (Text): Dynamically generated link</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">2.2 Tier-Based Pricing Matrix</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Challenge:</strong> Event pricing varies by both membership tier AND specific event.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Example:</strong>
            </p>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="border border-border p-3 text-left">Event</th>
                    <th className="border border-border p-3 text-left">Veteran Member</th>
                    <th className="border border-border p-3 text-left">Virgin Member</th>
                    <th className="border border-border p-3 text-left">Under-35</th>
                    <th className="border border-border p-3 text-left">Non-Member</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">Iceland Trek</td>
                    <td className="border border-border p-3">$2,500</td>
                    <td className="border border-border p-3">$2,800</td>
                    <td className="border border-border p-3">$2,200</td>
                    <td className="border border-border p-3">$3,500</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Nepal Expedition</td>
                    <td className="border border-border p-3">$4,500</td>
                    <td className="border border-border p-3">$5,000</td>
                    <td className="border border-border p-3">$4,200</td>
                    <td className="border border-border p-3">$6,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How to build pricing automation:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create custom properties for each event:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>"Iceland Trek - Veteran Price" = $2,500</li>
                  <li>"Iceland Trek - Virgin Price" = $2,800</li>
                  <li>"Iceland Trek - Under-35 Price" = $2,200</li>
                  <li>"Iceland Trek - Non-Member Price" = $3,500</li>
                  <li>Repeat for each event</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Create HubSpot Workflow: "Event Registration - Pricing Logic"</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Trigger: Deal created in "Event Registrations" pipeline</li>
                  <li>Branch Logic: If Event Name = "Iceland Trek" + Membership Tier = "Veteran" → Set "Tier-Based Price" = "Iceland Trek - Veteran Price"</li>
                  <li>Repeat branches for all tier + event combinations</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Generate Stripe Payment Link:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Use Zapier or custom code to call Stripe API</li>
                  <li>Pass "Tier-Based Price" as amount</li>
                  <li>Store generated payment link in "Stripe Payment Link" property</li>
                </ul>
              </li>
            </ol>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">2.3 Billing Contact Routing</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The Problem:</strong> Event applicants can nominate someone else (parent, company, sponsor) to receive the payment link and handle billing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How to build it:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Add field to event application form:</strong> "Billing Contact Email" (optional)
              </li>
              <li className="text-muted-foreground">
                <strong>Create Workflow Branch:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>If "Billing Contact Email" is empty → Send payment link to applicant</li>
                  <li>If "Billing Contact Email" is filled → Create separate contact record for billing contact, send payment link to them instead</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Associate Contacts:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Use HubSpot's contact-to-contact association to link applicant → billing contact</li>
                  <li>This preserves referral tracking and makes billing relationships searchable</li>
                </ul>
              </li>
            </ol>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">2.4 Payment Confirmation Workflow</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Once payment is confirmed in Stripe:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Stripe webhook sends payment confirmation to HubSpot (via Zapier or custom integration)</li>
              <li className="text-muted-foreground">HubSpot workflow updates deal: Payment Status = "Paid", Deal Stage = "Registered"</li>
              <li className="text-muted-foreground">Send confirmation emails to BOTH applicant AND billing contact (if different)</li>
              <li className="text-muted-foreground">Add registrant to event-specific list for future communications</li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Advanced Features</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Referral Tracking</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Use case:</strong> Track who referred each new member or event registrant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How to build it:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Add "Referred By" field to application forms</li>
              <li className="text-muted-foreground">When applicant fills out "Referred By" field, workflow searches for existing contact with that name</li>
              <li className="text-muted-foreground">If found, create contact-to-contact association linking new applicant → referrer</li>
              <li className="text-muted-foreground">Referral data becomes searchable in HubSpot reports</li>
            </ol>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Automatic Membership Renewal Reminders</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Create Workflow: "Membership Renewal Reminder"</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Trigger: Membership Renewal Date is 30 days from today</li>
              <li className="text-muted-foreground">Send renewal reminder email with payment link</li>
              <li className="text-muted-foreground">If payment not received after 30 days, update Membership Status to "Expired"</li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">What You Get After Setup</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Full lifecycle automation:</strong> From application to approval to payment to onboarding—minimal manual steps</li>
              <li className="text-muted-foreground"><strong>Tier-based pricing handled automatically:</strong> No more spreadsheet lookups. Workflow logic calculates correct price.</li>
              <li className="text-muted-foreground"><strong>Payment status synced:</strong> Real-time visibility into who's paid, who's pending, who's expired</li>
              <li className="text-muted-foreground"><strong>Billing contact routing:</strong> Third-party payers handled seamlessly</li>
              <li className="text-muted-foreground"><strong>Referral tracking:</strong> Know who's bringing in new members</li>
              <li className="text-muted-foreground"><strong>Scalable operations:</strong> Handle 10x growth without hiring more admin staff</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Common Issues and How to Fix Them</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Issue 1: Payment Status Not Syncing from Outseta</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Custom API integration not polling frequently enough or email mismatch between Outseta and HubSpot.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Increase polling frequency to every 2-3 minutes. Ensure emails are lowercase in both systems. Add logging to track which records are being matched.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 2: Wrong Price Calculated for Event Registration</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Membership Tier property not set correctly or pricing workflow branch logic missing a case.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Verify all tier + event combinations have corresponding workflow branches. Add default fallback branch to catch edge cases.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 3: Billing Contact Not Receiving Payment Link</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Billing contact email field empty or workflow branch logic incorrect.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Add workflow action to log error if billing contact email is invalid. Test with multiple scenarios (applicant = payer, third party = payer).
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">When to DIY vs. Hire an Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You can DIY this if:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">You have simple tier structure (2-3 tiers max)</li>
              <li className="text-muted-foreground">Your events have fixed pricing (not dynamic based on multiple factors)</li>
              <li className="text-muted-foreground">You're comfortable with basic HubSpot workflows</li>
              <li className="text-muted-foreground">You don't need custom API integration (Zapier connectors work for your membership platform)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You should hire an agency if:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">You have complex tier structure (5+ tiers with age-based discounts, geographic pricing, etc.)</li>
              <li className="text-muted-foreground">You need custom API integration with Outseta, MemberPress, or other membership platforms</li>
              <li className="text-muted-foreground">You have multiple payment platforms (Stripe for events, Outseta for memberships, etc.)</li>
              <li className="text-muted-foreground">You need advanced reporting (member retention, event profitability, referral attribution)</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Real-World Example</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We built this exact system for a global leadership community running annual memberships and high-end adventure experiences (Kilimanjaro treks, Arctic expeditions, leadership retreats).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              They had two business models (memberships + events) running through manual processes. Applications came in via forms. Staff manually reviewed, assigned tiers, looked up pricing in spreadsheets, and emailed payment links.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              After implementing the dual-pipeline system with custom API integration to Outseta and tier-based Stripe automation, they eliminated pricing errors entirely. Payment status synced automatically. Billing contacts were routed correctly. The team went from spending 20+ hours/week on admin to less than 2 hours.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Running a membership or events business?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We've built this system for membership organizations and event companies. We can set it up with all the workflows, integrations, and pricing logic.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Us About Your Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Or see the <Link href="/case-studies/global-leadership-community" className="underline hover:text-foreground">full case study</Link> of how we implemented this for a leadership community.
          </p>
        </div>
      </section>
    </div>
  )
}
