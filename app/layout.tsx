import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Logo } from "@/components/logo"
import Search from "@/components/search"

import "./globals.css"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "VK Pokedex",
  description: "Next 14 RSC Pokedex",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={cn("font-sans antialiased", fontSans.variable)}>
        <div className="container flex flex-col min-h-screen py-16 mx-auto">
          <header className="flex flex-row items-center justify-between w-full mb-8 gap-x-4">
            <Logo />
            <Search />
          </header>
          <main className="flex flex-col flex-1">{children}</main>
        </div>
      </body>
    </html>
  )
}
