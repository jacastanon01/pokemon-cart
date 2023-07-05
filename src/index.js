import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SWRConfig } from "swr";
import App from "./App";
import { PokemonProvider } from "./context/PokemonContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const fetcher = (...args) => fetch(...args).then((data) => data.json());

root.render(
  <StrictMode>
    <SWRConfig value={{ fetcher }}>
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </SWRConfig>
  </StrictMode>
);
