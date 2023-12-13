import Image from "next/image"
import Pokedex from "pokedex-promise-v2"

import { cn } from "@/lib/utils"

interface PokemonProps {
  name: string
}

export async function Pokemon({ name }: PokemonProps) {
  const P = new Pokedex()
  const pokemon = await P.getPokemonByName(name)

  return (
    <div
      className={cn(
        "flex flex-col items-center border-4 rounded-lg justify-center aspect-[10/12]",
        pokemon.types[0].type.name === "grass" && "border-green-400",
        pokemon.types[0].type.name === "fire" && "border-red-400",
        pokemon.types[0].type.name === "water" && "border-blue-400",
        pokemon.types[0].type.name === "electric" && "border-yellow-400",
        pokemon.types[0].type.name === "poison" && "border-purple-400",
        pokemon.types[0].type.name === "bug" && "border-green-400",
        pokemon.types[0].type.name === "flying" && "border-blue-400",
        pokemon.types[0].type.name === "normal" && "border-gray-400",
        pokemon.types[0].type.name === "ground" && "border-yellow-400",
        pokemon.types[0].type.name === "fairy" && "border-pink-400",
        pokemon.types[0].type.name === "fighting" && "border-red-400",
        pokemon.types[0].type.name === "psychic" && "border-pink-400",
        pokemon.types[0].type.name === "rock" && "border-gray-400",
        pokemon.types[0].type.name === "steel" && "border-gray-400",
        pokemon.types[0].type.name === "ice" && "border-blue-400",
        pokemon.types[0].type.name === "ghost" && "border-purple-400",
        pokemon.types[0].type.name === "dragon" && "border-purple-400",
        pokemon.types[0].type.name === "dark" && "border-gray-400",
        pokemon.types[0].type.name === "shadow" && "border-gray-400",
        pokemon.types[0].type.name === "unknown" && "border-gray-400"
      )}
    >
      <div className="w-full flex-1 flex justify-center items-center p-8">
        <Image
          src={
            pokemon.sprites.other["official-artwork"].front_default ||
            "/images/pokeball.svg"
          }
          width={120}
          height={120}
          className="object-contain object-center"
          alt={pokemon.name}
        />
      </div>
      <div
        className={cn(
          "w-full py-4 px-8",
          pokemon.types[0].type.name === "grass" && "bg-green-400",
          pokemon.types[0].type.name === "fire" && "bg-red-400",
          pokemon.types[0].type.name === "water" && "bg-blue-400",
          pokemon.types[0].type.name === "electric" && "bg-yellow-400",
          pokemon.types[0].type.name === "poison" && "bg-purple-400",
          pokemon.types[0].type.name === "bug" && "bg-green-400",
          pokemon.types[0].type.name === "flying" && "bg-blue-400",
          pokemon.types[0].type.name === "normal" && "bg-gray-400",
          pokemon.types[0].type.name === "ground" && "bg-yellow-400",
          pokemon.types[0].type.name === "fairy" && "bg-pink-400",
          pokemon.types[0].type.name === "fighting" && "bg-red-400",
          pokemon.types[0].type.name === "psychic" && "bg-pink-400",
          pokemon.types[0].type.name === "rock" && "bg-gray-400",
          pokemon.types[0].type.name === "steel" && "bg-gray-400",
          pokemon.types[0].type.name === "ice" && "bg-blue-400",
          pokemon.types[0].type.name === "ghost" && "bg-purple-400",
          pokemon.types[0].type.name === "dragon" && "bg-purple-400",
          pokemon.types[0].type.name === "dark" && "bg-gray-400",
          pokemon.types[0].type.name === "shadow" && "bg-gray-400",
          pokemon.types[0].type.name === "unknown" && "bg-gray-400"
        )}
      >
        <h1 className="text-xl capitalize text-center text-slate-900">
          {pokemon.name}
        </h1>
      </div>
    </div>
  )
}
