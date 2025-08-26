export default function PokemonTypeImg(type: string) {
  let url = "";
  switch (type) {
    case "normal":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/1.png";
      break;
    case "fighting":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/2.png";
      break;
    case "flying":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/3.png";
      break;
    case "poison":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/4.png";
      break;
    case "ground":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/5.png";
      break;
    case "rock":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/6.png";
      break;
    case "bug":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/7.png";
      break;
    case "ghost":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/8.png";
      break;
    case "steel":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/9.png";
      break;
    case "fire":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/10.png";
      break;
    case "water":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/11.png";
      break;
    case "grass":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/12.png";
      break;
    case "electric":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/13.png";
      break;
    case "psychic":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/14.png";
      break;
    case "ice":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/15.png";
      break;
    case "dragon":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/16.png";
      break;
    case "dark":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/17.png";
      break;
    case "fairy":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/18.png";
      break;
    case "stellar":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-ix/scarlet-violet/19.png";
      break;
    case "unknown":
      url =
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/types/generation-iii/colosseum/10001.png";
      break;
    case "shadow":
      url = "";
  }
  return url;
}
