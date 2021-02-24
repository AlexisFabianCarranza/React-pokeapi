import React from "react";
import Router from "./utils/navigation/Router";
import { PokemonsProvider } from "./utils/contexts/PokemonsContext";
import Header from "./components/Header";
import { LoadingProvider } from "./utils/contexts/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <PokemonsProvider>
        <Header />
        <Router />
      </PokemonsProvider>
    </LoadingProvider>
  );
}

export default App;
