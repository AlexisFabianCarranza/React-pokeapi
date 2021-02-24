import React, { useContext, useEffect } from "react";
import { PokemonsContext } from "../utils/contexts/PokemonsContext";
import DashboardUI from "../components/DashboardUI";

export default () => {
  const {
    pokemonsList,
    fetchPockemonsList,
    currentPage,
    handlePageChange,
  } = useContext(PokemonsContext);

  useEffect(() => {
    if (Array.isArray(pokemonsList) && pokemonsList.length === 0) {
      fetchPockemonsList();
    }
  }, [pokemonsList]);
  console.log(pokemonsList);

  return (
    <DashboardUI
      pokemonsList={pokemonsList}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  );
};
