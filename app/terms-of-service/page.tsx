import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'AeroRev terms of service - the terms and conditions governing your use of our website and services.',
}

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Last updated: March 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-invert prose-lg max-w-none">
            <div className="space-y-12">
              {/* Agreement */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing or using the AeroRev website (aerorev.com) and our services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our website or use our services.
                </p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Services</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  AeroRev provides revenue operations consulting, HubSpot CRM implementation and management, outbound lead generation, and email marketing services. The specific terms of any engagement will be outlined in a separate service agreement or statement of work.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
                </p>
              </div>

              {/* Use of Website */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You may use our website only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Use the website in any way that violates applicable laws or regulations</li>
                  <li>Attempt to gain unauthorized access to any portion of the website</li>
                  <li>Interfere with or disrupt the website or servers</li>
                  <li>Transmit any malware, viruses, or other harmful code</li>
                  <li>Collect or harvest any information from the website without authorization</li>
                  <li>Impersonate any person or entity</li>
                </ul>
              </div>

              {/* Intellectual Property */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by AeroRev or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any materials from our website without our prior written consent.
                </p>
              </div>

              {/* Client Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When engaging our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Provide accurate and complete information as requested</li>
                  <li>Grant necessary access to systems and platforms required to deliver services</li>
                  <li>Respond to requests for feedback and approvals in a timely manner</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Pay all fees as outlined in your service agreement</li>
                </ul>
              </div>

              {/* Confidentiality */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Both parties agree to keep confidential any proprietary or sensitive information shared during the course of our engagement. This includes, but is not limited to, business strategies, customer data, pricing information, and technical processes. Confidentiality obligations survive the termination of any service agreement.
                </p>
              </div>

              {/* Limitation of Liability */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To the fullest extent permitted by law, AeroRev shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising out of or related to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Your use or inability to use our website or services</li>
                  <li>Any conduct or content of any third party</li>
                  <li>Any unauthorized access to or use of our servers or personal information</li>
                </ul>
              </div>

              {/* Disclaimer */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclaimer of Warranties</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website and services are provided on an &quot;as is&quot; and &quot;as available&quot; basis. AeroRev makes no warranties, expressed or implied, regarding the operation of the website or the information, content, or materials included therein. We do not guarantee specific results from our services, as outcomes depend on various factors including your implementation and market conditions.
                </p>
              </div>

              {/* Indemnification */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to defend, indemnify, and hold harmless AeroRev and its officers, directors, employees, and agents from and against any claims, damages, obligations, losses, liabilities, costs, or expenses arising from your violation of these Terms or your use of our website and services.
                </p>
              </div>

              {/* Governing Law */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States and the State of Delaware, without regard to its conflict of law provisions. Any legal action or proceeding arising out of these Terms shall be brought exclusively in the courts located in Delaware.
                </p>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to update or modify these Terms at any time without prior notice. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground font-semibold">AeroRev</p>
                  <p className="text-muted-foreground">Email: hello@aerorev.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
