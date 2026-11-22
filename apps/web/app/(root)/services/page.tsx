import SalonCard from "@/app/Components/SalonCard"
import { SalonType } from "@/app/Type/type"
import { Spinner } from "@workspace/ui/components/spinner"
import React, { Suspense } from "react"

const handleServiceData = async (): Promise<{
  status: number
  message: string
  data: SalonType[]
}> => {
  const res = await fetch(`${process.env.BASE_URL}salons`, {
    next: {
      revalidate: 2000,
    },
  })

  return res.json()
}

const ServicesPage = async () => {
  const salonData = await handleServiceData()
  const salons = salonData.data

  return (
    <>
      <section className="container mx-auto px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          <Suspense fallback={<Spinner className="size-8" />}>
            {salons.map((salon) => (
              <SalonCard key={salon._id} salons={salon} />
            ))}
          </Suspense>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
