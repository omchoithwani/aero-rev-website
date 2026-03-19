import type { Metadata, Viewport } from 'next'
import { DM_Sans, Syne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import './globals.css'

const dmSans = DM_Sans({ 
  subsets: ["latin"],
  variable: '--font-dm-sans',
  display: 'swap',
})

const syne = Syne({ 
  subsets: ["latin"],
  variable: '--font-syne',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'HubSpot CRM, Outbound and RevOps Agency | AeroRev',
    template: '%s | AeroRev'
  },
  description: 'AeroRev helps B2B and ecommerce brands in the USA and UK fix their revenue systems, build outbound pipeline and scale email revenue. HubSpot Partner. Real results.',
  keywords: ['HubSpot agency', 'RevOps agency', 'outbound agency', 'HubSpot partner', 'CRM setup', 'cold email agency', 'B2B lead generation'],
  authors: [{ name: 'AeroRev' }],
  creator: 'AeroRev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aerorev.com',
    siteName: 'AeroRev',
    title: 'HubSpot CRM, Outbound and RevOps Agency | AeroRev',
    description: 'AeroRev helps B2B and ecommerce brands in the USA and UK fix their revenue systems, build outbound pipeline and scale email revenue. HubSpot Partner. Real results.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HubSpot CRM, Outbound and RevOps Agency | AeroRev',
    description: 'AeroRev helps B2B and ecommerce brands in the USA and UK fix their revenue systems, build outbound pipeline and scale email revenue.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${syne.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <Navigation />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
