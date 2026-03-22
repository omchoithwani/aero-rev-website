import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Ecommerce Email Marketing Case Study | AeroRev",
  description: "How we grew email revenue from 18% to 34% of total revenue for a D2C fashion brand using advanced flows and behavioral segmentation.",
}

export default function EcommerceEmailCaseStudy() {
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
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Email Marketing</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Ecommerce</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Klaviyo</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            Ecommerce Brand: Email Marketing Revenue Growth
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            D2C fashion brand with basic email marketing. We rebuilt their entire email strategy and grew email from 18% to 34% of total revenue in six months.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">18% → 34%</div>
              <div className="text-sm text-muted-foreground">Email Revenue %</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">+127%</div>
              <div className="text-sm text-muted-foreground">Flow Conversion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">+89%</div>
              <div className="text-sm text-muted-foreground">Revenue per Email</div>
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
              This D2C fashion brand had email marketing, but it was basic. Welcome series, abandoned cart, post-purchase. No segmentation. No behavioral targeting. No optimization.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Email was generating about 18% of total revenue, which is decent but not great for ecommerce. The founder knew there was money being left on the table but did not know how to fix it.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              They needed someone to audit the entire email program, rebuild what was broken, and manage it going forward. Not a one-time project. Ongoing optimization.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What We Built</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Advanced flow architecture in Klaviyo:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Multi-step welcome series with progressive profiling (style quiz, preference collection)</li>
              <li className="text-muted-foreground">Browse abandonment flow (not just cart abandonment)</li>
              <li className="text-muted-foreground">Post-purchase cross-sell sequence based on product affinity</li>
              <li className="text-muted-foreground">Win-back series with escalating discounts</li>
              <li className="text-muted-foreground">VIP customer nurture flow for high-LTV segments</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Behavioral segmentation:</strong> Created 12 dynamic segments based on purchase frequency, AOV, product preferences, and engagement levels. Different messaging for different customer cohorts.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Campaign strategy overhaul:</strong> Moved from "blast the list weekly" to segmented campaigns tied to product drops, seasonal trends, and customer lifecycle stage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Continuous testing:</strong> A/B tested subject lines, CTAs, offers, and timing. Monthly optimization sessions to improve underperforming flows.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Email revenue grew from 18% to 34% of total revenue:</strong> Nearly doubled email's contribution in six months without increasing send volume.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>127% increase in flow conversion rates:</strong> Better targeting, better messaging, better timing. Flows started printing money.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>89% increase in revenue per email sent:</strong> Segmentation meant fewer wasted sends and higher engagement from people who actually wanted the message.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why It Worked</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We did not just set up the flows and walk away. We stayed on retainer to manage the email program. Every month we analyzed performance, tested new ideas, and optimized what was not working.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The founder did not want to become an email marketing expert. She wanted predictable email revenue that kept growing. That's what we delivered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Want to grow email revenue?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We audit, rebuild, and manage email marketing for ecommerce brands.
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
