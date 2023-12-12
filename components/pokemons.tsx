import Pokedex from "pokedex-promise-v2"

import { Pagination } from "@/components/pagination"
import { Pokemon } from "@/components/pokemon"

interface PokemonsProps {
  page: number
}

export async function Pokemons({ page }: PokemonsProps) {
  const P = new Pokedex()
  const offset = (page - 1) * 10
  const pokemons = await P.getPokemonsList({ limit: 10, offset })

  return (
    <div className="container mx-auto flex flex-col">
      <div className="w-full grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-10">
        {pokemons.results.length === 0 && (
          <p className="text-xl text-slate-500 col-span-12 text-center">
            No pokemons found
          </p>
        )}
        {pokemons.results.map((pokemon) => (
          <Pokemon name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
      <Pagination
        hasPrevPage={!!pokemons.previous}
        hasNextPage={!!pokemons.next}
        page={page}
      />
    </div>
  )
}
