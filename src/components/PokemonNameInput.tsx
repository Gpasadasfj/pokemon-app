import Select from "react-select";
import useFetch from "../hooks/useFetch";
import type { PokemonIndex, PokemonInfo } from "../models/Pokemon.model";
import type { PokemonOption, PokemonInputProps } from "../models/Select.model";

const AllPokemonsUrl =
  "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

export default function PokemonNameInput({
  onSelect,
  value,
}: PokemonInputProps) {
  const pokemonData = useFetch<PokemonIndex>(AllPokemonsUrl);

  const options: PokemonOption[] = (pokemonData?.results ?? []).map(
    (p: PokemonInfo) => ({
      value: p.name,
      label: p.name,
    })
  );

  return (
    <Select
      isClearable={true}
      value={value}
      onChange={onSelect}
      options={options}
    />
  );
}
