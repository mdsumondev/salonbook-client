"use client"

import * as React from "react"
import { CalendarDays, Clock, Loader2 } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@workspace/ui/lib/utils"
import { playfair } from "../fonts"

const focusRing =
  "outline-none focus-visible:ring-2 focus-visible:ring-[#3B2739]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-white"

const labelClass = "block text-sm font-semibold text-[#2A2523]"

const fieldClass =
  "h-11 w-full rounded-lg border border-[#E3DCD3] bg-white px-3.5 text-sm text-[#2A2523] transition-colors outline-none placeholder:text-[#A39A92] focus:border-[#3B2739]/50 focus:ring-4 focus:ring-[#3B2739]/10 [color-scheme:light]"

const timeSlots = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
] as const

const formatPrice = (price: number) =>
  `৳${new Intl.NumberFormat("en-US").format(price)}`

const formatDate = (value: string) => {
  if (!value) return ""

  return new Intl.DateTimeFormat("en-US", { dateStyle: "medium" }).format(
    new Date(`${value}T00:00:00`)
  )
}

type BookingCardProps = {
  serviceName: string
  price: number
  estimatedDuration: number
}

export default function BookingCard({
  serviceName,
  price,
  estimatedDuration,
}: BookingCardProps) {
  const [date, setDate] = React.useState("")
  const [selectedTime, setSelectedTime] = React.useState<string | null>(null)
  const [note, setNote] = React.useState("")
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [minDate, setMinDate] = React.useState<string>()

  React.useEffect(() => {
    const now = new Date()
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const day = String(now.getDate()).padStart(2, "0")

    setMinDate(`${now.getFullYear()}-${month}-${day}`)
  }, [])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!date) {
      toast.error("Choose an appointment date", {
        description: "Select the day you'd like to visit us.",
      })
      return
    }

    if (!selectedTime) {
      toast.error("Choose an available time", {
        description: "Pick one of the time slots above.",
      })
      return
    }

    setIsSubmitting(true)

    try {
      // TODO: replace this with a request to your booking endpoint.
      await new Promise((resolve) => setTimeout(resolve, 700))

      toast.success("Appointment request sent", {
        description: `${serviceName} on ${formatDate(date)} at ${selectedTime}. We'll confirm shortly.`,
      })

      setDate("")
      setSelectedTime(null)
      setNote("")
    } catch {
      toast.error("Request not sent", {
        description: "Please try again in a moment.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-[1.25rem] border border-[#3B2739]/10 bg-white p-5 shadow-[0_24px_60px_-45px_rgba(59,39,57,0.45)] sm:rounded-[1.5rem] sm:p-6 lg:p-7">
      <p className="text-[10px] font-semibold tracking-[0.2em] text-[#B07A8C] uppercase sm:text-[11px]">
        Reserve your time
      </p>

      <div className="mt-2 flex items-start justify-between gap-4">
        <h2
          className={cn(
            playfair.className,
            "text-[24px] leading-tight font-medium text-[#2E222B] sm:text-[28px]"
          )}
        >
          Book this service
        </h2>
        <CalendarDays
          className="mt-1 size-5 shrink-0 text-[#B87C8F]"
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </div>

      <form className="mt-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="appointment-date" className={labelClass}>
            Appointment date
          </label>
          <input
            id="appointment-date"
            name="date"
            type="date"
            required
            min={minDate}
            value={date}
            onChange={(event) => setDate(event.target.value)}
            className={cn("mt-2", fieldClass)}
          />
        </div>

        <fieldset className="mt-5">
          <legend className={labelClass}>Available time</legend>
          <div className="mt-2 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {timeSlots.map((time) => {
              const isSelected = selectedTime === time

              return (
                <button
                  key={time}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedTime(time)}
                  className={cn(
                    "inline-flex h-10 items-center justify-center rounded-lg border text-[13px] font-medium transition-colors",
                    isSelected
                      ? "border-[#3B2739] bg-[#3B2739] text-[#FAF8F4]"
                      : "border-[#E3DCD3] bg-white text-[#4A4340] hover:border-[#3B2739]/40 hover:bg-[#FAF6EE]",
                    focusRing
                  )}
                >
                  {time}
                </button>
              )
            })}
          </div>
        </fieldset>

        <div className="mt-5">
          <label htmlFor="appointment-note" className={labelClass}>
            A note for your stylist{" "}
            <span className="text-xs font-normal text-[#8A817A]">
              (optional)
            </span>
          </label>
          <textarea
            id="appointment-note"
            name="note"
            rows={4}
            value={note}
            onChange={(event) => setNote(event.target.value)}
            placeholder="Tell us anything that will make your visit better."
            className="mt-2 min-h-[110px] w-full resize-y rounded-lg border border-[#E3DCD3] bg-white px-3.5 py-3 text-sm leading-6 text-[#2A2523] transition-colors outline-none placeholder:text-[#A39A92] focus:border-[#3B2739]/50 focus:ring-4 focus:ring-[#3B2739]/10"
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-4 rounded-lg bg-[#FAF6EE] px-3.5 py-3">
          <p className="flex items-center gap-1.5 text-[13px] text-[#6B6560]">
            <Clock
              className="size-4 shrink-0"
              strokeWidth={1.75}
              aria-hidden="true"
            />
            {estimatedDuration} minutes
          </p>
          <p className="text-[15px] font-semibold text-[#2A2523]">
            {formatPrice(price)}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B2739] px-6 text-sm font-semibold text-[#FAF8F4] transition-colors hover:bg-[#4C3549] disabled:cursor-not-allowed disabled:opacity-70",
            focusRing
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden="true" />
              Sending request...
            </>
          ) : (
            "Submit appointment request"
          )}
        </button>
      </form>
    </div>
  )
}
