import type { Metadata } from "next"
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "@/app/Components/fonts"
import ContactForm from "@/app/Components/Contact/ContactForm"

export const metadata: Metadata = {
  title: "Contact | SalonBook",
  description:
    "Questions about a treatment or your booking? Get in touch with the SalonBook team — we're here to help.",
}

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const openingHours = [
  { day: "Saturday – Thursday", time: "10:00 AM – 8:00 PM" },
  { day: "Friday", time: "2:00 PM – 8:00 PM" },
] as const

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#FAF8F4]">
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-64 hidden size-[34rem] rounded-full border border-[#3B2739]/10 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-40 hidden size-[26rem] rounded-full border border-[#3B2739]/10 sm:block"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-10">
          <div className="max-w-[42rem]">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
              Contact us
            </p>

            <h1
              className={cn(
                playfair.className,
                "mt-4 text-[2.5rem] leading-[1.05] font-medium tracking-[-0.02em] text-[#3B2739] sm:mt-5 sm:text-[3.25rem] lg:text-[4rem]"
              )}
            >
              We&apos;d love to{" "}
              <span className="text-[#B87C8F] italic lg:mt-1 lg:block">
                hear from you.
              </span>
            </h1>

            <p className="mt-5 max-w-[36rem] text-base leading-7 text-pretty text-[#6B6560] sm:mt-6 sm:text-lg sm:leading-8">
              Whether you have a question about a treatment, need help with a
              booking, or simply want to say hello, our team is here for you.
            </p>
          </div>

          <div className="flex w-fit items-center gap-3 self-start rounded-full border border-[#3B2739]/10 bg-white/70 px-4 py-2.5 lg:self-end lg:px-5 lg:py-3">
            <Clock
              className="size-4 shrink-0 text-[#A57C8A]"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            <p className="text-sm text-[#6B6560]">
              We reply within{" "}
              <span className="font-semibold text-[#2A2523]">
                one business day
              </span>
            </p>
          </div>
        </div>

        {/* Form + details */}
        <div className="mt-10 grid gap-6 sm:mt-12 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-8 xl:gap-10">
          <ContactForm />

          <aside className="flex flex-col gap-4 sm:gap-5">
            {/* Visit */}
            <section className="rounded-2xl border border-[#3B2739]/10 bg-[#FFFDF9] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#3B2739]/5">
                  <MapPin
                    className="size-[18px] text-[#3B2739]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-[#A57C8A] uppercase">
                  Visit us
                </h2>
              </div>

              <address className="mt-4 text-[15px] leading-7 text-[#4A4441] not-italic">
                House 24, Road 11
                <br />
                Banani, Dhaka
              </address>

              <a
                href="https://maps.google.com/?q=Banani,+Dhaka"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3B2739] transition-colors hover:text-[#B87C8F]",
                  focusRing
                )}
              >
                Get directions
                <ArrowUpRight
                  className="size-3.5"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </section>

            {/* Talk to us */}
            <section className="rounded-2xl border border-[#3B2739]/10 bg-[#FFFDF9] p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#3B2739]/5">
                  <Phone
                    className="size-[18px] text-[#3B2739]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-[#A57C8A] uppercase">
                  Talk to us
                </h2>
              </div>

              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="tel:+8801712345678"
                    className={cn(
                      "group flex items-center gap-3 text-[15px] text-[#4A4441] transition-colors hover:text-[#3B2739]",
                      focusRing
                    )}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3B2739]/5 text-[#3B2739] transition-colors group-hover:bg-[#3B2739]/10">
                      <Phone
                        className="size-3.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    +880 1712 345678
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:hello@salonbook.com"
                    className={cn(
                      "group flex items-center gap-3 text-[15px] text-[#4A4441] transition-colors hover:text-[#3B2739]",
                      focusRing
                    )}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#3B2739]/5 text-[#3B2739] transition-colors group-hover:bg-[#3B2739]/10">
                      <Mail
                        className="size-3.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                    </span>
                    hello@salonbook.com
                  </a>
                </li>
              </ul>
            </section>

            {/* Opening hours */}
            <section className="rounded-2xl bg-[#3B2739] p-6 text-[#FAF8F4] sm:p-7">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#FAF8F4]/10">
                  <Clock
                    className="size-[18px]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h2 className="text-[11px] font-semibold tracking-[0.18em] text-[#E7C9D3] uppercase">
                  Opening hours
                </h2>
              </div>

              <ul className="mt-4 space-y-2.5 text-[15px]">
                {openingHours.map((slot) => (
                  <li
                    key={slot.day}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-[#FAF8F4]/70">{slot.day}</span>
                    <span className="font-medium text-[#FAF8F4]">
                      {slot.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 border-t border-[#FAF8F4]/10 pt-4 text-sm leading-6 text-[#FAF8F4]/55">
                Walk-ins are welcome, though appointments are recommended.
              </p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}
