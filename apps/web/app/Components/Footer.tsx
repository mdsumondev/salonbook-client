import Link from "next/link"
import { MapPin, Phone, Scissors } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "./fonts"

const exploreLinks = [
  { label: "All Services", href: "/services" },
  { label: "Hair & Styling", href: "/services/hair-styling" },
  { label: "Skin & Spa", href: "/services/skin-spa" },
] as const

const openingHours = [
  "Saturday – Thursday",
  "10:00 AM – 8:00 PM",
  "Friday: 2:00 PM – 8:00 PM",
] as const

const focusRing =
  "rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-[#FAF8F4]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#3B2739]"

const columnHeading = "text-[15px] font-semibold text-[#FAF8F4]"

const columnText = "text-[15px] leading-7 text-[#FAF8F4]/70"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#3B2739] text-[#FAF8F4]">
      <div className="container mx-auto px-5 pt-12 pb-10 sm:px-6 sm:pt-14 lg:pt-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className={cn("inline-flex items-center gap-2.5", focusRing)}
            >
              <span className="flex size-8 items-center justify-center rounded-full bg-[#FAF8F4]/10">
                <Scissors
                  className="size-4 text-[#FAF8F4]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <span
                className={cn(
                  playfair.className,
                  "text-xl leading-none font-semibold tracking-[-0.01em] text-[#FAF8F4]"
                )}
              >
                SalonBook
              </span>
            </Link>

            <p className={cn(columnText, "mt-5 max-w-[280px]")}>
              Exceptional beauty experiences, thoughtfully booked around your
              life.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="SalonBook on Instagram"
                className={cn(
                  "text-[#FAF8F4]/80 transition-colors hover:text-[#FAF8F4]",
                  focusRing
                )}
              >
                <InstagramIcon className="size-[18px]" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="SalonBook on TikTok"
                className={cn(
                  "text-[#FAF8F4]/80 transition-colors hover:text-[#FAF8F4]",
                  focusRing
                )}
              >
                <TikTokIcon className="size-[18px]" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <nav aria-label="Explore">
            <h3 className={columnHeading}>Explore</h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      columnText,
                      "inline-block transition-colors hover:text-[#FAF8F4]",
                      focusRing
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Visit us */}
          <div>
            <h3 className={columnHeading}>Visit us</h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin
                  className="mt-1 size-4 shrink-0 text-[#FAF8F4]/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className={columnText}>
                  House 24, Road 11
                  <br />
                  Banani, Dhaka
                </span>
              </li>
              <li className="flex gap-3">
                <Phone
                  className="mt-1 size-4 shrink-0 text-[#FAF8F4]/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <a
                  href="tel:+8801712345678"
                  className={cn(
                    columnText,
                    "transition-colors hover:text-[#FAF8F4]",
                    focusRing
                  )}
                >
                  +880 1712 345678
                </a>
              </li>
            </ul>
          </div>

          {/* Opening hours */}
          <div>
            <h3 className={columnHeading}>Opening hours</h3>
            <ul className={cn(columnText, "mt-5 space-y-1.5")}>
              {openingHours.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FAF8F4]/10">
        <div className="mx-auto w-full max-w-[1040px] px-5 py-5 sm:px-6">
          <p className="text-center text-sm text-[#FAF8F4]/45">
            © {year} SalonBook. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
