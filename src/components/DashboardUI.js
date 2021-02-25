import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@material-ui/core/Grid";
import PokemonDetail from "./PokemonDetail";
import Pagination from "./Pagination";

export default ({
  pokemonsList,
  handlePageChange,
  currentPage,
  totalPages,
}) => {
  const [pokemonDetailsOpened, setPokemonDetailsOpened] = useState(false);
  const [pokemonSelected, setPokemonSelected] = useState(null);

  const handlePokemonDetailOpen = (pokemonSelected) => {
    setPokemonDetailsOpened(true);
    setPokemonSelected(pokemonSelected);
  };

  const handlePokemonDetailClose = () => {
    setPokemonDetailsOpened(false);
    setPokemonSelected(null);
  };

  return (
    <>
      <Grid container spacing={3}>
        {pokemonsList.map((pokemonInfo) => (
          <Grid item sm={12} md={6} lg={4} xs={12}>
            <PokemonCard
              pokemonInfo={pokemonInfo}
              handlePokemonDetailOpen={handlePokemonDetailOpen}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        handlePageChange={handlePageChange}
        currentPage={currentPage}
        totalPages={totalPages}
      />
      <PokemonDetail
        pokemonDetailsOpened={pokemonDetailsOpened}
        handlePokemonDetailClose={handlePokemonDetailClose}
        pokemonInfo={pokemonSelected}
      />
    </>
  );
};
