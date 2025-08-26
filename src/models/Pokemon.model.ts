export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonSprites {
  front_default: string;
}

export interface Pokemon {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
}

export type PokemonInfo = {
  name: string;
  url: string;
};

export type PokemonIndex = {
  results: PokemonInfo[];
};


