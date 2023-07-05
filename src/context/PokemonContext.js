import { createContext, useContext, useReducer } from "react";

export const PokemonContext = createContext(null);
export const PokemonDispatchContext = createContext(null);

export function PokemonProvider({ children }) {
  const [state, dispatch] = useReducer(pokemonReducer, []);
  return (
    <PokemonContext.Provider value={state}>
      <PokemonDispatchContext.Provider value={dispatch}>
        {children}
      </PokemonDispatchContext.Provider>
    </PokemonContext.Provider>
  );
}
function pokemonReducer(state, action) {
  switch (action.type) {
    case "ADD": {
      return [
        ...state,
        {
          pokemonId: action.id,
          pokemonName: action.name
        }
      ];
    }
    case "DELETE":
      return state.filter((p) => p.id !== action.id);
    default:
      return state;
  }
}
