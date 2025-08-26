import useFetch from "./useFetch";
import type { Pokemon } from "../models/Pokemon.model";
import FormatNumber from "../utils/FormatNumber";

export default function usePokemonData(name: string) {
  const selectedPokemonUrl = name
    ? `https://pokeapi.co/api/v2/pokemon/${name}`
    : null;
  const selectedPokemonData = useFetch<Pokemon>(selectedPokemonUrl ?? "");
  const selectedPokemonImg = selectedPokemonData?.sprites?.front_default ?? "";
  const selectedPokemonName = selectedPokemonData?.name ?? "";
  const selectedPokemonType1 = selectedPokemonData?.types[0]?.type?.name ?? "";
  const selectedPokemonType2 = selectedPokemonData?.types[1]?.type?.name ?? "";
  const selectedPokemonWeight = FormatNumber(selectedPokemonData?.weight ?? 0);
  const selectedPokemonHeight = FormatNumber(selectedPokemonData?.height ?? 0);

  return {
    selectedPokemonImg,
    selectedPokemonName,
    selectedPokemonType1,
    selectedPokemonType2,
    selectedPokemonWeight,
    selectedPokemonHeight,
  };
}
