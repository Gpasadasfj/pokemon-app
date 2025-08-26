import Capitalize from "../utils/Capitalize";
import PokemonTypeImg from "../data/PokemonTypesUrls";
import type { PokemonCardProps } from "../models/Card.model";

export default function PokemonCard({
  imgUrl,
  alt,
  name,
  type1,
  type2,
  weight,
  height,
}: PokemonCardProps) {
  return (
      <div>
        <img src={imgUrl} alt={alt} />
        <h2>{Capitalize(name)}</h2>
        <div>
          <img src={PokemonTypeImg(type1)} alt="" style={{ height: "27px" }} />{" "}
          {type2 && (
            <img
              src={PokemonTypeImg(type2)}
              alt=""
              style={{ height: "27px" }}
            />
          )}
        </div>
        <h3>Weight: {weight} Kg</h3>
        <h3>Height: {height} m</h3>
      </div>
  );
}
