import { Suspense } from "react"

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
    <Suspense fallback={<Skeleton />} key={page}>
      <Pokemons page={page} />
    </Suspense>
  )
}
