"use client"

import * as React from "react"
import { Loader2, Lock, Mail, Phone, Send, User } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "@/app/Components/fonts"
import { toast } from "sonner"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const labelClass = "block text-sm font-semibold text-[#2A2523]"

const fieldClass =
  "h-[52px] w-full rounded-lg border border-[#E3DCD3] bg-white pl-11 pr-4 text-[15px] text-[#2A2523] transition-colors outline-none placeholder:text-[#A39A92] focus:border-[#3B2739]/50 focus:ring-4 focus:ring-[#3B2739]/10"

const fieldIconClass =
  "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#9A918A]"

const messageClass =
  "min-h-[150px] w-full resize-y rounded-lg border border-[#E3DCD3] bg-white px-4 py-3.5 text-[15px] leading-6 text-[#2A2523] transition-colors outline-none placeholder:text-[#A39A92] focus:border-[#3B2739]/50 focus:ring-4 focus:ring-[#3B2739]/10"

const requiredMark = (
  <span className="text-[#B87C8F]" aria-hidden="true">
    *
  </span>
)

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget
    setIsSubmitting(true)

    try {
      // TODO: replace this with a request to your contact endpoint.
      await new Promise((resolve) => setTimeout(resolve, 700))

      toast.success("Message sent", {
        description:
          "Thank you for reaching out — we'll reply within one business day.",
      })

      form.reset()
    } catch {
      toast.error("Message not sent", {
        description: "Please try again or email us at hello@salonbook.com.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[1.75rem] border border-[#3B2739]/10 bg-[#FFFDF9] p-6 shadow-[0_30px_60px_-45px_rgba(59,39,57,0.5)] sm:rounded-[2rem] sm:p-8 lg:p-10">
      <h2
        className={cn(
          playfair.className,
          "text-[26px] leading-tight font-medium text-[#2E222B] sm:text-[30px]"
        )}
      >
        Send us a message
      </h2>
      <p className="mt-2 text-sm leading-6 text-[#6B6560]">
        Fill in the details below and our team will get back to you.
      </p>

      <form className="mt-7 sm:mt-8" onSubmit={handleSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="contact-name" className={labelClass}>
              Full name {requiredMark}
            </label>
            <div className="relative mt-2">
              <User
                className={fieldIconClass}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your full name"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-email" className={labelClass}>
              Email address {requiredMark}
            </label>
            <div className="relative mt-2">
              <Mail
                className={fieldIconClass}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="contact-phone" className={labelClass}>
              Phone number{" "}
              <span className="text-xs font-normal text-[#8A817A]">
                (optional)
              </span>
            </label>
            <div className="relative mt-2">
              <Phone
                className={fieldIconClass}
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+880 1XXX XXXXXX"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="contact-message" className={labelClass}>
              How can we help? {requiredMark}
            </label>
            <div className="mt-2">
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell us a little about what you need..."
                className={messageClass}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "inline-flex h-[52px] w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#3B2739] px-7 text-[15px] font-semibold whitespace-nowrap text-[#FAF8F4] transition-colors hover:bg-[#4C3549] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto",
              focusRing
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                Sending...
              </>
            ) : (
              <>
                Send message
                <Send className="size-4" aria-hidden="true" />
              </>
            )}
          </button>

          <p className="flex items-start gap-2 text-xs leading-5 text-[#8A817A] sm:max-w-[240px] sm:justify-end sm:text-right">
            <Lock
              className="mt-0.5 size-3.5 shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            We&apos;ll only use your details to reply. No newsletters, no spam.
          </p>
        </div>
      </form>
    </div>
  )
}
