"use client"

import type { Metadata } from "next"
import { useState, useEffect } from "react"
import { ArrowRight, Calendar, Mail, Clock } from "lucide-react"

// Declare HubSpot global
declare global {
  interface Window {
    hbspt: any
  }
}

const services = [
  { value: "crm", label: "CRM Setup and Management" },
  { value: "revops", label: "HubSpot RevOps" },
  { value: "outbound", label: "Outbound Systems" },
  { value: "email", label: "Email Marketing" },
  { value: "unsure", label: "Not sure, help me figure out what I need" },
]

export default function ContactPage() {
  useEffect(() => {
    // Load HubSpot meetings script
    const meetingsScript = document.createElement('script')
    meetingsScript.type = 'text/javascript'
    meetingsScript.src = 'https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js'
    meetingsScript.async = true
    document.body.appendChild(meetingsScript)

    // Load HubSpot forms script
    const formsScript = document.createElement('script')
    formsScript.charset = 'utf-8'
    formsScript.type = 'text/javascript'
    formsScript.src = '//js.hsforms.net/forms/embed/v2.js'
    formsScript.async = true
    formsScript.onload = () => {
      // Create form after script loads
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "45587544",
          formId: "ba04a194-393f-43cf-af6a-4c4e15cbf8dd",
          region: "na1",
          target: '#hubspot-form-container'
        })
      }
    }
    document.body.appendChild(formsScript)

    return () => {
      // Cleanup scripts on unmount
      if (document.body.contains(meetingsScript)) {
        document.body.removeChild(meetingsScript)
      }
      if (document.body.contains(formsScript)) {
        document.body.removeChild(formsScript)
      }
    }
  }, [])

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-foreground leading-tight text-balance">
              Tell us where your revenue is stuck
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Book a call or send us a message. We will tell you exactly what is broken and how we would fix it. No pitch. No pressure. Just honest direction.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Book a Call */}
            <div className="p-8 lg:p-10 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Book a call
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The fastest way to get started. Pick a time that works for you and we will dig into your specific situation.
              </p>
              
              {/* HubSpot Meetings Embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-border">
                <div 
                  className="meetings-iframe-container" 
                  data-src="https://meetings.hubspot.com/choithwani?embed=true"
                ></div>
              </div>
            </div>

            {/* Send a Message */}
            <div className="p-8 lg:p-10 rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="font-heading text-2xl font-bold text-foreground">
                  Send a message
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Tell us about your situation and we will get back to you within one business day.
              </p>

              {/* HubSpot Form Embed */}
              <div id="hubspot-form-container" className="mt-8"></div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Response time</h3>
                <p className="mt-1 text-sm text-muted-foreground">We respond within one business day.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Email us directly</h3>
                <a href="mailto:hello@aerorev.com" className="mt-1 text-sm text-primary hover:text-primary/80 transition-colors">
                  hello@aerorev.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Calendar className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground">Timezone coverage</h3>
                <p className="mt-1 text-sm text-muted-foreground">EST and GMT. USA and UK clients covered.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
