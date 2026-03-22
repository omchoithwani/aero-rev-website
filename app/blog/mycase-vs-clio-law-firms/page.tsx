import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, XCircle, DollarSign, Scale } from "lucide-react"

export const metadata = {
  title: "MyCase vs Clio for Solo and Small Law Firms (2026 Comparison)",
  description: "Honest comparison of MyCase and Clio for solo attorneys and small firms. Real pricing, trust accounting differences, and which platform saves you $1,500-$2,000/year.",
  keywords: "MyCase vs Clio, law firm software, legal practice management, MyCase pricing, Clio pricing",
}

export default function MyCaseVsClioLawFirms() {
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
            Legal Software Comparison • Updated March 2026
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            MyCase vs Clio for Solo and Small Law Firms
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Honest comparison from someone who works inside both platforms daily. Real pricing, trust accounting differences, and which platform actually saves you money.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-foreground" />
              <span>True cost comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="h-4 w-4 text-foreground" />
              <span>Trust accounting analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Real user feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio is the stronger platform overall, especially for firms that care about trust accounting accuracy</a> and clean financial reporting. <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase wins for solo attorneys who need simplicity</a> and is perfectly fine for solo practitioners who want something straightforward.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">For a three-attorney firm, MyCase typically costs $1,500-$2,000 less annually</a> when comparing similar feature sets.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">Choose MyCase if:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Solo or 1-5 attorney firm</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Budget-conscious</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Want straightforward features</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Basic trust accounting is fine</li>
              </ul>
            </div>
            <div className="p-6 bg-card border border-border">
              <h3 className="font-semibold text-foreground mb-3">Choose Clio if:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Need robust trust accounting</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Planning to grow beyond 5 attorneys</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Need extensive integrations (200+)</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-foreground flex-shrink-0 mt-0.5" /> Want advanced automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Pricing Breakdown (2026)</h2>
            
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">MyCase Pricing</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="https://www.softwareadvice.com/legal/clio-legal-profile/vs/mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase offers three pricing tiers</a>:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Basic:</strong> $39/user/month (annual) or $49/month (monthly) - Case management, calendaring, unlimited document storage, conflict checks</li>
              <li className="text-muted-foreground"><strong>Pro:</strong> $89/user/month (annual) or $99/month (monthly) - Adds client portal, e-signatures, intake forms, legal CRM</li>
              <li className="text-muted-foreground"><strong>Advanced:</strong> $109/user/month (annual) or $119/month (monthly) - Adds advanced document management, full-text search, two-way texting</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Clio Pricing</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="https://www.softwareadvice.com/legal/clio-legal-profile/vs/mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio offers four pricing tiers</a>:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>EasyStart:</strong> $49/user/month (annual) or $59/month (monthly) - Basic case management, mobile apps, invoicing, trust account reporting</li>
              <li className="text-muted-foreground"><strong>Essentials:</strong> $89/user/month (annual) or $99/month (monthly) - Adds custom fields, accounting integrations, document templates, text messaging</li>
              <li className="text-muted-foreground"><strong>Advanced:</strong> $119/user/month (annual) or $129/month (monthly) - Adds workflow automation, custom permissions, advanced reporting</li>
              <li className="text-muted-foreground"><strong>Complete:</strong> $149/user/month (annual) - Bundles Clio Manage + Clio Grow (client intake/CRM)</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Real Cost Comparison (3-Attorney Firm)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="border border-border p-3 text-left">Platform</th>
                    <th className="border border-border p-3 text-left">Comparable Plan</th>
                    <th className="border border-border p-3 text-left">Annual Cost (3 users)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">MyCase Pro</td>
                    <td className="border border-border p-3">Full features, client portal, e-signatures</td>
                    <td className="border border-border p-3">$3,204</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Clio Essentials</td>
                    <td className="border border-border p-3">Similar feature set to MyCase Pro</td>
                    <td className="border border-border p-3">$3,204</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Clio Advanced</td>
                    <td className="border border-border p-3">Workflow automation, advanced features</td>
                    <td className="border border-border p-3">$4,284</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-border p-3 text-foreground" colSpan={2}>Savings with MyCase Pro vs Clio Advanced</td>
                    <td className="border border-border p-3 text-foreground">$1,080/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-12 text-sm">
              <em>Source: <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">AI for Law Firms analysis</a>, pricing as of March 2026. <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pricing is notably simpler with MyCase</a>—what you see is closer to what you pay.</em>
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">The Trust Accounting Difference (This Matters)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">This is where it matters most for law firms, and it's where the biggest difference between the two platforms shows up</a>.
            </p>
            
            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Clio's Trust Accounting</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio has the edge here. Its trust accounting features are more detailed, with better per-matter tracking and reporting that supports three-way reconciliations</a>. For firms that need to produce trust account reports for state bar compliance, Clio's tools are more comprehensive.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio provides the reports needed to perform a three-way reconciliation</a> between your trust ledger, bank statement, and individual client balances.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">MyCase's Trust Accounting</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase handles basic trust accounting but has less granular reporting</a>. The system works fine for straightforward trust account needs, but you may need to export data and build reconciliations manually or use QuickBooks alongside it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Bottom line:</strong> If you handle complex trust accounting with multiple client trust accounts and need detailed state bar compliance reports, Clio is the safer choice. If your trust accounting is straightforward, MyCase handles the basics fine.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Integrations: Clio Dominates Here</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio offers connections to over 200 third-party tools</a> including email clients, document automation software, legal research platforms, accounting systems, and specialized practice management tools.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase does not have Clio's 250+ integrations</a>. Common complaints include:
            </p>
            <ul className="space-y-3 mb-6 list-disc list-inside">
              <li className="text-muted-foreground">"No VOIP integration with RingCentral. That was a dealbreaker for our firm."</li>
              <li className="text-muted-foreground">"Wish it integrated with more document automation tools."</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>When this matters:</strong> If your firm relies on 5+ external tools (document automation, VoIP, accounting software, marketing platforms), Clio's integration ecosystem is worth the price difference. If your workflow is self-contained within the practice management software, MyCase's limited integrations won't hurt you.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Billing & Payments: MyCase Automates More</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Payment processing through MyCase provides next-day access to funds</a> from credit cards, debit cards, and eChecks. You get your money faster, which improves cash flow for smaller firms.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio needs more manual involvement in billing processes</a>. You need to actively start and stop timers for time tracking. Expense tracking exists but needs hands-on management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The benefit? <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio supports multi-currency billing, complex trust accounting, and detailed billing scenarios</a> that some specialized practices need.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">For straightforward hourly or flat-fee billing, MyCase's automation saves hours each week</a>. A solo practitioner spending 10 hours monthly on billing administration can cut that time in half or more.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Ease of Use: MyCase Wins on Simplicity</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://briefpoint.ai/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase keeps task management more straightforward with a user-friendly interface</a> that makes it easy to create tasks, assign responsibility, and track progress without much setup.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.selecthub.com/legal-software/mycase-vs-clio/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Users appreciate MyCase's intuitive interface</a> and comprehensive features. All users who reviewed ease of use found the UI intuitive and easy to pick up.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Clio offers more customization and flexibility, but <a href="https://briefpoint.ai/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">the trade-off is that it can take a little time to get comfortable with all the options</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Real-world impact:</strong> <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Attorneys switch from Clio to MyCase because Clio felt like too much. And attorneys switch from MyCase to Clio because they outgrew it</a>. Both are valid moves depending on where your firm is right now.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Document Management: Clio Has the Edge</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio connects with over 200 third-party applications through its document management system</a>. You can set up automated workflows, create rules that trigger specific actions, and customize how documents display across your team.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The system works well for firms managing complex litigation with thousands of documents per case. You can automate repetitive tasks like document filing, naming conventions, and client notifications.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              MyCase includes document storage and basic organization, but lacks the advanced automation and extensive third-party integrations that Clio offers. For small firms with straightforward document needs, this isn't a dealbreaker.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Client Intake: Different Approaches</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Clio Grow:</strong> <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio Grow is a separate add-on that provides sophisticated lead tracking and client intake automation</a>. It tracks marketing sources, lead conversion rates, and automates follow-up. This is powerful for firms actively marketing and tracking ROI on lead sources.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>MyCase intake:</strong> <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase includes basic intake forms in standard pricing</a>. You collect client information, automatically create new cases, and move forward. The system doesn't track leads or marketing sources, but it handles the essential task of getting client information into your system efficiently.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <a href="https://aiforlawfirms.org/clio-vs-mycase/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Small firms relying primarily on referrals don't typically need extensive lead tracking</a>. You just need a simple way to collect initial information and start cases quickly.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What Users Actually Say</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">MyCase User Feedback</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <a href="https://www.selecthub.com/legal-software/mycase-vs-clio/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">From actual user reviews</a>:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Pros:</strong> 83% satisfied with customer support, 73% say basic functions perform satisfactorily, 71% say task management is easier</li>
              <li className="text-muted-foreground"><strong>Cons:</strong> 100% of users reviewing speed say loading is slow, 60% say integrations are limited and buggy, 56% say reports lack customizability</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Clio User Feedback</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Common themes from user reviews:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Pros:</strong> Excellent trust accounting, extensive integrations, scales well as firms grow, strong automation capabilities</li>
              <li className="text-muted-foreground"><strong>Cons:</strong> Steeper learning curve, can feel overwhelming for solo practitioners, higher cost when adding features</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Real Decision Framework</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Choose MyCase if:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>You're a solo or small firm (1-5 attorneys).</strong> <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">MyCase positions itself as the "easy button" for law firm software</a>—and that positioning is accurate.
              </li>
              <li className="text-muted-foreground">
                <strong>Budget is a primary concern.</strong> You'll save $1,500-$2,000/year compared to Clio for similar features.
              </li>
              <li className="text-muted-foreground">
                <strong>Your workflow is self-contained.</strong> You don't need extensive third-party integrations.
              </li>
              <li className="text-muted-foreground">
                <strong>You want simple, straightforward software.</strong> <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">If your goal is "install it and start working," MyCase delivers better than anyone</a>.
              </li>
              <li className="text-muted-foreground">
                <strong>Basic trust accounting is sufficient.</strong> You don't need complex three-way reconciliation reporting.
              </li>
            </ol>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Choose Clio if:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Trust accounting accuracy is critical.</strong> <a href="https://www.accountingatelier.com/blog/clio-vs-mycase" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">For firms that need to produce trust account reports for state bar compliance, Clio's tools are more comprehensive</a>.
              </li>
              <li className="text-muted-foreground">
                <strong>You're planning to grow.</strong> <a href="https://mylegalacademy.com/kb/case-management-software-comparison-2026" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Clio dominates mid-size general practice firms</a> for a reason—it scales well.
              </li>
              <li className="text-muted-foreground">
                <strong>You need extensive integrations.</strong> Your firm relies on 5+ external tools that need to connect seamlessly.
              </li>
              <li className="text-muted-foreground">
                <strong>You want advanced automation.</strong> Document workflows, automated billing rules, complex conditional logic.
              </li>
              <li className="text-muted-foreground">
                <strong>You handle complex billing scenarios.</strong> Multi-currency, detailed expense tracking, or specialized billing arrangements.
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Integration with HubSpot (Marketing/Client Intake)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Both MyCase and Clio can integrate with HubSpot for marketing automation and client intake. We've built integrations for law firms using both platforms:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>MyCase + HubSpot:</strong> Via Zapier. When a HubSpot deal moves to "Hired", automatically create a case in MyCase and sync contact data. See our <Link href="/resources/guides/hubspot-mycase-integration-law-firms" className="underline hover:text-foreground">complete integration guide</Link>.</li>
              <li className="text-muted-foreground"><strong>Clio + HubSpot:</strong> Similar Zapier workflow. Clio's more robust API makes data syncing slightly cleaner, but both work well.</li>
            </ul>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help integrating your legal practice management software?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We build HubSpot + MyCase and HubSpot + Clio integrations for law firms. We'll sync your client intake, automate case creation, and eliminate manual data entry.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to Us About Your Integration
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            See the <Link href="/resources/guides/hubspot-mycase-integration-law-firms" className="underline hover:text-foreground">complete HubSpot + MyCase integration guide</Link> or the <Link href="/case-studies/legal-services-crm" className="underline hover:text-foreground">full case study</Link> of how we implemented this.
          </p>
        </div>
      </section>
    </div>
  )
}
