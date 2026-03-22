import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle, Zap } from "lucide-react"

export const metadata = {
  title: "Building an SDR Automation Stack: HubSpot + Zapier + VoIP (2026)",
  description: "Complete technical guide to automating SDR workflows with HubSpot Sales Hub Pro. Intelligent lead routing, auto-enrollment workaround, and call disposition automation without Enterprise.",
  keywords: "SDR automation HubSpot, sales development automation, HubSpot sequence auto-enrollment, VoIP HubSpot integration, sales workflow automation",
}

export default function SDRAutomationStackGuide() {
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
            Building an SDR Automation Stack with HubSpot + Zapier + VoIP
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step guide to automating SDR workflows with HubSpot Sales Hub Pro. Intelligent lead routing, auto-enrollment workaround for sequences, and call disposition automation—all without upgrading to Enterprise.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Works with Sales Hub Pro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>No manual lead routing</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Zapier workaround included</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Most SDR teams waste time on admin: manually routing leads, manually enrolling sequences, manually creating follow-up tasks based on call outcomes. This guide shows you how to automate all of it using:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground mb-4">
            <li><strong>Intelligent routing:</strong> Round-robin for new companies + company-match for existing accounts</li>
            <li><strong>Auto-enrollment:</strong> Zapier workaround to enroll contacts into sequences on creation (Sales Hub Pro limitation bypass)</li>
            <li><strong>Call disposition automation:</strong> Different outcomes trigger different workflows (interested → create deal, not interested → 45-day recycle, etc.)</li>
            <li><strong>VoIP integration:</strong> Native sync between HubSpot tasks and your dialer (Nooks, Aircall, etc.)</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed">
            Result: SDRs spend time selling, not doing data entry. Every lead gets touched. Nothing falls through the cracks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Problem with Manual SDR Operations</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most B2B companies running SDR teams face the same operational bottlenecks:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Manual lead assignment:</strong> Someone has to decide which SDR gets which lead. Round-robin breaks when people are out. Territory assignments get messy.</li>
              <li className="text-muted-foreground"><strong>Manual sequence enrollment:</strong> SDRs click into every new contact and manually enroll them into sequences. This gets skipped when it's busy.</li>
              <li className="text-muted-foreground"><strong>Disconnected dialer:</strong> VoIP tools aren't integrated, so call outcomes don't trigger next steps automatically.</li>
              <li className="text-muted-foreground"><strong>No follow-up automation:</strong> "Not interested" contacts sit in limbo. No one remembers to retry them in 30-60 days.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The result? SDRs spend 40-50% of their time on admin tasks instead of actually talking to prospects. Leads fall through the cracks. Follow-up is inconsistent. The sales process is slow and manual.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The HubSpot Sales Hub Pro Limitation</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HubSpot has sequences (email + task-based outreach), but there's a critical limitation in Sales Hub Professional:
            </p>
            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-6">
              <p className="font-semibold text-foreground mb-2">You cannot automatically enroll contacts into sequences when they're created.</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Sequences require manual enrollment or specific workflow triggers that don't fire at the moment of contact creation. This means every new lead requires an SDR to manually click "Enroll in sequence"—which gets skipped when the team is busy.
              </p>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Sales Hub Enterprise has more workflow triggers, but that's a $1,200/user/year upgrade. Most teams don't need Enterprise. They just need sequence auto-enrollment.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>The solution:</strong> A Zapier workaround that enrolls contacts into sequences automatically the moment they're created in HubSpot.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Four-Tool SDR Automation Stack</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This guide walks through building a complete SDR automation system using:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>SalesIntel (or Apollo, ZoomInfo, etc.):</strong> Lead source / contact database</li>
              <li className="text-muted-foreground"><strong>HubSpot Sales Hub Pro:</strong> CRM, sequences, task management</li>
              <li className="text-muted-foreground"><strong>Zapier:</strong> Middleware for auto-enrollment and workflow triggers</li>
              <li className="text-muted-foreground"><strong>Nooks (or Aircall, RingCentral, etc.):</strong> VoIP dialer with HubSpot integration</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 1: Lead Ingestion and Intelligent Routing</h2>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">1.1 Connect Lead Source to HubSpot</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Setup:</strong> Use the native integration between your lead database (SalesIntel, Apollo, ZoomInfo) and HubSpot.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">When a lead gen specialist exports contacts from SalesIntel → Contacts are automatically created in HubSpot</li>
              <li className="text-muted-foreground">If the contact belongs to a new company, HubSpot creates the company record automatically</li>
              <li className="text-muted-foreground">Contact is associated with the company</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">1.2 Intelligent Lead Routing (HubSpot Workflow)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The problem:</strong> You need two different assignment rules:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">If contact belongs to existing company → assign to SDR who owns that company</li>
              <li className="text-muted-foreground">If contact belongs to new company → distribute via round-robin across all SDRs</li>
            </ul>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How to build it:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create Workflow: "Lead Assignment - Contact Routing"</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Trigger: Contact is created</li>
                  <li>Filter: Lead Status = Not Attempted (ensures this only runs for new prospects)</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Add Branch Logic:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Branch A: If "Associated Company Owner" is known → Copy company owner to contact owner</li>
                  <li>Branch B: If "Associated Company Owner" is unknown → Assign contact via round-robin rotation property</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Create Second Workflow: "Company Assignment - Round Robin"</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Trigger: Company is created</li>
                  <li>Action: Assign company owner via round-robin (use rotating contact owner property)</li>
                </ul>
              </li>
            </ol>

            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-12">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Pro Tip: Set Lead Status Automatically</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Add a workflow action to set Lead Status = "Not Attempted" immediately when the contact is created. This ensures your routing workflow triggers correctly and gives you a clear status field to track SDR progress.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 2: Auto-Enrollment Workaround (Zapier)</h2>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HubSpot Sales Hub Pro doesn't allow automatic sequence enrollment on contact creation. The native workflow actions can't enroll contacts into sequences at the moment they're created.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">The Zapier Solution</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How it works:</strong> Zapier watches for new contacts in HubSpot and enrolls them into your sequence via the HubSpot API.
            </p>
            
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create New Zap in Zapier</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Trigger: HubSpot - New Contact</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your HubSpot account</li>
                  <li>Select trigger event: "New Contact"</li>
                  <li>Test the trigger to pull in a sample contact</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Filter (Important):</strong> Only continue if contact has valid email + Lead Status = "Not Attempted"
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Add "Filter by Zapier" step</li>
                  <li>Condition 1: Email exists (not empty)</li>
                  <li>Condition 2: Lead Status exactly matches "Not Attempted"</li>
                  <li>This prevents duplicate enrollments and ensures only valid prospects enter sequences</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Action: HubSpot - Enroll in Sequence</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Select the sequence you want contacts enrolled in (e.g., "Cold Outreach Sequence")</li>
                  <li>Map the contact email from the trigger</li>
                  <li>Set enrollment to start immediately</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Test the zap</strong> - Create a test contact in HubSpot and verify they're enrolled in the sequence
              </li>
              <li className="text-muted-foreground">
                <strong>Turn on the zap</strong>
              </li>
            </ol>

            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-12">
              <div className="flex gap-3">
                <Zap className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Why This Works</p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                    Zapier uses the HubSpot Engagements API to enroll contacts into sequences. This API endpoint is accessible even on Sales Hub Pro, but HubSpot's native workflows can't trigger it at contact creation. Zapier acts as the bridge.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    This is a documented workaround that many HubSpot partners use. It's stable and won't break when HubSpot updates.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 3: VoIP Integration (HubSpot + Nooks/Aircall)</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Goal:</strong> Sequence tasks in HubSpot should sync to your VoIP dialer automatically. SDRs work from the dialer, not HubSpot.
            </p>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Native Integration Setup (Nooks Example)</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Install the Nooks app in HubSpot</strong> (or Aircall, RingCentral, etc.)
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Go to HubSpot App Marketplace</li>
                  <li>Search for your VoIP tool (Nooks, Aircall, RingCentral)</li>
                  <li>Click "Connect App" and authorize access</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Configure Sync Settings</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Enable "Sync HubSpot Tasks to Nooks"</li>
                  <li>Set task type filter to "Call" (so only call tasks sync, not emails)</li>
                  <li>Enable "Sync Call Outcomes back to HubSpot"</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>How it works:</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>HubSpot sequence creates call task → Task syncs to Nooks dialer queue</li>
                  <li>SDR makes call in Nooks → Selects call disposition</li>
                  <li>Call outcome syncs back to HubSpot → Updates contact record and triggers next workflow</li>
                </ul>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 4: Call Disposition Automation</h2>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The problem:</strong> SDRs mark calls as complete, but nothing happens next. They have to manually create follow-up tasks, manually move deals, manually set reminders.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>The solution:</strong> Map each call outcome to specific automated workflows.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Common Call Dispositions + Automation Logic</h3>
            
            <div className="space-y-6 mb-12">
              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">1. Interested / Meeting Set</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Unenroll from sequence (via Zapier)</li>
                  <li>Create deal in HubSpot pipeline</li>
                  <li>Update Lead Status to "Meeting Set"</li>
                  <li>Assign to AE (account executive)</li>
                  <li>Send introduction email to prospect + AE</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">2. Not Interested (Soft No)</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Unenroll from sequence (via Zapier)</li>
                  <li>Update Lead Status to "Opener Reject"</li>
                  <li>Wait 45 days (via HubSpot workflow delay)</li>
                  <li>Reset Lead Status to "Not Attempted"</li>
                  <li>Contact re-enters Zapier enrollment trigger → Back into sequence automatically</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">3. Callback Requested</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Unenroll from sequence</li>
                  <li>Create call task for specific date/time</li>
                  <li>Update Lead Status to "Callback Scheduled"</li>
                  <li>Send calendar invite to SDR</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">4. Wrong Number / Bad Data</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Unenroll from sequence</li>
                  <li>Update Lead Status to "Bad Data"</li>
                  <li>Create task for lead gen team to find correct contact</li>
                  <li>Mark contact as "Do Not Contact" if phone/email both invalid</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">5. Gatekeeper</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Continue sequence (don't unenroll)</li>
                  <li>Add note: "Gatekeeper - need decision maker"</li>
                  <li>Create research task for SDR to find correct contact</li>
                </ul>
              </div>

              <div className="border-l-4 border-foreground pl-6">
                <h4 className="font-semibold text-foreground mb-2">6. No Answer / Left Voicemail</h4>
                <p className="text-muted-foreground text-sm mb-2"><strong>What happens:</strong></p>
                <ul className="space-y-1 text-muted-foreground text-sm list-disc list-inside">
                  <li>Continue sequence (next task triggers tomorrow)</li>
                  <li>Add note with voicemail details</li>
                </ul>
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">How to Build Disposition Workflows</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create HubSpot Workflow: "Call Outcome - [Disposition Name]"</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Trigger: Lead Status is updated</li>
                  <li>Filter: Lead Status = specific disposition (e.g., "Meeting Set", "Opener Reject", etc.)</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Add Actions Based on Disposition</strong> (see examples above)
              </li>
              <li className="text-muted-foreground">
                <strong>For Unenrollment: Create Zapier Zap</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Trigger: HubSpot - Updated Contact Property (Lead Status)</li>
                  <li>Filter: Lead Status = "Meeting Set" OR "Opener Reject" OR "Callback Scheduled"</li>
                  <li>Action: HubSpot - Unenroll from Sequence</li>
                </ul>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">The 45-Day Recycle Loop</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              One of the most powerful features: contacts who say "not interested" automatically re-enter outreach after 45 days.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How it works:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">SDR marks call as "Not Interested" → Lead Status updates to "Opener Reject"</li>
              <li className="text-muted-foreground">Zapier unenrolls contact from sequence</li>
              <li className="text-muted-foreground">HubSpot workflow waits 45 days</li>
              <li className="text-muted-foreground">After 45 days, workflow updates Lead Status back to "Not Attempted"</li>
              <li className="text-muted-foreground">Zapier enrollment trigger sees "Not Attempted" status → Re-enrolls contact into sequence</li>
              <li className="text-muted-foreground">Contact starts outreach again automatically</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Result:</strong> No manual follow-up tracking. Soft-no prospects get re-engaged automatically. Nothing falls through the cracks.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">What You Get After Setup</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Zero manual lead assignment:</strong> Contacts route intelligently based on company ownership</li>
              <li className="text-muted-foreground"><strong>100% sequence enrollment:</strong> Every new contact enters outreach automatically</li>
              <li className="text-muted-foreground"><strong>Automated follow-up:</strong> Call outcomes trigger the right next steps without SDR input</li>
              <li className="text-muted-foreground"><strong>Recycle loop:</strong> Soft-no prospects re-enter outreach after 45 days automatically</li>
              <li className="text-muted-foreground"><strong>Clean data:</strong> Bad contacts get flagged and removed from rotation</li>
              <li className="text-muted-foreground"><strong>SDR productivity:</strong> Team spends time selling, not doing admin</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Common Issues and How to Fix Them</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Issue 1: Contacts Not Enrolling in Sequence</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Zapier filter is too restrictive or contact missing required field (email).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Check Zapier task history for errors. Verify contact has valid email address and Lead Status = "Not Attempted".
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 2: Duplicate Enrollments</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Contact re-imported or Lead Status changed multiple times.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Add filter in Zapier to only enroll if "Currently in Sequence" = false. Or add HubSpot workflow to prevent duplicate status updates.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 3: Call Outcomes Not Syncing from Nooks</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Nooks-HubSpot integration not configured correctly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Reconnect Nooks integration in HubSpot. Verify "Sync Call Outcomes" is enabled in Nooks settings.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">When to DIY vs. Hire an Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You can DIY this if:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">You have a simple SDR process (one sequence, straightforward dispositions)</li>
              <li className="text-muted-foreground">Someone on your team has 3-4 hours to dedicate to setup and testing</li>
              <li className="text-muted-foreground">You're comfortable troubleshooting Zapier and HubSpot workflows</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You should hire an agency if:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">You have complex routing logic (territory assignments, account tiers, industry-specific rules)</li>
              <li className="text-muted-foreground">You need multiple sequences for different ICPs or personas</li>
              <li className="text-muted-foreground">You want advanced reporting (conversion rates by disposition, SDR performance dashboards)</li>
              <li className="text-muted-foreground">You're integrating more than 4 tools (e.g., also Clay, Apollo, Outreach, etc.)</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Real-World Example</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We built this exact system for a remote staffing company serving the US construction industry. They had lead gen specialists finding prospects in SalesIntel and SDRs making calls, but everything was manual.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After implementing the four-tool stack (SalesIntel → HubSpot → Zapier → Nooks), they eliminated manual lead assignment, achieved 100% sequence enrollment, and automated all follow-up based on 9 different call dispositions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The SDR team went from spending 40% of their time on admin to spending 90% on actual selling. The 45-day recycle loop meant soft-no prospects got re-engaged automatically without anyone tracking it manually.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help building your SDR automation stack?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We've built this system for multiple B2B sales teams. We can set it up, configure all the workflows, and hand it off working.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Us About Your Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Or see the <Link href="/case-studies/remote-staffing-sdr" className="underline hover:text-foreground">full case study</Link> of how we implemented this for a staffing company.
          </p>
        </div>
      </section>
    </div>
  )
}
