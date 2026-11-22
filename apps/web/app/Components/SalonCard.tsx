import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Clock } from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "./fonts"
import { SalonType } from "./../Type/type"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAF8F4]"

const formatPrice = (price: number) =>
  `৳${new Intl.NumberFormat("en-US").format(price)}`

const SalonCard = ({ feature }: { feature: SalonType }) => {
  const {
    _id,
    serviceName,
    serviceCategory,
    description,
    price,
    estimatedDuration,
    serviceImage,
    serviceStatus,
  } = feature

  console.log("Feature data", feature)

  return (
    <article
      data-status={serviceStatus}
      className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-[#3B2739]/10 bg-white shadow-[0_1px_2px_rgba(59,39,57,0.05)] transition-shadow duration-300 hover:shadow-[0_22px_45px_-28px_rgba(59,39,57,0.45)]"
    >
      <div className="relative aspect-3/2 w-full overflow-hidden bg-[#EDE6DA]">
        <Image
          src={serviceImage}
          alt={serviceName}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />

        <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-semibold tracking-[0.18em] text-[#3B2739] uppercase shadow-[0_1px_2px_rgba(59,39,57,0.12)] backdrop-blur-sm">
          {serviceCategory}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={cn(
              playfair.className,
              "line-clamp-2 min-w-0 text-[22px] leading-snug font-medium tracking-[-0.01em] text-[#3B2739]"
            )}
          >
            {serviceName}
          </h3>

          <p className="shrink-0 pt-1 text-[15px] font-semibold whitespace-nowrap text-[#2A2523]">
            {formatPrice(price)}
          </p>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#6B6560]">
          {description}
        </p>

        <div className="mt-auto pt-5">
          <div className="flex items-center justify-between gap-4 border-t border-[#3B2739]/10 pt-4">
            <p className="flex items-center gap-1.5 text-[13px] text-[#6B6560]">
              <Clock
                className="size-3.5 shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {estimatedDuration} min
            </p>

            <Link
              href={`/services/${_id}`}
              className={cn(
                "group/link inline-flex items-center gap-1 rounded-sm text-[13px] font-semibold text-[#3B2739] transition-colors hover:text-[#4C3549]",
                focusRing
              )}
            >
              View details
              <ArrowUpRight
                className="size-3.5 shrink-0 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default SalonCard
