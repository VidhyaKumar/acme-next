import Image from "next/image";
import Pokedex from "pokedex-promise-v2";

interface PokemonProps {
  name: string;
}

export async function Pokemon({ name }: PokemonProps) {
  const P = new Pokedex();
  const pokemon = await P.getPokemonByName(name);

  return (
    <div className="flex flex-col items-center border p-4 rounded-2xl justify-center">
      <Image
        src={
          pokemon.sprites.other["official-artwork"].front_default ||
          "/images/pokeball.svg"
        }
        width={100}
        height={100}
        className="object-contain object-center"
        alt={pokemon.name}
      />
      <h1 className="text-xl capitalize text-center">{pokemon.name}</h1>
    </div>
  );
}
