"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Scissors, X } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "./fonts"

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Browse Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

export default function Header() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
      }
    }

    window.addEventListener("keydown", onKeyDown)

    return () => window.removeEventListener("keydown", onKeyDown)
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <header className="w-full bg-[#FAF8F4]">
      <div className="container mx-auto flex h-[72px] items-center justify-between gap-4 px-5 sm:h-20 sm:px-6 lg:h-[104px]">
        {/* Brand */}
        <Link
          href="/"
          onClick={closeMenu}
          className={cn(
            "flex shrink-0 items-center gap-3 rounded-full",
            focusRing
          )}
        >
          <span className="flex size-10 items-center justify-center rounded-full bg-[#3B2739] sm:size-11 lg:size-12">
            <Scissors
              className="size-[18px] text-[#FAF8F4] sm:size-5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </span>
          <span
            className={cn(
              playfair.className,
              "text-[22px] leading-none font-semibold tracking-[-0.01em] text-[#3B2739] sm:text-2xl lg:text-[26px]"
            )}
          >
            SalonBook
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "rounded-md text-base font-medium text-[#6B6560] transition-colors hover:text-[#3B2739]",
                    focusRing
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          <Link
            href="/sign-in"
            className={cn(
              "hidden rounded-md text-base font-semibold text-[#2A2523] transition-colors hover:text-[#3B2739] md:inline-flex",
              focusRing
            )}
          >
            Sign In
          </Link>

          <Link
            href="/get-started"
            className={cn(
              "hidden h-11 items-center justify-center rounded-full bg-[#3B2739] px-6 text-base font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549] sm:inline-flex lg:h-[52px] lg:px-7",
              focusRing
            )}
          >
            Get Started
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className={cn(
              "inline-flex size-10 items-center justify-center rounded-full text-[#3B2739] transition-colors hover:bg-[#3B2739]/5 lg:hidden",
              focusRing
            )}
          >
            {open ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {open ? (
        <nav id="mobile-navigation" aria-label="Mobile" className="lg:hidden">
          <div className="mx-auto w-full max-w-[1040px] px-5 pb-6 sm:px-6">
            <ul className="flex flex-col">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "block rounded-lg px-2 py-3 text-base font-medium text-[#4A4441] transition-colors hover:bg-[#3B2739]/5 hover:text-[#3B2739]",
                      focusRing
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3 border-t border-[#3B2739]/10 pt-5">
              <Link
                href="/sign-in"
                onClick={closeMenu}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-full border border-[#3B2739]/15 text-base font-semibold text-[#2A2523] transition-colors hover:bg-[#3B2739]/5",
                  focusRing
                )}
              >
                Sign In
              </Link>
              <Link
                href="/get-started"
                onClick={closeMenu}
                className={cn(
                  "inline-flex h-11 items-center justify-center rounded-full bg-[#3B2739] text-base font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549]",
                  focusRing
                )}
              >
                Get Started
              </Link>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  )
}
