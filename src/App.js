import React from "react";
import Router from "./utils/navigation/Router";
import { PokemonsProvider } from "./utils/contexts/PokemonsContext";
import { LoadingProvider } from "./utils/contexts/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <PokemonsProvider>
        <Router />
      </PokemonsProvider>
    </LoadingProvider>
  );
}

export default App;
