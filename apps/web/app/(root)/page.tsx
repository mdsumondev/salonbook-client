import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import HeroSection from "../Components/Home/Hero"
import { SalonType } from "../Type/type"
import { Spinner } from "@workspace/ui/components/spinner"
import SalonCard from "../Components/SalonCard"
import { playfair } from "../Components/fonts"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const loadFeaturesSalon = async (): Promise<{
  status: number
  message: string
  data: SalonType[]
}> => {
  const res = await fetch(`${process.env.BASE_URL}features`, {
    next: {
      revalidate: 2000,
    },
  })

  return res.json()
}

const page = async () => {
  const featuresData = await loadFeaturesSalon()
  const features = featuresData.data

  return (
    <>
      <main>
        <HeroSection />
      </main>

      <section className="container mx-auto px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-xs">
              Curated for you
            </p>

            <h2
              className={cn(
                playfair.className,
                "mt-4 text-[2.25rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance text-[#3B2739] sm:mt-5 sm:text-[3rem] lg:text-[3.5rem]"
              )}
            >
              Our signature services
            </h2>

            <p className="mt-4 max-w-[36rem] text-[15px] leading-7 text-pretty text-[#6B6560] sm:mt-5 sm:text-base sm:leading-8">
              Thoughtfully curated treatments to help you look and feel your
              best.
            </p>
          </div>

          <Link
            href="/services"
            className={cn(
              "group inline-flex w-fit shrink-0 items-center gap-2 rounded-sm text-sm font-semibold text-[#3B2739] transition-colors hover:text-[#4C3549] sm:text-[15px]",
              focusRing
            )}
          >
            Explore all services
            <ArrowRight
              className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<Spinner className="size-8" />}>
            {features.map((feature) => (
              <SalonCard key={feature._id} feature={feature} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default page
