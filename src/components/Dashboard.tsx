import PokemonNameInput from "./PokemonNameInput";
import { useState } from "react";
import usePokemonData from "../hooks/usePokemonData";
import PokemonCard from "./PokemonCard";
import type { PokemonOption } from "../models/Select.model";

export default function Dashboard() {
  const [pokemonInput, setPokemonInput] = useState<PokemonOption | null>(null);

  const {
    selectedPokemonImg,
    selectedPokemonName,
    selectedPokemonType1,
    selectedPokemonType2,
    selectedPokemonWeight,
    selectedPokemonHeight,
  } = usePokemonData(pokemonInput?.value ?? "");

  return (
    <>
      <PokemonNameInput onSelect={setPokemonInput} value={pokemonInput} />

      {pokemonInput && !selectedPokemonName && <p>Cargando Pokémon...</p>}
      {pokemonInput && selectedPokemonName && (
        <PokemonCard
          imgUrl={selectedPokemonImg}
          alt={`${selectedPokemonName} image`}
          name={selectedPokemonName}
          type1={selectedPokemonType1}
          type2={selectedPokemonType2}
          weight={selectedPokemonWeight}
          height={selectedPokemonHeight}
        />
      )}
    </>
  );
}
