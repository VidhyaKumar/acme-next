import { Suspense } from "react"

import { Logo } from "@/components/logo"
import { Pokemons } from "@/components/pokemons"
import { Skeleton } from "@/components/skeleton"

interface HomePageProps {
  searchParams: {
    name?: string
    page?: string
  }
}

export default function Page({ searchParams }: HomePageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  return (
    <main className="flex min-h-screen flex-col p-16 w-full items-center">
      <div className="mb-10">
        <Logo />
      </div>
      <Suspense fallback={<Skeleton />} key={page}>
        <Pokemons page={page} />
      </Suspense>
    </main>
  )
}
