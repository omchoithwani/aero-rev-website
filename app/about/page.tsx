import Link from "next/link"
import { ArrowRight, Linkedin, Mail } from "lucide-react"

export const metadata = {
  title: "About AeroRev | HubSpot RevOps Agency",
  description: "We build HubSpot systems, outbound engines, and email automation for B2B companies. 6+ years of hands-on implementation across Sales, Marketing, and Service Hubs.",
}

const team = [
  {
    name: "Om Choithwani",
    role: "Founder",
    email: "om.choithwani@aero-rev.com",
    linkedin: "https://www.linkedin.com/in/omchoithwani/",
    bio: "Om founded AeroRev after six years implementing HubSpot at partner agencies, working across Sales, Marketing, Ops, and Service Hubs for B2B and ecommerce clients in the USA and UK. He handles strategy and technical implementation. CRM architecture, outbound systems, email automation, RevOps planning. The focus is building infrastructure that supports how companies grow without constant manual intervention. He works directly with clients on HubSpot setup and system design, turning operational needs into working processes.",
  },
  {
    name: "Adarsh Mishra",
    role: "Co-Founder",
    email: "adarsh.mishra@aero-rev.com",
    linkedin: "https://www.linkedin.com/in/adarsh-m-87111423b/",
    bio: "AeroRev's outbound is led by Adarsh Mishra, an email and LinkedIn specialist with 5+ years of experience working across ecommerce brands, marketing agencies, real estate firms, and fintech companies. Adarsh has run campaigns across 15+ client accounts, building everything from DTC lifecycle flows to high volume cold outreach stacks. He knows what gets replies, what kills deliverability, and what it actually takes to turn a broken sending setup into consistent pipeline. We bring outbound into engagements as a system, not a one-off campaign. Clients who work with us get someone who owns the whole stack and delivers without being managed.",
  },
  {
    name: "Michelle Antonio",
    role: "Managing Partner",
    email: "mantonio@teamoutsource.com",
    linkedin: "https://www.linkedin.com/in/sbmichelle/",
    bio: "Michelle leads client success at AeroRev, ensuring implementations deliver measurable outcomes and clients get full value from their systems. She brings over a decade of experience in sales, marketing, and operations. As Managing Partner of Team Outsource, she runs remote staffing and recruitment for real estate, construction, and service businesses. That work gives her a sharp eye for what actually moves the needle operationally versus what just looks good on paper. At AeroRev, she makes sure CRM setups align with how teams actually sell, that automation workflows solve real problems, and that onboarding doesn't end at handoff. Her role is making sure the work we do becomes part of how clients operate, not another tool they pay for and ignore.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-label">About AeroRev</div>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              We Build HubSpot Systems That Drive Revenue
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Six years of hands-on HubSpot implementation across B2B and ecommerce companies. We build CRM systems, outbound engines, and email automation that turn operational chaos into predictable pipeline.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                What We Actually Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement HubSpot for B2B companies that need their CRM to drive revenue, not just track it.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most companies buy HubSpot, go through a rushed onboarding, and end up with a system nobody uses. Deals sit in pipelines with no next steps. Automations break silently. Reports show activity but not outcomes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We fix that. CRM setup, outbound systems, email automation, RevOps planning. The work is technical implementation, not strategy decks.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">Core Services</h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground">
                  <strong className="text-foreground">CRM Setup & Management:</strong> Build your HubSpot system right the first time. Pipelines, properties, automation, reporting.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">HubSpot RevOps:</strong> Connect CRM, outbound, and marketing into one system that drives predictable revenue.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Outbound Systems:</strong> Signal-based cold email and LinkedIn outreach. Built for replies, not volume.
                </li>
                <li className="text-muted-foreground">
                  <strong className="text-foreground">Email Marketing:</strong> Lifecycle flows, segmentation, deliverability. For ecommerce and B2B.
                </li>
              </ul>
              <Link href="/services" className="inline-flex items-center mt-6 text-foreground font-medium hover:opacity-70 transition-opacity">
                See Full Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Who We Are
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A small team focused on building HubSpot systems that work. No account managers, no project coordinators. You work directly with the people doing the implementation.
            </p>
          </div>

          <div className="space-y-16">
            {team.map((member) => (
              <div key={member.name} className="border-t border-border pt-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">{member.role}</p>
                    <div className="flex gap-4">
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="lg:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
              How We Work
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">We start with audit.</strong> Most HubSpot problems come from rushed setup, not missing features. We audit your current system, identify what's broken, and show you exactly what needs fixing before talking about projects.
              </p>
              <p>
                <strong className="text-foreground">We build in phases.</strong> No six-month implementations. We break work into 2-4 week cycles. You see results fast, and we adjust as we learn how your team actually works.
              </p>
              <p>
                <strong className="text-foreground">We train your team.</strong> Every implementation includes documentation and training. Your team needs to own the system after we're done, not depend on us to make basic changes.
              </p>
              <p>
                <strong className="text-foreground">We stay technical.</strong> You won't get account managers who escalate questions. You work with the people building your systems. Faster decisions, fewer miscommunications, better outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Who We Work With
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                B2B companies with 10-200 employees. Usually growing fast enough that spreadsheets and disconnected tools create bottlenecks, but not big enough for enterprise systems or full-time RevOps headcount.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Common scenarios: Sales team hit their HubSpot limits. Marketing and sales data don't connect. Outbound campaigns get low replies or land in spam. Email flows exist but don't drive revenue.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We've worked with law firms, staffing agencies, membership organizations, SaaS companies, ecommerce brands, and professional services firms across the USA and UK.
              </p>
            </div>
            <div className="bg-card border border-border p-8 lg:p-12">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">
                You're a good fit if:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 border border-foreground flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 bg-foreground"></div>
                  </div>
                  <span className="text-muted-foreground">You already use HubSpot but know it's not working as well as it should</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 border border-foreground flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 bg-foreground"></div>
                  </div>
                  <span className="text-muted-foreground">Your team needs systems that support how you actually sell, not generic best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 border border-foreground flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 bg-foreground"></div>
                  </div>
                  <span className="text-muted-foreground">You want someone who builds and troubleshoots, not manages contractors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 h-5 w-5 border border-foreground flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 bg-foreground"></div>
                  </div>
                  <span className="text-muted-foreground">You're ready to invest in infrastructure, not quick fixes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
              Let's Talk About Your HubSpot
            </h2>
            <p className="text-lg text-background/70 mb-8">
              We start every engagement with an audit. No sales pitch, no commitment. Just an honest assessment of what's working, what's broken, and what it would take to fix it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-background px-8 py-4 text-base font-medium text-foreground tracking-wide uppercase hover:bg-background/90 transition-all"
            >
              Get a Free HubSpot Audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
