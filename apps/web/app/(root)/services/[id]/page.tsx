import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Clock } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"

import { SalonType } from "@/app/Type/type"
import { playfair } from "@/app/Components/fonts"
import BookingCard from "@/app/Components/Service/BookingCard"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const formatPrice = (price: number) =>
  `৳${new Intl.NumberFormat("en-US").format(price)}`

const expectations = [
  "Personalized consultation",
  "Premium, salon-grade products",
  "Aftercare recommendations",
] as const

export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.BASE_URL}salons`)

    if (!res.ok) return []

    const result = await res.json()
    const salons: SalonType[] = result.data ?? []

    return salons.map((salon) => ({ id: salon._id }))
  } catch {
    return []
  }
}

const ServiceDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>
}) => {
  const { id } = await params

  const res = await fetch(`${process.env.BASE_URL}salons/${id}`, {
    next: { revalidate: 2000 },
  })

  if (!res.ok) notFound()

  const result = await res.json()
  const service: SalonType | undefined = result.data

  if (!service) notFound()

  const {
    serviceName,
    serviceCategory,
    description,
    price,
    estimatedDuration,
    serviceImage,
  } = service

  return (
    <main className="bg-[#FAF8F4]">
      <div className="container mx-auto max-w-[1040px] px-5 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <Link
          href="/services"
          className={cn(
            "group inline-flex items-center gap-2 rounded-sm text-sm text-[#6B6560] transition-colors hover:text-[#3B2739]",
            focusRing
          )}
        >
          <ArrowLeft
            className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          Back to services
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-7 sm:mt-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Image + what to expect */}
          <div className="space-y-6 sm:space-y-7">
            <div className="relative aspect-[7/5] w-full overflow-hidden rounded-2xl bg-[#EDE6DA]">
              <Image
                src={serviceImage}
                alt={serviceName}
                fill
                sizes="(max-width: 1023px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <section className="rounded-2xl bg-[#FBF7EF] p-6 sm:p-8">
              <h2
                className={cn(
                  playfair.className,
                  "text-[24px] leading-tight font-medium text-[#2E222B] sm:text-[28px]"
                )}
              >
                What to expect
              </h2>

              <p className="mt-3 text-sm leading-7 text-[#6B6560] sm:text-[15px]">
                A thoughtful consultation, a carefully tailored treatment and
                finishing recommendations selected for your needs.
              </p>

              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {expectations.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-[13px] leading-6 text-[#4A4340] sm:text-sm"
                  >
                    <Check
                      className="mt-0.5 size-4 shrink-0 text-[#3B2739]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Details + booking */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase">
              {serviceCategory}
            </p>

            <h1
              className={cn(
                playfair.className,
                "mt-3 text-[2.25rem] leading-[1.05] font-medium tracking-[-0.02em] text-balance text-[#3B2739] sm:text-[2.75rem] lg:text-[3rem]"
              )}
            >
              {serviceName}
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-pretty text-[#6B6560] sm:text-base sm:leading-8">
              {description}
            </p>

            <div className="mt-7 border-t border-[#3B2739]/10 pt-5">
              <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[#8A817A] uppercase">
                    Price
                  </p>
                  <p className="mt-1.5 text-[22px] font-semibold text-[#2A2523]">
                    {formatPrice(price)}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] font-semibold tracking-[0.16em] text-[#8A817A] uppercase">
                    Duration
                  </p>
                  <p className="mt-1.5 flex items-center gap-1.5 text-[22px] font-semibold text-[#2A2523]">
                    <Clock
                      className="size-4 shrink-0"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {estimatedDuration} min
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-[#3B2739]/10 pt-6">
              <BookingCard
                serviceName={serviceName}
                price={price}
                estimatedDuration={estimatedDuration}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ServiceDetails
