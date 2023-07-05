import { usePokemon } from "../hooks/usePokemon";
import { useContext } from "react";
import { PokemonDispatchContext } from "../context/PokemonContext";

function PokeCard({ pokemon }) {
  const dispatch = useContext(PokemonDispatchContext);
  const { data, error } = usePokemon("pokemon", pokemon.name);

  if (error) return <div>Uh oh!</div>;

  return (
    data && (
      <li className="poke-list" key={data.id}>
        #{data.id} {data.name}
        <img src={data.sprites.front_default} />
        <div className="buttons">
          <button
            onClick={() => {
              console.log("In the onclick");
              dispatch({
                type: "ADD",
                id: data.id,
                name: data.name
              });
              alert(`you caught a ${data.name}!`);
            }}
          >
            Add
          </button>
        </div>
      </li>
    )
  );
}

export default PokeCard;
