import React from "react"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default RootLayout
