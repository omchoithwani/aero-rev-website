import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Star, Layers } from "lucide-react"

export const metadata = {
  title: "How to Build Lead Scoring in HubSpot Free Tier (Manual Workaround)",
  description: "Step-by-step workaround to score leads on HubSpot Free tier using custom properties and lists. No Professional tier required. Works immediately.",
  keywords: "HubSpot lead scoring free, manual lead scoring, HubSpot free tier, score leads without Professional",
}

export default function HubSpotLeadScoringFreeTier() {
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
            How to Build Lead Scoring in HubSpot Free Tier
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Manual workaround to score leads on HubSpot Free tier using custom properties and lists. No Professional subscription required ($800/month savings). Takes 30 minutes to set up.
          </p>

          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-foreground" />
              <span>Works on Free tier</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-foreground" />
              <span>No code required</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="h-4 w-4 text-foreground" />
              <span>Updates daily</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Why This Matters</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            <a href="https://knowledge.hubspot.com/properties/set-up-score-properties-to-qualify-leads" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Native lead scoring in HubSpot requires Marketing Hub Professional or Enterprise</a>. That's $800/month minimum.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            But you still need to prioritize your leads. Which contacts visited your pricing page 3 times? Which companies match your ICP? Who engaged with your last 5 emails?
          </p>
          <p className="text-muted-foreground leading-relaxed">
            This guide shows you how to build a manual scoring system using Free tier features: custom properties + active lists + workflows (Free tier workflows).
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">How This Works (The Strategy)</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://www.default.com/post/hubspot-lead-scoring" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Manual lead scoring enables users to customize the criteria used to calculate lead scores</a>. Since HubSpot Free doesn't give you the scoring property, we'll fake it using:
            </p>
            <ol className="space-y-3 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground"><strong>Custom dropdown property:</strong> "Lead Score" with tiers (Cold, Warm, Hot, Qualified)</li>
              <li className="text-muted-foreground"><strong>Active lists:</strong> One list per scoring criteria (e.g., "Visited Pricing Page 3+ Times")</li>
              <li className="text-muted-foreground"><strong>Manual review:</strong> Daily/weekly, you review which contacts are in multiple high-value lists, then manually update their Lead Score property</li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Tradeoff:</strong> Not fully automated like Professional tier, but you get 80% of the value at $0/month.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 1: Create a Custom "Lead Score" Property</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>Time required:</strong> 5 minutes
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Settings {'>'} Properties</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Create property"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Select object: Contact</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Group: Contact Information</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Label: "Lead Score"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Field type: Dropdown select</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Add options:</strong>
                <ul className="ml-12 mt-2 space-y-1 list-disc list-inside">
                  <li>Cold (0-25 points)</li>
                  <li>Warm (26-50 points)</li>
                  <li>Hot (51-75 points)</li>
                  <li>Qualified (76-100 points)</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Create"</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 2: Define Your Scoring Criteria</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <a href="https://coefficient.io/hubspot-data-management/setup-hubspot-lead-scoring" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Lead scoring works best when it reflects your company's actual conversion patterns. Start by analyzing your successful customers to identify common characteristics and behaviors</a>.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Two Types of Criteria:</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>1. Fit Criteria (Who They Are):</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Company size (employees, revenue)</li>
              <li className="text-muted-foreground">Industry</li>
              <li className="text-muted-foreground">Job title</li>
              <li className="text-muted-foreground">Location</li>
            </ul>

            <p className="text-muted-foreground leading-relaxed mb-4">
              <strong>2. Engagement Criteria (What They Do):</strong>
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">Visited pricing page</li>
              <li className="text-muted-foreground">Downloaded whitepaper</li>
              <li className="text-muted-foreground">Opened last 3 emails</li>
              <li className="text-muted-foreground">Attended webinar</li>
              <li className="text-muted-foreground">Requested demo</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Example Scoring Model:</h3>
            <div className="overflow-x-auto mb-12">
              <table className="w-full text-sm border border-border">
                <thead className="bg-secondary/30">
                  <tr>
                    <th className="border border-border p-3 text-left">Criteria</th>
                    <th className="border border-border p-3 text-left">Points</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr>
                    <td className="border border-border p-3">Company size: 50-200 employees</td>
                    <td className="border border-border p-3">+15</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Job title contains "Director" or "VP"</td>
                    <td className="border border-border p-3">+10</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Visited pricing page 3+ times</td>
                    <td className="border border-border p-3">+20</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Opened last 5 emails</td>
                    <td className="border border-border p-3">+15</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Downloaded case study</td>
                    <td className="border border-border p-3">+10</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3">Requested demo</td>
                    <td className="border border-border p-3">+30</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 3: Create Active Lists for Each Criterion</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Now we'll build lists that automatically identify contacts matching each criterion.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Example: "Visited Pricing Page 3+ Times"</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Contacts {'>'} Lists</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Create list"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>List type: Active list</strong>
                <p className="ml-6 mt-2">Active lists update automatically as contacts meet/unmeet criteria.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Object type: Contact</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Name: "[SCORE] Visited Pricing 3+"</strong>
                <p className="ml-6 mt-2">Use [SCORE] prefix so you know it's for scoring.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Add filter: "Number of pageviews" {'>'} Choose page {'>'} Your pricing page URL</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Set value: is greater than or equal to 3</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Click "Save"</strong>
              </li>
            </ol>

            <p className="text-muted-foreground leading-relaxed mb-12">
              Repeat this for each scoring criterion. You'll end up with 5-10 lists like:
            </p>
            <ul className="space-y-2 mb-12">
              <li className="text-muted-foreground">• [SCORE] Company Size 50-200</li>
              <li className="text-muted-foreground">• [SCORE] Director or VP Title</li>
              <li className="text-muted-foreground">• [SCORE] Visited Pricing 3+</li>
              <li className="text-muted-foreground">• [SCORE] Opened Last 5 Emails</li>
              <li className="text-muted-foreground">• [SCORE] Downloaded Case Study</li>
              <li className="text-muted-foreground">• [SCORE] Requested Demo</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 4: Create a Master "High Score Contacts" List</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Now create one list that shows contacts who appear in multiple high-value lists.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Instructions:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Contacts {'>'} Lists {'>'} Create list</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Name: "High Score Contacts (Review Daily)"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Add filter: "List membership" {'>'} is member of at least 3 of the following:</strong>
                <ul className="ml-12 mt-2 space-y-1 list-disc list-inside">
                  <li>[SCORE] Visited Pricing 3+</li>
                  <li>[SCORE] Opened Last 5 Emails</li>
                  <li>[SCORE] Requested Demo</li>
                </ul>
              </li>
              <li className="text-muted-foreground">
                <strong>Save</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Step 5: Review and Score Daily/Weekly</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Set a recurring calendar reminder to review your "High Score Contacts" list.
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Daily Workflow:</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Open "High Score Contacts" list</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>For each contact, manually calculate their score:</strong>
                <p className="ml-6 mt-2">Check which scoring lists they're in, add up points.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Update their "Lead Score" property</strong>
                <p className="ml-6 mt-2">Select all contacts with 76-100 points, bulk edit {'>'} Lead Score {'>'} Qualified</p>
                <p className="ml-6 mt-2">Select all contacts with 51-75 points, bulk edit {'>'} Lead Score {'>'} Hot</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Create a view filtered by "Lead Score = Qualified"</strong>
                <p className="ml-6 mt-2">These are your priority leads for outreach.</p>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Optional: Semi-Automate with Bulk Property Updates</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              To speed this up, create views that auto-filter by list membership combinations:
            </p>

            <h3 className="font-heading text-xl font-semibold text-foreground mb-4">Example View: "Auto-Qualified Leads"</h3>
            <ol className="space-y-4 mb-12 list-decimal list-inside">
              <li className="text-muted-foreground">
                <strong>Go to Contacts {'>'} Create view</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Name: "Auto-Qualified (Update Weekly)"</strong>
              </li>
              <li className="text-muted-foreground">
                <strong>Add filters:</strong>
                <ul className="ml-12 mt-2 space-y-1 list-disc list-inside">
                  <li>List membership: is member of [SCORE] Requested Demo</li>
                  <li>AND List membership: is member of [SCORE] Visited Pricing 3+</li>
                </ul>
                <p className="ml-6 mt-2">This combination = 50 points, automatically Qualified tier.</p>
              </li>
              <li className="text-muted-foreground">
                <strong>Weekly: Select all contacts in this view, bulk edit {'>'} Lead Score {'>'} Qualified</strong>
              </li>
            </ol>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Limitations of This Approach</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground"><strong>Manual updates required:</strong> You have to review and update scores yourself (5-15 min/day)</li>
              <li className="text-muted-foreground"><strong>No real-time automation:</strong> Scores don't update instantly when a contact visits pricing page</li>
              <li className="text-muted-foreground"><strong>No score decay:</strong> <a href="https://www.3andfour.com/articles/hubspot-lead-scoring" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">Professional tier has score decay, which reduces scores over time if engagement becomes less recent</a>. You'll need to manually handle this.</li>
              <li className="text-muted-foreground"><strong>Doesn't scale past 500 contacts:</strong> Once you hit 500+ leads, the manual work becomes unsustainable. That's when you upgrade to Professional.</li>
            </ul>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">When to Upgrade to Professional Tier</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Upgrade when:
            </p>
            <ul className="space-y-3 mb-12">
              <li className="text-muted-foreground">You have 500+ active leads and manual scoring takes more than 30 min/day</li>
              <li className="text-muted-foreground">You need real-time lead routing (hot leads go straight to sales)</li>
              <li className="text-muted-foreground">You want <a href="https://www.xcellimark.com/blog/how-to-build-lead-scoring-in-hubspot-2025-update" className="underline hover:text-foreground" target="_blank" rel="noopener noreferrer">AI-powered scoring to discover hidden patterns that manual models miss</a></li>
              <li className="text-muted-foreground">You're ready to integrate scoring with workflows (auto-assign leads, trigger sequences)</li>
            </ul>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Ready to upgrade to automated lead scoring?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We help B2B companies set up HubSpot lead scoring on Professional tier. We'll build your scoring model, integrate it with workflows, and train your team.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Free Lead Scoring Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
