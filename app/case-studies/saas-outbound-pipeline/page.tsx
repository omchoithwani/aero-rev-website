import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "B2B SaaS Outbound Case Study | AeroRev",
  description: "How we helped an HR tech SaaS platform go from 0.3% to 4.2% cold email reply rate and generate 12 qualified demos per month.",
}

export default function SaaSOutboundCaseStudy() {
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
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Outbound</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">B2B SaaS</span>
            <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground">Cold Email</span>
          </div>
          
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6">
            B2B SaaS: Outbound Lead Generation System
          </h1>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            HR tech SaaS platform doing spray-and-pray cold outbound. We rebuilt their entire outbound engine with signal-based targeting and hyper-personalization.
          </p>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-secondary/30">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">0.3% → 4.2%</div>
              <div className="text-sm text-muted-foreground">Reply Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">2 → 12/mo</div>
              <div className="text-sm text-muted-foreground">Qualified Demos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-heading font-bold text-foreground mb-2">-65%</div>
              <div className="text-sm text-muted-foreground">Cost per Demo</div>
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
              This HR tech platform sold performance management software to mid-market companies. Their sales team was doing cold outbound, but it was broken.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              They bought a massive list from Apollo, loaded it into their email tool, and blasted generic messages to thousands of people. Reply rate: 0.3%. Most replies were "unsubscribe" or angry responses.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              The sales team was demoralized. The founder was burning cash on a broken system. They needed someone to fix it and actually run it, not just hand them a playbook.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">What We Built</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Signal-based targeting stack:</strong>
            </p>
            <ul className="space-y-3 mb-6">
              <li className="text-muted-foreground">Clay to identify companies hiring HR leaders (LinkedIn job posts, funding announcements, executive changes)</li>
              <li className="text-muted-foreground">Enrichment to find decision-makers and validate contact data</li>
              <li className="text-muted-foreground">Custom scoring to prioritize accounts by buying intent signals</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Hyper-personalized sequences:</strong> Every email referenced a specific signal. Not "Hey, saw you're hiring" but "Congrats on bringing Sarah on as VP People. Based on her background at [company], I'm guessing performance management is a priority this quarter."
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>Three-angle approach:</strong> We tested pain-based, curiosity-based, and value-based openers. Pain-based won by 2x.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>Weekly optimization:</strong> We stayed on retainer to run the campaigns, test new angles, analyze reply data, and iterate.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">The Results</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>4.2% reply rate:</strong> 14x improvement from 0.3%. Replies were actually positive and interested, not angry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              <strong>12 qualified demos per month:</strong> Up from 2. Sales team went from scraping for meetings to having a consistent pipeline.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              <strong>65% reduction in cost per demo:</strong> Fewer emails sent, better targeting, higher conversion. CAC dropped significantly.
            </p>

            <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Why It Worked</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We did not just rebuild the system and disappear. We stayed on retainer to run it week after week. When reply rates dipped, we tested new angles. When a new signal worked, we scaled it.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The founder did not want to become an outbound expert. He wanted predictable pipeline. That's what we delivered.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card border-y border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Need help with outbound?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We build signal-based outbound systems and stay on retainer to run them.
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
