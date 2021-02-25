import React, { useContext } from "react";
import { PokemonsContext } from "../utils/contexts/PokemonsContext";
import DashboardUI from "../components/DashboardUI";

export default () => {
  const {
    pokemonsList,
    currentPage,
    handlePageChange,
    totalPages,
  } = useContext(PokemonsContext);

  return (
    <DashboardUI
      pokemonsList={pokemonsList}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
      totalPages={totalPages}
    />
  );
};
