import { Pokemon } from "@/components/pokemon";
import Pokedex from "pokedex-promise-v2";
export default async function Home() {
  const P = new Pokedex();
  const pokemons = await P.getPokemonsList({ limit: 24, offset: 0 });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="grid grid-cols-6 gap-8">
        {pokemons.results.map((pokemon) => (
          <Pokemon name={pokemon.name} key={pokemon.name} />
        ))}
      </div>
    </main>
  );
}
