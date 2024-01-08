import { Suspense } from "react"

import { CardSkeleton } from "@/components/card-skeleton"
import { Pokemons } from "@/components/pokemons"

interface HomePageProps {
  searchParams: {
    name?: string
    page?: string
  }
}

export const runtime = "edge"

export default function Page({ searchParams }: HomePageProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1

  return (
    <Suspense fallback={<CardSkeleton />} key={page}>
      <Pokemons page={page} />
    </Suspense>
  )
}
