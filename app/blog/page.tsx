import Link from "next/link"
import { ArrowRight, TrendingUp } from "lucide-react"

export const metadata = {
  title: "RevOps Blog | HubSpot Guides & CRM Comparisons | AeroRev",
  description: "Technical guides, CRM comparisons, and RevOps insights for B2B companies. Real-world advice on HubSpot, Salesforce, and sales automation.",
}

const posts = [
  {
    slug: "hubspot-vs-salesforce-small-business",
    title: "HubSpot vs Salesforce for Small Businesses Under 50 Employees",
    description: "Real pricing, hidden costs, and which CRM actually saves you money over 3 years. Detailed comparison for B2B companies choosing their first serious CRM.",
    category: "CRM Comparison",
    readTime: "12 min read",
    date: "March 2026",
    tags: ["HubSpot", "Salesforce", "CRM", "Pricing"],
  },
  {
    slug: "sales-hub-pro-vs-enterprise",
    title: "Sales Hub Pro vs Enterprise: When to Upgrade (and When Not To)",
    description: "Sales Hub Enterprise costs $600/user/year more than Professional. Here's exactly when that upgrade is worth it—and when you're better off staying on Pro.",
    category: "HubSpot Comparison",
    readTime: "10 min read",
    date: "March 2026",
    tags: ["HubSpot", "Sales Hub", "Pricing"],
  },
]

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              RevOps Blog
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Technical guides, CRM comparisons, and RevOps insights from building systems for B2B companies.
            </p>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="p-8 lg:p-12 bg-card border border-border hover:border-foreground/20 transition-all">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-muted-foreground">
                      {post.category}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.readTime}
                    </span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {post.date}
                    </span>
                  </div>
                  
                  <h2 className="font-heading text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {post.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="inline-flex items-center text-sm font-medium text-foreground group-hover:text-foreground/70 transition-colors">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 text-foreground mx-auto mb-6" />
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Want help implementing any of this?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We build these systems for B2B companies. CRM selection, implementation, and optimization.
            </p>
            <Link href="/contact" className="btn-primary">
              Talk to Us About Your CRM
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
