import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, CalendarCheck2, Heart } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "@/app/Components/fonts"

export const metadata: Metadata = {
  title: "About | SalonBook",
  description:
    "The story behind SalonBook — a curated beauty studio and booking platform in Banani, Dhaka, connecting clients with trusted specialists since 2018.",
}

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const focusRingLight =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F4]/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B2739]"

const primaryButton =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3B2739] px-6 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549] sm:h-[52px] sm:px-7 sm:text-[15px]"

const secondaryButton =
  "inline-flex h-12 items-center justify-center rounded-full border border-[#3B2739]/15 bg-transparent px-6 text-sm font-semibold text-[#3B2739] transition-colors hover:bg-[#3B2739]/5 sm:h-[52px] sm:px-7 sm:text-[15px]"

const avatars = [
  { initial: "A", className: "bg-[#E9DCCB] text-[#94795A]" },
  { initial: "N", className: "bg-[#E4D4BF] text-[#8E7354]" },
  { initial: "R", className: "bg-[#EDE2D3] text-[#9A7F60]" },
] as const

const values = [
  {
    icon: CalendarCheck2,
    title: "Book in seconds",
    description:
      "Live availability, instant confirmation and gentle reminders. Reschedule in a tap — no phone calls, no back-and-forth.",
  },
  {
    icon: BadgeCheck,
    title: "Vetted, not just listed",
    description:
      "Every specialist is interviewed, trial-tested and rated by real clients before they join the SalonBook community.",
  },
  {
    icon: Heart,
    title: "Looked after, always",
    description:
      "From the products we use to the chair you sit in, every detail is chosen to make you feel calm and cared for.",
  },
] as const

const stats = [
  { value: "2018", label: "Founded in Banani" },
  { value: "24", label: "Vetted specialists" },
  { value: "40+", label: "Services offered" },
  { value: "12,000+", label: "Appointments booked" },
] as const

