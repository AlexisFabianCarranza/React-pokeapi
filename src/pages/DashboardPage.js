import React, { useContext, useState } from "react";
import { PokemonsContext } from "../utils/contexts/PokemonsContext";
import DashboardUI from "../components/DashboardUI";
import Container from "../components/Container";
import Modal from "@material-ui/core/Modal";
import PokemonDetailUI from "../components/PokemonDetailUI";
import Button from "@material-ui/core/Button";
import { useMediaQuery, useTheme } from "@material-ui/core";

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
