import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'AeroRev privacy policy - how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
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
              {/* Introduction */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  AeroRev (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website aerorev.com or engage with our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may collect information about you in a variety of ways:
                </p>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">Personal Data</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you fill out our contact forms, book a consultation, or engage with our services, we may collect personally identifiable information, such as your:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Job title</li>
                  <li>Website URL</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground mb-3">Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, access times, and pages viewed. This information helps us analyze trends and improve our website.
                </p>
              </div>

              {/* How We Use Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may use the information we collect about you for various purposes, including to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>Respond to your inquiries and fulfill your requests</li>
                  <li>Provide, maintain, and improve our services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Analyze usage patterns and improve our website</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Disclosure of Your Information */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Disclosure of Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may share information we have collected about you in certain situations:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li><strong className="text-foreground">Service Providers:</strong> We may share your information with third-party vendors who perform services on our behalf, such as email delivery, hosting, and analytics.</li>
                  <li><strong className="text-foreground">Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                  <li><strong className="text-foreground">Legal Requirements:</strong> We may disclose your information if required by law or in response to valid legal requests.</li>
                </ul>
              </div>

              {/* Cookies and Tracking */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Tracking Technologies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and hold certain information. Cookies are files with a small amount of data that are stored on your device. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* Data Security */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use administrative, technical, and physical security measures to protect your personal information. While we have taken reasonable steps to secure the information you provide to us, please be aware that no security measures are perfect or impenetrable, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Your Rights */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>The right to access the personal information we hold about you</li>
                  <li>The right to request correction of inaccurate information</li>
                  <li>The right to request deletion of your information</li>
                  <li>The right to opt-out of marketing communications</li>
                  <li>The right to data portability</li>
                </ul>
              </div>

              {/* Contact Us */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions or concerns about this Privacy Policy or our practices, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-secondary/50 rounded-lg border border-border">
                  <p className="text-foreground font-semibold">AeroRev</p>
                  <p className="text-muted-foreground">Email: hello@aerorev.com</p>
                </div>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
