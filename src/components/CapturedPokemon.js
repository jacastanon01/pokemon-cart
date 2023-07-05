import { useContext } from "react";
import {
  PokemonContext,
  PokemonDispatchContext
} from "../context/PokemonContext";

function CapturedPokemon() {
  const caughtPokemon = useContext(PokemonContext);
  const dispatch = useContext(PokemonDispatchContext);

  return (
    <ul>
      {caughtPokemon.length <= 0
        ? "No pokemon caught! Get back out there"
        : caughtPokemon.map((c) => (
            <li key={c.pokemonId}>
              {c.pokemonName}{" "}
              <button
                onClick={() => {
                  dispatch({
                    type: "DELETE",
                    id: c.id
                  });
                }}
              >
                Release pokemon
              </button>
            </li>
          ))}
    </ul>
  );
}

export default CapturedPokemon;
