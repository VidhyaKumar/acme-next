import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import Pokedex from "pokedex-promise-v2"

import { Button } from "@/components/ui/button"
import { CardSkeleton } from "@/components/card-skeleton"
import { Pokemon } from "@/components/pokemon"

interface SearchPageProps {
  searchParams: {
    q?: string
  }
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = String(searchParams.q).toLowerCase()
  const P = new Pokedex()
  const pokemons = await P.getPokemonsList({ limit: 1300 })
  const filteredPokemons = pokemons.results.filter((pokemon) =>
    pokemon.name.includes(query)
  )

  if (filteredPokemons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center flex-1">
        <Image
          className="object-contain object-center mb-2 -mt-8"
          alt="Poke Ball"
          src="/images/pokeball.svg"
          width={75}
          height={75}
          priority
        />
        <p className="mb-8 text-xl text-slate-500">
          Pokemon &ldquo;{searchParams.q}&rdquo; not found
        </p>
        <Button asChild>
          <Link href="/">Go home</Link>
        </Button>
      </div>
    )
  }

  return (
    <Suspense fallback={<CardSkeleton />} key={query}>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {filteredPokemons.map((pokemon) => (
          <Pokemon name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
    </Suspense>
  )
}