const team = [
  {
    initials: "AR",
    name: "Ayesha Rahman",
    role: "Founder & Creative Director",
    specialty: "Bridal styling, hair architecture and creative direction.",
    avatarClass: "bg-[#E9DCCB] text-[#94795A]",
  },
  {
    initials: "NJ",
    name: "Nusrat Jahan",
    role: "Senior Hair Stylist",
    specialty: "Precision cuts, colour correction and everyday wearability.",
    avatarClass: "bg-[#E4D4BF] text-[#8E7354]",
  },
  {
    initials: "FA",
    name: "Farhana Akter",
    role: "Skin & Spa Specialist",
    specialty: "Facials, skin health and restorative body treatments.",
    avatarClass: "bg-[#EDE2D3] text-[#9A7F60]",
  },
  {
    initials: "RC",
    name: "Rima Chowdhury",
    role: "Makeup Artist",
    specialty: "Bridal, editorial and event looks that still feel like you.",
    avatarClass: "bg-[#E7CBD4] text-[#9C6174]",
  },
] as const

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-[#FAF8F4]">
      {/* Decorative rings */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-40 hidden size-[26rem] rounded-full border border-[#3B2739]/10 lg:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 -right-48 hidden size-[30rem] rounded-full border border-[#3B2739]/10 xl:block"
      />

      <div className="relative mx-auto w-full max-w-[1240px] px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Intro */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
            About SalonBook
          </p>

          <h1
            className={cn(
              playfair.className,
              "mt-4 text-[2.5rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance text-[#3B2739] sm:mt-5 sm:text-[3.25rem] lg:text-[4rem]"
            )}
          >
            Beauty,{" "}
            <span className="text-[#B87C8F] italic">made personal.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[38rem] text-base leading-7 text-pretty text-[#6B6560] sm:mt-6 sm:text-lg sm:leading-8">
            SalonBook is a curated beauty studio and booking platform in Banani,
            Dhaka. Since 2018, we&apos;ve helped more than 12,000 clients find
            trusted specialists, book in seconds, and leave feeling more like
            themselves.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10">
            <Link href="/services" className={cn(primaryButton, focusRing)}>
              Explore services
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
            <Link href="/contact" className={cn(secondaryButton, focusRing)}>
              Get in touch
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-7">
            <div className="flex -space-x-2.5" aria-hidden="true">
              {avatars.map((avatar) => (
                <span
                  key={avatar.initial}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-full border-2 border-[#FAF8F4] text-[11px] font-semibold",
                    avatar.className
                  )}
                >
                  {avatar.initial}
                </span>
              ))}
            </div>

            <p className="text-sm text-[#6B6560] sm:text-[15px]">
              <span className="font-semibold text-[#2A2523]">4.9/5</span> from
              1,200+ client reviews
            </p>
          </div>
        </div>

        {/* Studio image */}
        <div className="relative mt-10 sm:mt-14 lg:mt-16">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] rounded-br-[3rem] shadow-[0_35px_70px_-45px_rgba(59,39,57,0.5)] sm:aspect-[16/9] sm:rounded-[2rem] sm:rounded-br-[4rem] lg:aspect-[21/9] lg:rounded-[2.5rem] lg:rounded-br-[6rem]">
            <Image
              src="/images/about-studio.jpg"
              alt="Warmly lit salon interior with styling chairs and mirrors at SalonBook"
              fill
              preload
              sizes="(max-width: 1240px) 100vw, 1240px"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#3B2739]/45 via-[#3B2739]/5 to-transparent"
            />
          </div>

          <div className="absolute bottom-4 left-4 max-w-[15rem] rounded-2xl border border-[#3B2739]/5 bg-[#FCF9F3] px-5 py-4 shadow-[0_18px_40px_-20px_rgba(59,39,57,0.45)] sm:bottom-6 sm:left-6 sm:max-w-[18rem] sm:px-6 sm:py-5 lg:bottom-8 lg:left-8">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-[#B07A8C] uppercase sm:text-[10px]">
              Est. 2018
            </p>
            <p
              className={cn(
                playfair.className,
                "mt-1.5 text-lg leading-snug text-balance text-[#3B2739] sm:text-xl"
              )}
            >
              A quiet corner of Banani, Dhaka.
            </p>
          </div>
        </div>

        {/* Story */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-20">
            <div className="lg:order-2">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
                Our story
              </p>

              <h2
                className={cn(
                  playfair.className,
                  "mt-4 text-[1.9rem] leading-[1.1] font-medium tracking-[-0.01em] text-balance text-[#3B2739] sm:text-[2.5rem] lg:text-[3rem]"
                )}
              >
                A neighbourhood salon, built around your time.
              </h2>

              <div className="mt-5 space-y-4 text-[15px] leading-7 text-[#6B6560] sm:text-base sm:leading-8">
                <p>
                  We opened with four chairs and one belief: a salon visit
                  should feel like a pause, not an errand. No rushed
                  consultations. No surprise pricing. No guessing which
                  specialist to book.
                </p>
                <p>
                  Today, SalonBook brings together 24 hand-picked stylists,
                  estheticians and makeup artists under one roof. Every
                  professional is interviewed and reviewed by real clients.
                  Every service is described in plain language, with honest
                  timing and transparent pricing.
                </p>
                <p>
                  Whether you&apos;re here for a reset, a celebration, or simply
                  a trim, we&apos;ll make sure the hour is yours.
                </p>
              </div>

              <div className="mt-7 flex items-center gap-4 border-t border-[#3B2739]/10 pt-6 sm:mt-8">
                <span
                  className={cn(
                    playfair.className,
                    "flex size-12 shrink-0 items-center justify-center rounded-full bg-[#E9DCCB] text-lg font-medium text-[#94795A]"
                  )}
                >
                  AR
                </span>
                <div>
                  <p
                    className={cn(
                      playfair.className,
                      "text-lg leading-tight text-[#3B2739]"
                    )}
                  >
                    Ayesha Rahman
                  </p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.16em] text-[#B07A8C] uppercase sm:text-[11px]">
                    Founder & Creative Director
                  </p>
                </div>
              </div>
            </div>

            <div className="relative lg:order-1">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] rounded-bl-[4rem] shadow-[0_35px_70px_-45px_rgba(59,39,57,0.5)] sm:rounded-[2rem] sm:rounded-bl-[5rem]">
                <Image
                  src="/images/hero-selfcare.jpg"
                  alt="A guest enjoying a relaxing facial treatment at SalonBook"
                  fill
                  sizes="(max-width: 1023px) 92vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="absolute right-4 bottom-4 rounded-2xl border border-[#3B2739]/5 bg-[#FCF9F3] px-5 py-4 shadow-[0_18px_40px_-20px_rgba(59,39,57,0.45)] sm:right-6 sm:bottom-6 sm:px-6 sm:py-5">
                <p
                  className={cn(
                    playfair.className,
                    "text-2xl leading-none font-medium text-[#3B2739] sm:text-[28px]"
                  )}
                >
                  12,000+
                </p>
                <p className="mt-1.5 text-[9px] font-semibold tracking-[0.16em] text-[#B07A8C] uppercase sm:text-[10px]">
                  Appointments booked
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
              What we stand for
            </p>
            <h2
              className={cn(
                playfair.className,
                "mt-4 text-[1.9rem] leading-[1.1] font-medium tracking-[-0.01em] text-balance text-[#3B2739] sm:text-[2.5rem] lg:text-[3rem]"
              )}
            >
              Small details. Real difference.
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#3B2739]/10 bg-[#FFFDF9] p-6 transition-shadow hover:shadow-[0_25px_50px_-40px_rgba(59,39,57,0.55)] sm:p-7"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#3B2739]/5">
                  <Icon
                    className="size-5 text-[#3B2739]"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <h3 className="mt-5 text-[17px] font-semibold text-[#2A2523]">
                  {title}
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#6B6560]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="rounded-[1.75rem] bg-[#3B2739] px-6 py-9 sm:rounded-[2rem] sm:px-10 sm:py-12">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-0">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={cn(
                    "lg:px-8",
                    index === 0 && "lg:pl-0",
                    index === stats.length - 1 && "lg:pr-0",
                    index > 0 && "lg:border-l lg:border-[#FAF8F4]/10"
                  )}
                >
                  <p
                    className={cn(
                      playfair.className,
                      "text-[2rem] leading-none font-medium text-[#FAF8F4] sm:text-[2.5rem]"
                    )}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[10px] font-semibold tracking-[0.16em] text-[#E7C9D3] uppercase sm:text-[11px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
                The people
              </p>
              <h2
                className={cn(
                  playfair.className,
                  "mt-4 text-[1.9rem] leading-[1.1] font-medium tracking-[-0.01em] text-[#3B2739] sm:text-[2.5rem] lg:text-[3rem]"
                )}
              >
                Specialists you can trust.
              </h2>
            </div>

            <p className="max-w-sm text-[15px] leading-7 text-[#6B6560]">
              A few of the faces you&apos;ll meet. Every specialist is
              interviewed and reviewed before joining our team.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-2xl border border-[#3B2739]/10 bg-[#FFFDF9] p-6 transition-shadow hover:shadow-[0_25px_50px_-40px_rgba(59,39,57,0.55)]"
              >
                <span
                  className={cn(
                    playfair.className,
                    "flex size-16 items-center justify-center rounded-full text-xl font-medium",
                    member.avatarClass
                  )}
                >
                  {member.initials}
                </span>

                <h3
                  className={cn(
                    playfair.className,
                    "mt-5 text-xl leading-tight font-medium text-[#3B2739]"
                  )}
                >
                  {member.name}
                </h3>
                <p className="mt-1.5 text-[10px] font-semibold tracking-[0.16em] text-[#B07A8C] uppercase">
                  {member.role}
                </p>
                <p className="mt-3 text-sm leading-6 text-[#6B6560]">
                  {member.specialty}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 sm:mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#3B2739] px-6 py-9 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-14 lg:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full border border-[#FAF8F4]/10"
            />

            <div className="relative grid gap-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
              <div className="max-w-2xl">
                <p className="text-[11px] font-semibold tracking-[0.2em] text-[#E7C9D3] uppercase">
                  Ready when you are
                </p>
                <h2
                  className={cn(
                    playfair.className,
                    "mt-3 text-[1.9rem] leading-[1.1] font-medium text-balance text-[#FAF8F4] sm:text-[2.5rem]"
                  )}
                >
                  Your next appointment starts here.
                </h2>
                <p className="mt-3 text-[15px] leading-7 text-[#FAF8F4]/65">
                  Browse services, meet the team, or ask us anything —
                  we&apos;re happy to help.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="/services"
                  className={cn(
                    "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FAF8F4] px-6 text-sm font-semibold text-[#3B2739] transition-colors hover:bg-white sm:h-[52px] sm:px-7 sm:text-[15px]",
                    focusRingLight
                  )}
                >
                  Explore Services
                  <ArrowRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>

                <Link
                  href="/contact"
                  className={cn(
                    "inline-flex h-12 items-center justify-center rounded-full border border-[#FAF8F4]/25 px-6 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#FAF8F4]/10 sm:h-[52px] sm:px-7 sm:text-[15px]",
                    focusRingLight
                  )}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
