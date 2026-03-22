import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, DollarSign, Zap } from "lucide-react"

export const metadata = {
  title: "HubSpot vs Pipedrive for Small B2B Teams (2026 Comparison)",
  description: "Detailed HubSpot vs Pipedrive comparison for small sales teams. Real pricing ($2,940 vs $6,000/year), setup time, and which CRM actually helps reps close deals.",
  keywords: "HubSpot vs Pipedrive, sales CRM comparison, B2B CRM, Pipedrive pricing, HubSpot pricing",
}

export default function HubSpotVsPipedriveSmallTeams() {
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
            CRM Comparison • Updated March 2026
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
            HubSpot vs Pipedrive for Small B2B Teams
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Honest comparison of the two most popular CRMs for small sales teams. Real pricing ($2,940 vs $6,000/year for 5 users), setup time, and which one actually helps reps close deals.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-foreground" />
              <span>Real cost comparison</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-foreground" />
              <span>Setup time analysis</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Sales rep perspective</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Quick Answer</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">You're not choosing between two CRMs—you're choosing between a focused sales tool and a broad platform that includes a sales tool</a>.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="text-muted-foreground"><strong>Choose Pipedrive if:</strong> Your team is purely sales-focused (outbound, cold email, cold calls). You want a simple pipeline view without marketing features you don't use.</li>
            <li className="text-muted-foreground"><strong>Choose HubSpot if:</strong> You run inbound marketing (blog, SEO, paid ads) and want sales + marketing unified. You need email campaigns, landing pages, and CRM in one platform.</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">A 5-person sales team on Pipedrive Professional pays $2,940/year. The same team on HubSpot Sales Hub Professional pays $6,000/year</a>—more than double.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Core Difference</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive is a sales tool built around a single idea: move deals through a pipeline until they close</a>. The pipeline view is not a feature—it is the whole product.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot is a platform. The CRM is one module inside a larger marketing, sales, and service hub</a>. It connects to email marketing, ad tracking, landing pages, help desk, and content management. The CRM is useful on its own, but it's designed to be the center of something bigger.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Pricing Breakdown (2026)</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Pipedrive Pricing</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Essential:</strong> $14/user/month (billed annually) - Basic pipeline, email integration, 2-way email sync</li>
              <li className="text-muted-foreground"><strong>Advanced:</strong> $34/user/month - Adds email sequences, meeting scheduler, automation</li>
              <li className="text-muted-foreground"><strong>Professional:</strong> $49/user/month - Adds advanced reporting, forecasting, revenue projections</li>
              <li className="text-muted-foreground"><strong>Power:</strong> $64/user/month - Adds project management, custom fields</li>
              <li className="text-muted-foreground"><strong>Enterprise:</strong> $99/user/month - Unlimited customization, advanced permissions</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">HubSpot Pricing</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Free CRM:</strong> $0 - Unlimited users, basic pipelines, email tracking, meeting scheduler</li>
              <li className="text-muted-foreground"><strong>Starter:</strong> $20/user/month - Adds sequences, simple automation</li>
              <li className="text-muted-foreground"><strong>Professional:</strong> $100/user/month - Full automation, forecasting, custom reporting, playbooks</li>
              <li className="text-muted-foreground"><strong>Enterprise:</strong> $150/user/month - Custom objects, predictive lead scoring, advanced permissions</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Real Cost Comparison (5-Person Team)</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border border-border">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="border border-border p-3 text-left">Platform</th>
                    <th className="border border-border p-3 text-left">Plan</th>
                    <th className="border border-border p-3 text-left">Annual Cost (5 users)</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">Pipedrive</td>
                    <td className="border border-border p-3">Professional</td>
                    <td className="border border-border p-3">$2,940</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">HubSpot</td>
                    <td className="border border-border p-3">Professional</td>
                    <td className="border border-border p-3">$6,000</td>
                  </tr>
                  <tr className="font-semibold">
                    <td className="border border-border p-3 text-foreground" colSpan={2}>Difference</td>
                    <td className="border border-border p-3 text-foreground">$3,060/year</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-12 text-sm">
              <em>Source: <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive vs HubSpot pricing analysis</a>, March 2026. Assumes comparable feature sets (Professional tier for both).</em>
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Feature Comparison: What You Actually Get</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Pipeline Management</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> <a href="https://www.salesmate.io/blog/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Highly visual, customizable sales pipeline with a drag-and-drop interface</a>, allowing sales teams to track deals efficiently. The pipeline view is the core of the product.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> <a href="https://www.salesmate.io/blog/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Comprehensive pipeline management system integrated with other sales tools</a>, facilitating seamless tracking and deal management. Pipelines exist within a larger platform.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> Pipedrive for pure sales focus. <a href="https://www.sybill.ai/blogs/salesforce-vs-hubspot-vs-pipedrive" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive wins with a cleaner UX and faster sales execution</a>.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Marketing Features</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> <a href="https://www.engagebay.com/blog/hubspot-vs-pipedrive/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Marketing features are designed to support sales-led communication, not dedicated marketing teams</a>. Basic email campaigns exist, but this is not Pipedrive's strength.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> Full marketing automation platform. Email campaigns, landing pages, forms, blog CMS, SEO tools, ad management—all native. Marketing and sales share the same database.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> HubSpot by a landslide. If you need marketing, HubSpot is the only real option.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Email & Communication</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> 2-way email sync with Gmail/Outlook. Email sequences on Advanced tier ($34/user). No built-in VoIP calling.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> <a href="https://www.business.com/articles/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Built-in email and VoIP functionality</a>. Text messaging via platform. Email sequences on Starter+ tiers.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> HubSpot. <a href="https://www.business.com/articles/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot's expansive range of apps allows you to communicate with clients on more channels</a>.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Reporting & Analytics</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> <a href="https://www.business.com/articles/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Deal reports let you monitor the progress of individual deals</a> as well as overall sales pipeline performance. Goal tracking for company, team, and individual goals. Functional but less deep than HubSpot.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Excellent reporting on Professional tiers. Multi-touch attribution, custom dashboards, pipeline forecasting</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> HubSpot for depth and attribution. Pipedrive for simplicity.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Ease of Use</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> <a href="https://www.salesmate.io/blog/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Easy to set up and is built specifically for sales teams</a>. The setup process is quick, with a visual sales pipeline that users can customize with just a few clicks. <a href="https://monday.com/blog/crm-and-sales/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive is known for a quick setup, often taking just a day or two for basic use</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> <a href="https://monday.com/blog/crm-and-sales/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot can take longer depending on the complexity of your data</a>. <a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">The navigation covers CRM, marketing, content, and service—sales reps often find Pipedrive's focused interface easier to use daily</a>.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> Pipedrive for setup speed and daily use. <a href="https://www.pipedrive.com/en/crm-comparison/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot has more features and functionality, which can be difficult to navigate</a> for startups or small businesses.
            </p>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Integrations</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Pipedrive:</strong> 500+ integrations. Popular ones include Google Workspace, Slack, Asana, Calendly, QuickBooks.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>HubSpot:</strong> <a href="https://www.salesmate.io/blog/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">1,600 integrations to help businesses adapt to their various needs</a>. Larger marketplace, more native integrations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Winner:</strong> HubSpot for breadth and depth.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">The Honest Pros and Cons</h2>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Pipedrive Strengths</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Built for reps, not managers:</strong> <a href="https://www.sybill.ai/blogs/salesforce-vs-hubspot-vs-pipedrive" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive was founded in 2010 by two salespeople who were frustrated with CRMs built for managers and organizations</a></li>
              <li className="text-muted-foreground"><strong>Activity-based selling:</strong> <a href="https://www.pipedrive.com/en/crm-comparison/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive does not just track deal status—it prompts you to log the next action on every deal</a></li>
              <li className="text-muted-foreground"><strong>Visual clarity:</strong> Deals move left-to-right through stages. You see where everything is at a glance</li>
              <li className="text-muted-foreground"><strong>Lower cost:</strong> Half the price of HubSpot for comparable features</li>
              <li className="text-muted-foreground"><strong>Fast setup:</strong> 1-2 days to get running vs weeks for HubSpot</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">Pipedrive Weaknesses</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">No marketing automation (you'll need separate tools)</li>
              <li className="text-muted-foreground">No free tier (HubSpot's free plan is genuinely useful)</li>
              <li className="text-muted-foreground"><a href="https://www.hubspot.com/comparisons/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Pipedrive falls short in offering the same level of native automation and AI capabilities</a></li>
              <li className="text-muted-foreground">Limited reporting compared to HubSpot Professional</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">HubSpot Strengths</h3>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground"><strong>Free forever plan:</strong> Unlimited users, unlimited contacts. <a href="https://www.business.com/articles/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">For a team that needs to start tracking deals today without a budget conversation, this is hard to beat</a></li>
              <li className="text-muted-foreground"><strong>All-in-one platform:</strong> Marketing, sales, service, CMS—all in one database</li>
              <li className="text-muted-foreground"><strong>Advanced automation:</strong> <a href="https://www.engagebay.com/blog/hubspot-vs-pipedrive/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot stands out for teams that need predictive insights, automated content and emails, smart lead scoring</a></li>
              <li className="text-muted-foreground"><strong>Reporting depth:</strong> Attribution, dashboards, forecasting</li>
              <li className="text-muted-foreground"><strong>Scales indefinitely:</strong> You'll never outgrow it</li>
            </ul>

            <h3 className="font-heading text-2xl font-bold text-foreground mb-4 mt-8">HubSpot Weaknesses</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">The free tier is genuinely limited on automation</a>. Features are greyed out behind upgrade prompts</li>
              <li className="text-muted-foreground"><a href="https://aplosai.com/blog/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Cost jumps sharply at Professional. Going from Starter to Professional is a 5x price increase per user</a></li>
              <li className="text-muted-foreground">Can feel like too much platform for teams that just want to manage deals</li>
              <li className="text-muted-foreground">Slower to set up than Pipedrive</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">The Decision Framework</h2>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Choose Pipedrive if:</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Your sales process is 100% outbound (cold email, cold calling, LinkedIn)</li>
              <li className="text-muted-foreground">You don't run inbound marketing (no blog, no SEO, minimal paid ads)</li>
              <li className="text-muted-foreground">You want reps to adopt quickly without extensive training</li>
              <li className="text-muted-foreground">Budget is tight ($2,940/year vs $6,000/year for 5 users matters)</li>
              <li className="text-muted-foreground">You want to be productive on day 1, not week 3</li>
              <li className="text-muted-foreground"><a href="https://www.luniq.io/en/resources/blog/hubspot-vs-salesforce-vs-pipedrive-which-crm-actually-fits-your-5-person-service-team" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">For most 5-person service teams, starting with Pipedrive is the path of least regret</a></li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4 mt-8">Choose HubSpot if:</h3>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">You run inbound marketing (blog posts, SEO, paid ads driving traffic)</li>
              <li className="text-muted-foreground">You need email campaigns, landing pages, and forms built into your CRM</li>
              <li className="text-muted-foreground">You want marketing + sales in the same database (attribution, lead scoring)</li>
              <li className="text-muted-foreground">You need advanced automation and reporting</li>
              <li className="text-muted-foreground">You want to start free and upgrade as you grow</li>
              <li className="text-muted-foreground"><a href="https://www.luniq.io/en/resources/blog/hubspot-vs-salesforce-vs-pipedrive-which-crm-actually-fits-your-5-person-service-team" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">HubSpot makes sense if you're thinking long-term around marketing and customer success</a></li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">What Sales Reps Actually Say</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.pipedrive.com/en/crm-comparison/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Real user quote</a>: "Many of the current CRMs I've tested in the past were so comprehensive and thorough, but also so difficult to grasp, that they couldn't be set. Pipedrive has a restricted number of points, which has made my job much easier."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.hubspot.com/comparisons/pipedrive-vs-hubspot" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Real user quote</a>: "I have never loved a product more than HubSpot. I can do anything I want, in one place, and it never fails. Everything about the product is easy to use, intuitive, fast, and effective."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Both quotes are real. The difference? The Pipedrive user is a rep who just wants to sell. The HubSpot user is likely a marketing or ops person who needs the full platform.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6 mt-12">Can You Use Both?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://monday.com/blog/crm-and-sales/pipedrive-vs-hubspot/" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">You can connect Pipedrive and HubSpot using third-party integrations like Zapier</a>. However, this approach often requires constant maintenance to keep data from falling out of sync.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Our take:</strong> Don't do this unless you have a very specific reason. Use one platform or the other. The complexity of syncing two CRMs isn't worth it for small teams.
            </p>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Not sure which CRM fits your sales process?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We help B2B teams choose between HubSpot and Pipedrive. We'll audit your sales process and tell you honestly which one will actually help reps close more deals.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free CRM Assessment
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <p className="text-sm text-muted-foreground mt-4">
            We're HubSpot partners but we'll recommend Pipedrive if that's the better fit for your team.
          </p>
        </div>
      </section>
    </div>
  )
}
