import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "../fonts"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const avatars = [
  { initial: "A", className: "bg-[#E9DCCB] text-[#94795A]" },
  { initial: "N", className: "bg-[#E4D4BF] text-[#8E7354]" },
  { initial: "R", className: "bg-[#EDE2D3] text-[#9A7F60]" },
] as const

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#FAF8F4]">
      {/* Decorative ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-16 hidden size-[30rem] rounded-full border border-[#3B2739]/10 xl:-left-[28rem] xl:block 2xl:-left-[22rem]"
      />

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-5 py-12 sm:gap-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20 xl:gap-16 xl:py-24">
        {/* Copy */}
        <div className="relative max-w-[34rem]">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
            Beauty, thoughtfully booked
          </p>

          <h1
            className={cn(
              playfair.className,
              "mt-4 text-[2.75rem] leading-[1.05] font-medium tracking-[-0.02em] text-[#3B2739] sm:mt-5 sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem]"
            )}
          >
            Your beauty.
            <span className="mt-1 block text-[#B87C8F] italic sm:mt-2">
              Your time.
            </span>
          </h1>

          <p className="mt-5 max-w-[32rem] text-base leading-7 text-pretty text-[#6B6560] sm:mt-7 sm:text-lg sm:leading-8">
            Discover exceptional salon experiences and book your favorite beauty
            treatments with just a few clicks.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10">
            <Link
              href="/services"
              className={cn(
                "group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#3B2739] px-6 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549] sm:h-[52px] sm:px-7 sm:text-[15px]",
                focusRing
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
              href="/about"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-full border border-[#3B2739]/15 bg-transparent px-6 text-sm font-semibold text-[#3B2739] transition-colors hover:bg-[#3B2739]/5 sm:h-[52px] sm:px-7 sm:text-[15px]",
                focusRing
              )}
            >
              How It Works
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
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
              our beautiful community
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative mx-auto w-full max-w-[540px] lg:max-w-none">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-tl-[1.75rem] rounded-tr-[1.75rem] rounded-br-[3.5rem] rounded-bl-[0.75rem] shadow-[0_35px_70px_-40px_rgba(59,39,57,0.45)] sm:rounded-tl-[2.5rem] sm:rounded-tr-[2.5rem] sm:rounded-br-[5rem] lg:rounded-tl-[2.75rem] lg:rounded-tr-[2.75rem] lg:rounded-br-[6rem]">
            <Image
              src="/images/hero-selfcare.jpg"
              alt="A guest enjoying a relaxing beauty treatment at SalonBook"
              fill
              preload
              sizes="(max-width: 1023px) 92vw, 45vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#3B2739]/20 via-transparent to-transparent"
            />
          </div>

          <div className="absolute bottom-4 left-3 max-w-[15rem] rounded-2xl border border-[#3B2739]/5 bg-[#FCF9F3] px-5 py-4 shadow-[0_18px_40px_-20px_rgba(59,39,57,0.45)] sm:bottom-6 sm:left-5 sm:max-w-[17rem] sm:px-6 sm:py-5 lg:bottom-8 lg:-left-6">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-[#B07A8C] uppercase sm:text-[10px]">
              A moment for you
            </p>
            <p
              className={cn(
                playfair.className,
                "mt-1.5 text-lg leading-snug text-balance text-[#3B2739] sm:text-xl"
              )}
            >
              Your self-care starts here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
