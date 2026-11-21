"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye, EyeOff, Lock, Mail, Scissors } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "@/app/Components/fonts"
import { signIn } from "@/lib/auth-client"

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1600&q=80"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const labelClass = "block text-sm font-semibold text-[#2A2523]"

const fieldClass =
  "h-[52px] w-full rounded-lg border border-[#E3DCD3] bg-white pl-11 pr-4 text-[15px] text-[#2A2523] transition-colors outline-none placeholder:text-[#A39A92] focus:border-[#3B2739]/50 focus:ring-4 focus:ring-[#3B2739]/10"

const fieldIconClass =
  "pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-[#9A918A]"

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
      />
    </svg>
  )
}

export default function SignInPage() {
  const [showPassword, setShowPassword] = React.useState(false)
  const [remember, setRemember] = React.useState(false)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const userInfo = Object.fromEntries(formData.entries())
    console.log(userInfo, remember)
    const { data, error } = await signIn.email({
      email: userInfo.email as string,
      password: userInfo.password as string,
      rememberMe: remember,
      callbackURL: "/",
    })

    console.log("sign In", data, error)
  }

  return (
    <main className="grid min-h-svh grid-cols-1 bg-[#FAF8F4] lg:h-svh lg:min-h-0 lg:grid-cols-2 lg:overflow-hidden">
      {/* Hero image */}
      <aside className="relative hidden h-[240px] w-full md:block lg:h-full">
        <Image
          src={HERO_IMAGE}
          alt="Interior of a luxury salon with styling chairs and mirrors"
          fill
          preload
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#3B2739]/30 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241722]/90 via-[#241722]/20 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-8 sm:pb-8 lg:px-12 lg:pb-12">
          <p className="text-[10px] font-semibold tracking-[0.3em] text-white/70 uppercase sm:text-[11px]">
            SalonBook
          </p>
          <p
            className={cn(
              playfair.className,
              "mt-3 max-w-[500px] text-[32px] leading-[1.15] font-medium text-white sm:text-[38px] lg:text-[46px]"
            )}
          >
            Welcome back to your beauty space.
          </p>
        </div>
      </aside>

      {/* Form */}
      <section className="flex flex-col justify-center px-5 py-6 sm:px-8 lg:px-12 lg:py-8">
        <div className="mx-auto w-full max-w-[440px]">
          <Link
            href="/"
            className={cn("inline-flex items-center gap-2.5", focusRing)}
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-[#3B2739]">
              <Scissors
                className="size-5 text-[#FAF8F4]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
            </span>
            <span
              className={cn(
                playfair.className,
                "text-[22px] leading-none font-semibold tracking-[-0.01em] text-[#3B2739]"
              )}
            >
              SalonBook
            </span>
          </Link>

          <p className="mt-8 text-[11px] font-bold tracking-[0.2em] text-[#A57C8A] uppercase lg:mt-9">
            Welcome back
          </p>

          <h1
            className={cn(
              playfair.className,
              "mt-3 text-[34px] leading-tight font-medium text-[#2E222B] sm:text-[38px]"
            )}
          >
            Sign in to continue
          </h1>

          <p className="mt-3 max-w-[400px] text-[15px] leading-6 text-[#6B6560]">
            Your appointments, preferences and next self-care moment are
            waiting.
          </p>

          <form className="mt-6" onSubmit={handleSignIn}>
            <div>
              <label htmlFor="email" className={labelClass}>
                Email address
              </label>
              <div className="relative mt-2">
                <Mail
                  className={fieldIconClass}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@example.com"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="password" className={labelClass}>
                Password
              </label>
              <div className="relative mt-2">
                <Lock
                  className={fieldIconClass}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="At least 8 characters"
                  className={cn(fieldClass, "pr-12")}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((value) => !value)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-[#9A918A] transition-colors hover:text-[#3B2739] focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="size-4" aria-hidden="true" />
                  ) : (
                    <Eye className="size-4" aria-hidden="true" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <label
                htmlFor="remember-me"
                className="flex items-center gap-2 text-sm text-[#4A4441]"
              >
                <input
                  onChange={() => setRemember(!remember)}
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  className="size-4 rounded-[3px] border border-[#C9C0B7] accent-[#3B2739]"
                />
                Remember me
              </label>

              <Link
                href="/forgot-password"
                className="text-[13px] font-medium text-[#B07E8C] underline-offset-4 transition-colors hover:text-[#8F5F6E] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className={cn(
                "mt-6 h-[52px] w-full rounded-full bg-[#3B2739] text-[15px] font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549]",
                focusRing
              )}
            >
              Sign In
            </button>
          </form>

          <div className="my-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#E3DCD3]" />
            <span className="text-xs text-[#8A817A]">or continue with</span>
            <span className="h-px flex-1 bg-[#E3DCD3]" />
          </div>

          <button
            type="button"
            className={cn(
              "flex h-[52px] w-full items-center justify-center gap-2.5 rounded-full border border-[#E3DCD3] bg-white text-[15px] font-semibold text-[#2A2523] transition-colors hover:bg-[#F5F1EB]",
              focusRing
            )}
          >
            <GoogleIcon className="size-[18px]" />
            Continue with Google
          </button>

          <p className="mt-6 text-center text-sm text-[#6B6560]">
            New to SalonBook?{" "}
            <Link
              href="/sign-up"
              className="font-semibold text-[#2A2523] underline-offset-4 transition-colors hover:text-[#3B2739] hover:underline"
            >
              Create Account
            </Link>
          </p>
        </div>
      </section>
    </main>
  )
}
