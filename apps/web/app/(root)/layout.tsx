import React from "react"
import Header from "../Components/Header"

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  )
}

export default RootLayout
