import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, AlertTriangle, Mail } from "lucide-react"

export const metadata = {
  title: "How to Set Up HubSpot Email Sequences That Don't Land in Spam (2026 Guide)",
  description: "Step-by-step instructions to improve HubSpot sequence deliverability. Turn off tracking pixels, authenticate your domain, and avoid spam filters. Works on Starter tier.",
  keywords: "HubSpot sequences spam, email deliverability, HubSpot sender score, avoid spam folder",
}

export default function HubSpotSequencesAvoidSpam() {
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
            How to Set Up HubSpot Email Sequences That Don't Land in Spam
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Step-by-step instructions to improve HubSpot sequence deliverability. Authenticate your domain, turn off tracking pixels, suppress unengaged contacts, and avoid the 6 most common spam triggers.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Works on Starter tier</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-foreground" />
              <span>Protects sender reputation</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-foreground" />
              <span>Prevents account warnings</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why HubSpot Sequences Land in Spam</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a href="https://woodpecker.co/blog/hubspot-email-deliverability/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Even when you follow all the classic best practices in HubSpot, some emails still end up blocked, buried in the spam folder, or quietly ignored</a>.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The brutal truth: <a href="https://knowledge.hubspot.com/marketing-email/understand-email-sending-in-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">"Delivered" doesn't mean inboxed</a>. Mailbox providers can silently filter or downgrade your emails, and your ESP dashboard won't always show it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            <strong>Common symptoms:</strong> Open rates drop from 40% to 12%, replies disappear, contacts say they never got your email, and you start seeing HubSpot account warnings about spam complaints.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 1: Authenticate Your Email Domain (Required)</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Why this matters:</strong> <a href="https://www.salesforge.ai/blog/hubspot-email-deliverability" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Email providers only trust senders with proper authentication. Missing or incorrect SPF, DKIM, or DMARC means your emails may be flagged as suspicious</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Time required:</strong> 20-30 minutes
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot tier:</strong> Starter and above (requires IT/DNS access)
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">What You're Setting Up:</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>SPF (Sender Policy Framework):</strong> Tells email providers which servers can send email on behalf of your domain</li>
              <li className="text-muted-foreground"><strong>DKIM (DomainKeys Identified Mail):</strong> Cryptographic signature that proves the email wasn't tampered with</li>
              <li className="text-muted-foreground"><strong>DMARC (Domain-based Message Authentication):</strong> Tells providers what to do with unauthenticated emails from your domain</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Step-by-Step Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>In HubSpot, go to Settings {'>'} Marketing {'>'} Email</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Connect an email sending domain"</strong>
                <p className="ml-6 mt-2">You'll see instructions for adding DNS records.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Copy the DNS records HubSpot provides</strong>
                <p className="ml-6 mt-2">You'll get 2-3 records: typically CNAME records for DKIM and TXT records for SPF.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Log into your DNS provider (GoDaddy, Cloudflare, Namecheap, etc.)</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Add the records exactly as HubSpot shows them</strong>
                <p className="ml-6 mt-2">Don't modify the values. Copy-paste exactly.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Wait 15-60 minutes for DNS propagation</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Return to HubSpot and click "Verify"</strong>
                <p className="ml-6 mt-2">HubSpot will check if the records are live.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Set up DMARC (optional but recommended)</strong>
                <p className="ml-6 mt-2">Add a TXT record to your DNS: `_dmarc.yourdomain.com` with value `v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com`</p>
              </li>
            </ol>

            <div className="p-6 bg-secondary/30 border-l-4 border-foreground mb-12">
              <p className="text-sm font-semibold text-foreground mb-2">Critical: Use a Subdomain for Sequences</p>
              <p className="text-sm text-muted-foreground">
                Don't send sequences from your main domain (yourdomain.com). Use a subdomain like `mail.yourdomain.com` or `outreach.yourdomain.com`. This protects your main domain's reputation if sequence deliverability tanks.
              </p>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 2: Turn Off Tracking Pixels and Click Tracking</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Why this matters:</strong> <a href="https://community.hubspot.com/t5/Sales-Email/Lower-Engagement-in-HubSpot-Sequences-Compared-to-Manual-Sending/m-p/1169614" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Tracking pixels can trigger promotional or spam filtering. Click tracking replaces URLs with HubSpot redirect links, which look suspicious to spam filters</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Tradeoff:</strong> You won't see open rates or click rates in HubSpot, but deliverability improves significantly. You'll still see replies.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>In HubSpot, go to Settings {'>'} Sales {'>'} Sequences</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Scroll to "Email tracking defaults"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Turn OFF "Track email opens"</strong>
                <p className="ml-6 mt-2">This removes the tracking pixel.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Turn OFF "Track email clicks"</strong>
                <p className="ml-6 mt-2">This stops HubSpot from replacing your URLs.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Save settings</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 3: Remove Unsubscribe Links from Sequences</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Why this matters:</strong> <a href="https://community.hubspot.com/t5/Sales-Email/Lower-Engagement-in-HubSpot-Sequences-Compared-to-Manual-Sending/m-p/1169614" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Unsubscribe links make sequences look like marketing emails, which triggers spam filters</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Legal note:</strong> Sequences are 1:1 sales emails, not bulk marketing. You don't legally need an unsubscribe link. Contacts can just reply "not interested."
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Settings {'>'} Sales {'>'} Sequences</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Under "Email footer," turn OFF "Include unsubscribe link"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Save settings</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 4: Suppress Unengaged Contacts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Why this matters:</strong> <a href="https://knowledge.hubspot.com/marketing-email/email-deliverability-best-practices" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Graymail is email that sits unopened in recipients' inbox, which makes you look like a sender who's sending spam</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.woodpecker.co/blog/hubspot-email-deliverability/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Email providers track how people interact with your emails. Low open rates mean they assume your emails aren't valuable. Too many bounces drops your sender reputation. Unsubscribes or spam complaints get your emails flagged</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Settings {'>'} Marketing {'>'} Email</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Turn ON "Graymail suppression"</strong>
                <p className="ml-6 mt-2"><a href="https://knowledge.hubspot.com/marketing-email/email-deliverability-best-practices" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">This feature uses the Sends since last engagement contact property to automatically exclude contacts that aren't engaging with your emails</a>.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Create a "Cold Contacts" suppression list</strong>
                <p className="ml-6 mt-2">Go to Contacts {'>'} Lists {'>'} Create list</p>
                <p className="ml-6 mt-2">Add filter: "Last email engagement date is unknown" OR "Last email engagement date is more than 90 days ago"</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Exclude this list from all sequences</strong>
                <p className="ml-6 mt-2">When enrolling contacts in sequences, use "Exclude contacts from list" and select your Cold Contacts list.</p>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 5: Write Sequences That Look Like 1:1 Emails</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://community.hubspot.com/t5/Sales-Email/Lower-Engagement-in-HubSpot-Sequences-Compared-to-Manual-Sending/m-p/1169614" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Spam filters detect patterns. Vary the email content across sequence steps, including subject lines, greetings, and closing lines, to reduce the appearance of automation</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Best Practices:</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Use plain text formatting:</strong> No images, no fancy formatting, no logos. Just text.</li>
              <li className="text-muted-foreground"><strong>Keep it short:</strong> 50-150 words max. Long emails look like marketing.</li>
              <li className="text-muted-foreground"><strong>Vary subject lines:</strong> Don't use the same subject for all 500 contacts. Use personalization tokens: `Quick question, {{contact.firstname}}`</li>
              <li className="text-muted-foreground"><strong>Minimize links:</strong> <a href="https://community.hubspot.com/t5/Sales-Email/Lower-Engagement-in-HubSpot-Sequences-Compared-to-Manual-Sending/m-p/1169614" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Stick to plain text where possible for better inbox placement</a>. If you need a link, use one, max two.</li>
              <li className="text-muted-foreground"><strong>No attachments:</strong> Attachments trigger spam filters. Link to Google Drive or Dropbox instead.</li>
              <li className="text-muted-foreground"><strong>Personalize beyond first name:</strong> <a href="https://knowledge.hubspot.com/sequences/understand-your-sequences-sender-score" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Add content relevant to the recipient's business or industry, such as a recent blog post or case study</a>.</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 6: Verify Your Contact List Before Sending</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.allegrow.co/knowledge-base/hubspot-cold-email-deliverability" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">List quality is the biggest lever for HubSpot deliverability. Before any import, remove invalids, surface spam traps and likely complainers. This prevents hard bounces and complaints, the two fastest ways to tank domain reputation</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">What to Remove:</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Invalid emails:</strong> Typos, fake addresses, role emails (info@, noreply@)</li>
              <li className="text-muted-foreground"><strong>Hard bounces:</strong> Emails that bounced in previous sends</li>
              <li className="text-muted-foreground"><strong>Catch-all domains:</strong> These often bounce or go to spam traps</li>
              <li className="text-muted-foreground"><strong>Purchased lists:</strong> Never send to purchased or rented lists. <a href="https://community.hubspot.com/t5/Email-Deliverability/Using-Hubspot-sequences-for-cold-email-prospecting/m-p/27678" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot tools cannot be used to email cold contacts. This is against the Acceptable Use Policy</a>.</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">How to Clean Your List:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Export your contact list from HubSpot</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Use an email verification tool (NeverBounce, ZeroBounce, or BriteVerify)</strong>
                <p className="ml-6 mt-2">Upload your CSV, run verification.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Download the cleaned list</strong>
                <p className="ml-6 mt-2">The tool will mark each email as valid, invalid, or risky.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Import the verification results back into HubSpot</strong>
                <p className="ml-6 mt-2">Add a custom property "Email Verification Status"</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Create a suppression list of invalid/risky emails</strong>
                <p className="ml-6 mt-2">Filter: Email Verification Status is "Invalid" or "Risky"</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Exclude this list from all sequences</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Step 7: Monitor Your Sender Score</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="https://knowledge.hubspot.com/sequences/understand-your-sequences-sender-score" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">The sequences sender score measures the quality and effectiveness of your sequences emails. The sender score is calculated using the reply rate and bounce rate of the emails in the sequence</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Good targets:</strong> Reply rate between 7-13%, bounce rate below 3%.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">How to Check Your Sender Score:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Reporting {'>'} Reports</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Create report"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Under "Start with help," click "Template report library"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Search for "sequence sender score"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click the report to view your score</strong>
                <p className="ml-6 mt-2">You need at least 100 ended sequence enrollments for a score to calculate.</p>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Common Mistakes That Kill Deliverability</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Mistake 1: Sending to Cold Lists</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://community.hubspot.com/t5/Email-Deliverability/Using-Hubspot-sequences-for-cold-email-prospecting/m-p/27678" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">By "cold outreach" we are referring to people who have not given you permission to deliver to their inbox. Putting email in there anyway will likely lead to spam reports, unsubscribes. More long term this practice will result in increased spam foldering, and increased soft bounces for your entire network</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Mistake 2: Sending Too Much, Too Fast</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://woodpecker.co/blog/hubspot-email-deliverability/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Sequence messaging often hits a 500-1,000/day ceiling due to email providers like Gmail/Outlook restrictions</a>. Don't send 1,000 emails on day 1. Warm up your domain by starting at 50/day, then 100/day, then 200/day over 2 weeks.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Mistake 3: Using Spammy Subject Lines</h3>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Avoid: "FREE," "ACT NOW," "LIMITED TIME," all caps, excessive punctuation (!!!), dollar signs ($$$). These are spam triggers.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help fixing your HubSpot deliverability?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We audit HubSpot accounts, fix deliverability issues, and set up sequences that actually reach inboxes. We'll get your sender score above 7% reply rate.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Deliverability Audit
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
