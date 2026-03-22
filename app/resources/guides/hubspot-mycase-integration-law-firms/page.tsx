import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Complete Guide to HubSpot + MyCase Integration for Law Firms (2026)",
  description: "Step-by-step technical guide to integrating HubSpot and MyCase using Zapier. Automate client intake, sync contacts and cases, and eliminate manual data entry for legal practices.",
  keywords: "HubSpot MyCase integration, law firm CRM integration, legal practice management automation, HubSpot for lawyers, MyCase integration Zapier",
}

export default function HubSpotMyCaseIntegrationGuide() {
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
            Complete Guide to HubSpot + MyCase Integration for Law Firms
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step technical guide to connecting HubSpot and MyCase using Zapier. Automate client intake, eliminate manual data entry, and keep your marketing CRM and case management system perfectly in sync.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>No coding required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Works with any HubSpot tier</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>30-45 min setup time</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HubSpot and MyCase don't have a native integration. You connect them using Zapier with three automation workflows:
          </p>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
            <li><strong>Contact Sync:</strong> New HubSpot contacts automatically create MyCase contact records</li>
            <li><strong>Case Creation:</strong> When a HubSpot deal moves to "Hired", it creates a case in MyCase</li>
            <li><strong>Notes Sync:</strong> HubSpot notes automatically attach to MyCase cases (or contacts if no case exists yet)</li>
          </ol>
          <p className="text-muted-foreground leading-relaxed mt-4">
            This eliminates manual data entry between your marketing/sales CRM and case management software.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Problem Law Firms Face</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most law firms use two separate systems:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>HubSpot (or similar CRM):</strong> For marketing, lead capture, client intake, and initial consultations</li>
              <li className="text-muted-foreground"><strong>MyCase (or Clio, PracticePanther):</strong> For case management, time tracking, billing, and legal workflows</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The issue? These systems don't talk to each other. When someone becomes a client, staff manually re-enter all their information from HubSpot into MyCase. Contact details, case notes, communication history, everything gets copied by hand.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              This wastes time, creates errors, and means critical information lives in disconnected silos. Marketing sees leads in HubSpot. Attorneys see cases in MyCase. Nobody has the full picture.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why There's No Native Integration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              HubSpot has native integrations with thousands of tools. MyCase integrates with accounting software, document management systems, and payment processors. But as of 2026, there is no native connector between HubSpot and MyCase.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              This is common in legal tech. Practice management software (MyCase, Clio, PracticePanther) focuses on case workflows and billing. Marketing CRMs (HubSpot, Salesforce) focus on lead generation and client communication. They serve different purposes, so integration isn't a priority for either vendor.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Solution: Zapier Integration</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Zapier acts as the bridge. It watches for events in HubSpot (new contact created, deal stage changed, note added) and automatically triggers actions in MyCase (create contact, create case, add note).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>What you'll need:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Active HubSpot account (any tier works, but Sales Hub recommended)</li>
              <li className="text-muted-foreground">Active MyCase account</li>
              <li className="text-muted-foreground">Zapier account (paid plan recommended for multiple zaps and faster sync)</li>
              <li className="text-muted-foreground">30-45 minutes for initial setup</li>
              <li className="text-muted-foreground">Admin access to both HubSpot and MyCase</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step-by-Step Integration Setup</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Zap 1: Contact Sync (HubSpot → MyCase)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Purpose:</strong> Every time a new contact is created in HubSpot, automatically create that contact in MyCase.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Setup:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Zapier and click "Create Zap"</strong>
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
                <strong>Action: MyCase - Create Contact</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your MyCase account</li>
                  <li>Map fields from HubSpot to MyCase:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>First Name → First Name</li>
                      <li>Last Name → Last Name</li>
                      <li>Email → Email</li>
                      <li>Phone → Phone Number</li>
                      <li>Address → Address fields</li>
                      <li>Company → Company/Organization (if applicable)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Test the zap</strong> - Create a test contact in HubSpot and verify it appears in MyCase
              </li>
              <li className="text-muted-foreground">
                <strong>Turn on the zap</strong>
              </li>
            </ol>

            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-12">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Important: Duplicate Prevention</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    MyCase has built-in duplicate detection based on email address. If a contact with the same email already exists in MyCase, the zap will either update the existing record or skip creation (depending on your MyCase settings). Test this with an existing contact to confirm behavior.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Zap 2: Case Creation (HubSpot → MyCase)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Purpose:</strong> When a HubSpot deal moves to "Hired" stage (meaning the prospect became a client), automatically create a case in MyCase.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Setup:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create a new Zap</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Trigger: HubSpot - Updated Deal Stage</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your HubSpot account</li>
                  <li>Select trigger event: "Updated Deal Stage"</li>
                  <li>Filter for specific pipeline (if you have multiple)</li>
                  <li>Test the trigger</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Filter (Optional but Recommended):</strong> Only continue if Deal Stage = "Hired"
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Add a "Filter by Zapier" step</li>
                  <li>Condition: Deal Stage exactly matches "Hired"</li>
                  <li>This ensures the zap only fires when deals reach the "Hired" stage</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Action: MyCase - Create Case</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your MyCase account</li>
                  <li>Map fields from HubSpot deal to MyCase case:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>Deal Name → Case Name/Description</li>
                      <li>Contact (associated with deal) → Client (link to MyCase contact created in Zap 1)</li>
                      <li>Deal custom properties → Case Type, Practice Area, etc.</li>
                      <li>Close Date → Case Open Date</li>
                      <li>Deal Amount → Retainer Amount (if applicable)</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Test the zap</strong> - Move a test deal to "Hired" in HubSpot and verify case creation in MyCase
              </li>
              <li className="text-muted-foreground">
                <strong>Turn on the zap</strong>
              </li>
            </ol>

            <div className="bg-secondary/30 border-l-4 border-foreground p-6 mb-12">
              <div className="flex gap-3">
                <AlertCircle className="h-5 w-5 text-foreground flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Pro Tip: Custom Deal Properties</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Create custom properties in HubSpot for Case Type (dropdown: Criminal Defense, Estate Planning, Personal Injury, etc.) and Practice Area. This ensures the right information flows into MyCase without manual data entry. Map these properties in the zap setup.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Zap 3: Notes Sync (HubSpot → MyCase)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Purpose:</strong> When someone logs a note in HubSpot, automatically add that note to the corresponding MyCase case (or contact if no case exists yet).
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Setup:</strong>
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Create a new Zap</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Trigger: HubSpot - New Engagement</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your HubSpot account</li>
                  <li>Select trigger event: "New Engagement"</li>
                  <li>Set Engagement Type filter to "NOTE"</li>
                  <li>Test the trigger</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Filter: Only proceed if Engagement Type = "NOTE"</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Add "Filter by Zapier" step</li>
                  <li>Condition: Engagement Type exactly matches "NOTE"</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Action: MyCase - Create Note</strong>
                <ul className="ml-6 mt-2 space-y-2 list-disc list-inside">
                  <li>Connect your MyCase account</li>
                  <li>Map fields:
                    <ul className="ml-6 mt-2 space-y-1">
                      <li>Note Body → Note Content</li>
                      <li>Created Date → Note Timestamp</li>
                      <li>Associated Contact → MyCase Contact (Zapier will attempt to match)</li>
                    </ul>
                  </li>
                  <li><strong>Key Logic:</strong> MyCase will first try to attach the note to an associated case. If no case exists, it attaches the note to the contact record instead. This ensures notes are never lost.</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Test the zap</strong> - Add a note to a HubSpot contact and verify it appears in MyCase
              </li>
              <li className="text-muted-foreground">
                <strong>Turn on the zap</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Common Issues and How to Fix Them</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Issue 1: Contact Not Found in MyCase When Creating Case</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> The contact hasn't synced to MyCase yet, or the email address doesn't match exactly.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Add a "Delay" step in Zap 2 (case creation). After the trigger fires, add a 2-minute delay before creating the case. This gives Zap 1 (contact sync) time to complete first.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 2: Notes Attaching to Wrong Case</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Contact is associated with multiple cases in MyCase. Zapier doesn't know which case to attach the note to.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> In MyCase, ensure each contact has a clear "primary case" designation. Or add logic in the zap to identify the most recent open case for that contact.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 3: Duplicate Contacts Created in MyCase</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> Email addresses don't match exactly (e.g., "john@example.com" vs "John@Example.com") or MyCase duplicate detection isn't enabled.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Enable MyCase's duplicate detection in settings. Add a "Formatter by Zapier" step in Zap 1 to lowercase all email addresses before creating contacts.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Issue 4: Zap Stopped Working / Not Triggering</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Cause:</strong> HubSpot or MyCase API credentials expired, or Zapier hit task limits.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Solution:</strong> Check Zapier's task history for error messages. Reconnect HubSpot and MyCase accounts if credentials expired. Upgrade Zapier plan if hitting task limits.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Advanced: Document Automation with Portant</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Once contacts and cases are syncing, you can add a fourth workflow: automatic legal document generation using Portant.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>How it works:</strong>
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">When HubSpot deal moves to "Hired", trigger HubSpot workflow</li>
              <li className="text-muted-foreground">Workflow sends deal/contact data to Portant via integration</li>
              <li className="text-muted-foreground">Portant generates pre-filled legal documents (retainer agreements, engagement letters, etc.) from templates</li>
              <li className="text-muted-foreground">Documents automatically sent to client via email with e-signature request (DocuSign, HelloSign, etc.)</li>
              <li className="text-muted-foreground">Signed documents stored in MyCase and HubSpot</li>
            </ol>
            <p className="text-muted-foreground leading-relaxed mb-12">
              This eliminates manual document creation entirely. No more copying client details into Word templates. No more manual email sends.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">What You Get After Setup</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Zero manual data entry:</strong> Client information flows automatically from HubSpot to MyCase</li>
              <li className="text-muted-foreground"><strong>Full communication history in both systems:</strong> Notes logged in HubSpot appear in MyCase cases</li>
              <li className="text-muted-foreground"><strong>Seamless handoff from marketing to legal:</strong> When a prospect becomes a client, their case is created automatically with all context intact</li>
              <li className="text-muted-foreground"><strong>Better client experience:</strong> No one asks clients to repeat information they already provided</li>
              <li className="text-muted-foreground"><strong>Scalable operations:</strong> Handle more clients without hiring more admin staff</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">When to DIY vs. Hire an Agency</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You can DIY this if:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">You have a simple setup (one practice area, straightforward pipeline)</li>
              <li className="text-muted-foreground">Someone on your team has 2-3 hours to dedicate to setup and testing</li>
              <li className="text-muted-foreground">You're comfortable troubleshooting if something breaks</li>
              <li className="text-muted-foreground">You don't need advanced customization (custom fields, complex routing, multi-office setup)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>You should hire an agency if:</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">You have multiple practice areas with different intake processes</li>
              <li className="text-muted-foreground">You need custom field mapping beyond standard contact/case fields</li>
              <li className="text-muted-foreground">You want document automation (Portant, DocuSign, etc.) built in</li>
              <li className="text-muted-foreground">You need someone to maintain and optimize the integration ongoing</li>
              <li className="text-muted-foreground">You're integrating more than just HubSpot + MyCase (e.g., also Clio Grow, LawPay, etc.)</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Real-World Example</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We built this exact integration for a multi-practice law firm handling criminal defense, estate planning, and personal injury cases. They had over 1,000 cases managed in MyCase but were capturing leads in HubSpot. Staff were manually copying data between systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              After implementing the three-zap setup (contacts, cases, notes) plus Portant document automation, they eliminated manual data entry entirely. When a prospect became a client, their case appeared in MyCase with all communication history intact. Legal documents generated and sent automatically.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The firm scaled from handling 1,000 cases to 1,500+ without adding admin staff. Attorneys saw the full client journey from first contact to case close. Marketing could track which lead sources converted to paying clients.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Next Steps</h2>
            <ol className="space-y-3 mb-6 list-decimal list-inside">
              <li className="text-muted-foreground"><strong>Audit your current process:</strong> Document how client data flows from HubSpot to MyCase today. Identify every manual touchpoint.</li>
              <li className="text-muted-foreground"><strong>Set up Zap 1 (Contact Sync):</strong> Start with the simplest automation first. Test thoroughly with 5-10 contacts.</li>
              <li className="text-muted-foreground"><strong>Add Zap 2 (Case Creation):</strong> Once contact sync is stable, add case creation. Test with non-billable cases first.</li>
              <li className="text-muted-foreground"><strong>Layer in Zap 3 (Notes):</strong> After contacts and cases are working, add notes sync.</li>
              <li className="text-muted-foreground"><strong>Monitor for 2 weeks:</strong> Watch for errors, edge cases, and duplicate records. Adjust as needed.</li>
              <li className="text-muted-foreground"><strong>Add document automation (optional):</strong> Once the core integration is solid, layer in Portant for document generation.</li>
            </ol>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help setting this up?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We've built this integration for multiple law firms. We can set it up, test it, and hand it off working in 2-3 days.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Us About Your Setup
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            Or see the <Link href="/case-studies/legal-services-crm" className="underline hover:text-foreground">full case study</Link> of how we implemented this for a multi-practice firm.
          </p>
        </div>
      </section>
    </div>
  )
}
