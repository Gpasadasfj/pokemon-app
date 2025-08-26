export type PokemonInputProps = {
  onSelect: (option: PokemonOption | null) => void;
  value: PokemonOption | null;
};

export type PokemonOption = { value: string; label: string };