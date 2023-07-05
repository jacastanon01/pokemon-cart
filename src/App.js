import "./styles.css";
import { useState } from "react";
import { usePokemon } from "./hooks/usePokemon";
import PokeCard from "./components/PokeCard";
import CapturedPokemon from "./components/CapturedPokemon";

function Page({ offset }) {
  const { data: pokemon, isLoading, error } = usePokemon(
    `pokemon?offset=${offset}`
  );
  return (
    <ul>
      {!isLoading &&
        pokemon?.results.map((p) => <PokeCard pokemon={p} key={p.name} />)}
    </ul>
  );
}

export default function App() {
  const [page, setPage] = useState(0);
  const [showCapturedPokemon, setShowCapturedPokemon] = useState(false);
  let pages = [];

  for (let i = 0; i <= page; i++) {
    pages.push(<Page key={i} offset={page * 20} />);
  }
  return (
    <div className="App">
      <button onClick={() => setShowCapturedPokemon(!showCapturedPokemon)}>
        {!showCapturedPokemon
          ? "View captured pokemon"
          : "Back to pokemon list"}
      </button>
      {!showCapturedPokemon ? (
        <div>
          {pages}
          <button onClick={() => setPage(page + 1)}>Load more pokemon</button>
        </div>
      ) : (
        <CapturedPokemon />
      )}
    </div>
  );
}

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `https://pokeapi.co/api/v2/pokemon?offset=${pageIndex}`; // SWR key
};
