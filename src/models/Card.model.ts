import type { Pokemon } from "./Pokemon.model";

export interface PokemonCardProps extends Pick<Pokemon, "name" | "height" | "weight" >{
imgUrl: string,
alt: string,
type1: string,
type2: string,
}