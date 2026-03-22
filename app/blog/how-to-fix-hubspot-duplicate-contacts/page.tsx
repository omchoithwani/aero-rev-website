import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Zap } from "lucide-react"

export const metadata = {
  title: "How to Fix HubSpot Duplicate Contacts (3 Methods) - Step-by-Step Guide",
  description: "3 proven methods to find and merge duplicate contacts in HubSpot. Manual merge, bulk cleanup, and prevention strategies. Includes free tier solutions.",
  keywords: "HubSpot duplicates, merge contacts HubSpot, deduplicate HubSpot, fix duplicate contacts",
}

export default function FixHubSpotDuplicateContacts() {
  return (
    <div className="flex flex-col">
      {/* Back Link */}
      <div className="pt-32 pb-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-block px-4 py-2 bg-secondary/50 text-sm font-medium mb-6">
            How-To Guide • Updated March 2026
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            How to Fix HubSpot Duplicate Contacts (3 Methods)
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step instructions for finding and merging duplicate contacts in HubSpot. Three methods: manual merge for &lt;20 duplicates, native Manage Duplicates tool for 2,000-10,000 records, and automated solutions for ongoing cleanup.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Free tier compatible</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-foreground" />
              <span>Works immediately</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-foreground" />
              <span>Prevents data loss</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why This Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Duplicate contacts break everything in your CRM:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-muted-foreground"><strong>Workflows enroll contacts multiple times:</strong> Same person gets 2 emails for every campaign</li>
            <li className="text-muted-foreground"><strong>Reports are wrong:</strong> Your dashboard shows 5,000 contacts but you only have 3,200 real people</li>
            <li className="text-muted-foreground"><strong>Sales reps call the same person twice:</strong> Because they have 2 records in the pipeline</li>
            <li className="text-muted-foreground"><strong>List limits hit faster:</strong> Marketing contact limits are based on your tier. Duplicates inflate your contact count, pushing you toward tier upgrades</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Duplicates creep in from form submissions, CSV imports, integrations, manual entry, and they quietly wreck your reporting, your automations, and your team's trust in the CRM</a>.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Method 1: Manual Merge (For Small Cleanups)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Use when:</strong> You have fewer than 20 duplicate pairs to merge, or you spot duplicates while working in the CRM.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Time required:</strong> 2-3 minutes per duplicate pair
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot tier:</strong> Works on Free tier and above
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Step-by-Step Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Navigate to the contact record you want to keep as primary</strong>
                <p className="ml-6 mt-2">Go to Contacts {'>'} All Contacts, then click on the contact record with the most complete information (usually the one with the earliest creation date but most recent activity).</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Actions" in the top-right corner</strong>
                <p className="ml-6 mt-2">A dropdown menu will appear.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Select "Merge"</strong>
                <p className="ml-6 mt-2">HubSpot will open a search box.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Search for the duplicate contact</strong>
                <p className="ml-6 mt-2">Type the contact's name or email to find the duplicate record.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Review the merge preview</strong>
                <p className="ml-6 mt-2">HubSpot shows you a side-by-side comparison of both records. <a href="https://knowledge.hubspot.com/records/merge-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">The remaining record combines activities, associations, and most property values from both records</a>.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Set properties to review" to compare all fields</strong>
                <p className="ml-6 mt-2">This shows you all contact properties side-by-side. Pay special attention to:</p>
                <ul className="ml-12 mt-2 space-y-1 list-disc list-inside">
                  <li>Email addresses (both will be preserved)</li>
                  <li>Lifecycle stage</li>
                  <li>Lead status</li>
                  <li>Contact owner</li>
                  <li>Deal associations</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Select the record to keep, or cherry-pick properties</strong>
                <p className="ml-6 mt-2">You can either keep all data from the primary record, or select specific property values from each record.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Merge"</strong>
                <p className="ml-6 mt-2"><a href="https://knowledge.hubspot.com/records/merge-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Once you've merged two records, it is not possible to unmerge them</a>. Make sure you're merging the right contacts.</p>
              </li>
            </ol>

            <div className="p-6 bg-secondary/30 border-l-4 border-foreground mb-12">
              <p className="text-sm font-semibold text-foreground mb-2">Pro Tip: Which record to keep?</p>
              <p className="text-sm text-muted-foreground">
                <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pick the one with the most recent engagement and the earliest creation date</a>. You want the longest history with the most current information.
              </p>
            </div>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">What Happens When You Merge:</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Email addresses:</strong> <a href="https://knowledge.hubspot.com/records/merge-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">The email address of the primary contact is maintained as the primary email address, the secondary contact's email address will be added as a secondary email address</a></li>
              <li className="text-muted-foreground"><strong>Activity timeline:</strong> All emails, meetings, calls, notes from both records merge into one timeline</li>
              <li className="text-muted-foreground"><strong>Deal associations:</strong> If both contacts are associated with deals, all deal associations are preserved</li>
              <li className="text-muted-foreground"><strong>List memberships:</strong> The merged contact appears in all lists both contacts were part of</li>
              <li className="text-muted-foreground"><strong>Workflow enrollments:</strong> Active workflow enrollments from both contacts are preserved</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Method 2: Native Manage Duplicates Tool (Bulk Cleanup)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Use when:</strong> You have 20+ duplicate pairs to clean up.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Time required:</strong> 30-60 minutes for initial cleanup
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot tier:</strong> Professional or Enterprise (limits: 2,000 duplicates on Pro, 10,000 on Enterprise)
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Step-by-Step Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Contacts {'>'} All Contacts</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Actions" dropdown</strong>
                <p className="ml-6 mt-2">Located above the contacts table.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Select "Manage duplicates"</strong>
                <p className="ml-6 mt-2"><a href="https://community.hubspot.com/t5/Lists-Lead-Scoring-Workflows/Manage-duplicate-contacts/m-p/400634" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">This only works for admin and users with full access on CRM settings</a>. If the user has either a "team only or owned only" access, this tool is disabled.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Review the duplicate pairs HubSpot identified</strong>
                <p className="ml-6 mt-2">HubSpot shows you a list of potential duplicates based on matching email addresses and similar names.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>For each pair, click "Review"</strong>
                <p className="ml-6 mt-2">This opens a side-by-side comparison.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Choose which record to keep, then click "Merge"</strong>
                <p className="ml-6 mt-2">Or, if the records aren't actually duplicates, click "Reject" to remove this pair from the list.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>For bulk merging: Select checkboxes next to multiple pairs, then click "Merge all"</strong>
                <p className="ml-6 mt-2">This merges all selected pairs at once. Use with caution—make sure they're all legitimate duplicates.</p>
              </li>
            </ol>

            <div className="p-6 bg-secondary/30 border-l-4 border-foreground mb-12">
              <p className="text-sm font-semibold text-foreground mb-2">Limitation: Caps at 2,000-10,000 results</p>
              <p className="text-sm text-muted-foreground">
                <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot's native Manage Duplicates tool is capped at 2,000-10,000 results depending on your plan and can't be customized</a>. If you have more duplicates than this, you'll need Method 3.
              </p>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Method 3: Automated Deduplication (For Ongoing Prevention)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Use when:</strong> You have thousands of duplicates, or you want to prevent duplicates from forming in the first place.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Time required:</strong> 2-3 hours for initial setup, then automatic ongoing
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot tier:</strong> Works on any tier (requires third-party app)
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Option A: Use Koalify (Recommended for Most Teams)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Koalify is the best HubSpot-native app for deduplication: custom matching rules, bulk merge via workflows, and it works across contacts, companies, deals, and custom objects</a>.
            </p>

            <h4 className="font-semibold text-foreground mb-3">Why Koalify:</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Fully native:</strong> <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">CRM cards for quick action right where you're already working</a></li>
              <li className="text-muted-foreground"><strong>Custom matching rules:</strong> Match by name, email, phone, or any property combination</li>
              <li className="text-muted-foreground"><strong>Workflow integration:</strong> Merge duplicates automatically when contacts are created</li>
              <li className="text-muted-foreground"><strong>Works beyond contacts:</strong> <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Handles companies, deals, tickets, and even custom objects</a></li>
              <li className="text-muted-foreground"><strong>Trusted:</strong> <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">4,000+ installs and a perfect 5.0 rating from 100+ reviews</a></li>
            </ul>

            <h4 className="font-semibold text-foreground mb-3">Setup:</h4>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Install Koalify from HubSpot App Marketplace</li>
              <li className="text-muted-foreground">Define your matching rules (e.g., "Match contacts with same email" or "Match companies with same domain + same city")</li>
              <li className="text-muted-foreground">Set merge priority (which record to keep when duplicates are found)</li>
              <li className="text-muted-foreground">Enable auto-merge or manual review</li>
              <li className="text-muted-foreground">Schedule daily/weekly scans</li>
            </ol>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Option B: Use Insycle (For Advanced Data Operations)</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.insycle.com/hubspot/deduplication/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Insycle allows you to match duplicates using any field in your database as a matching field, with deep data retention settings at the field-level</a>.
            </p>

            <h4 className="font-semibold text-foreground mb-3">Why Insycle:</h4>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Field-level control:</strong> Choose which property values to keep when merging</li>
              <li className="text-muted-foreground"><strong>Advanced matching:</strong> Match by any combination of fields (not just email)</li>
              <li className="text-muted-foreground"><strong>Bulk operations:</strong> <a href="https://www.insycle.com/hubspot/deduplication/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Merge duplicates in bulk or on a case-by-case basis</a></li>
              <li className="text-muted-foreground"><strong>Preview before merge:</strong> <a href="https://www.insycle.com/hubspot/deduplication/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Review HubSpot contact, company, and deal deduplication changes before they go live</a></li>
              <li className="text-muted-foreground"><strong>Scheduled automation:</strong> <a href="https://www.insycle.com/hubspot/deduplication/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Schedule automated deduplication hourly, daily, weekly, or monthly</a></li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Tradeoff:</strong> More powerful than Koalify, but steeper learning curve and takes you outside the HubSpot interface.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Prevention Strategies (Stop Duplicates Before They Start)</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">1. Use Email as the Primary Identifier on Forms</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.hublead.io/blog/hubspot-duplicate-contacts" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">When someone submits a form on your site, HubSpot checks their browser cookie against existing contacts</a>. If the submission comes from the same browser, HubSpot updates the existing record instead of creating a new one.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Action:</strong> Make sure every form includes an email field. <a href="https://knowledge.hubspot.com/records/deduplication-of-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">When a new contact is added, HubSpot will look for a matching value in the Email property</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">2. Use Record IDs When Importing Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://knowledge.hubspot.com/records/deduplication-of-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Record IDs can be used to manually deduplicate contacts, companies, deals, tickets, products, and custom objects</a>.
            </p>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">Export your contacts with Record ID included</li>
              <li className="text-muted-foreground">Use VLOOKUP in Excel/Sheets to match new data to existing Record IDs</li>
              <li className="text-muted-foreground">Import with Record ID column—HubSpot will update existing records instead of creating duplicates</li>
            </ol>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">3. Turn Off "Always Create New Contact" in Form Settings</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.default.com/post/hubspot-duplicates" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">If you want each form submission to create a new contact, you can select Always create new contact for new email in your form options</a>. This overrides token-based deduplication. Turn this OFF unless you have a specific reason to create duplicates.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">4. Create Custom Properties That Require Unique Values</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <a href="https://www.default.com/post/hubspot-duplicates" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot enables you to create up to 10 custom properties that require unique values</a>. Examples: order numbers, user IDs, trial IDs. These properties flag potential duplicates.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Common Mistakes to Avoid</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Mistake 1: Merging Too Quickly</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://knowledge.hubspot.com/records/merge-records" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Once you've merged two records, it is not possible to unmerge them</a>. Always review the side-by-side comparison before clicking merge.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Mistake 2: Not Checking Deal Associations</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              If one contact is associated with a $50K deal and the other with a $5K deal, make sure both deals stay associated after the merge. Check the "Associations" section in the merge preview.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Mistake 3: Ignoring Lifecycle Stage Conflicts</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
              If one duplicate is "Lead" and the other is "Customer," you probably want to keep "Customer." Check lifecycle stage in the merge preview and choose the more advanced stage.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help cleaning up your HubSpot database?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We run HubSpot audits and data cleanup for B2B companies. We'll find your duplicates, merge them properly, and set up prevention systems so they don't come back.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free HubSpot Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
