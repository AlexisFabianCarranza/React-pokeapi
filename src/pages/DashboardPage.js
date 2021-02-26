import React, { useContext } from "react";
import { PokemonsContext } from "../utils/contexts/PokemonsContext";
import DashboardUI from "../components/DashboardUI";
import Container from "../components/Container";

export default () => {
  const {
    pokemonsList,
    currentPage,
    handlePageChange,
    totalPages,
  } = useContext(PokemonsContext);

  return (
    <Container>
      <DashboardUI
        pokemonsList={pokemonsList}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </Container>
  );
};
