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
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {pokemons.results.length === 0 && (
          <p className="col-span-12 text-xl text-center text-slate-500">
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
    </>
  )
}
