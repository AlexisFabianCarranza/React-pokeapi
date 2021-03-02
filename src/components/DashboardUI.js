import React from "react";
import PokemonCard from "./PokemonCard";
import Grid from "@material-ui/core/Grid";
import Pagination from "./Pagination";

export default ({
  pokemonsList,
  handlePageChange,
  currentPage,
  totalPages,
  handleOpenDetail,
}) => {
  return (
    <Grid
      container
      direction="column"
      justify="space-between"
      alignItems="center"
    >
      <Grid item sm={12} md={12} lg={9} xs={12}>
        <Grid container spacing={3}>
          {pokemonsList.map((pokemonInfo) => (
            <Grid item sm={12} md={6} lg={6} xs={12}>
              <PokemonCard
                pokemonInfo={pokemonInfo}
                showButtonDetails={true}
                handleOpenDetail={handleOpenDetail}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Pagination
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Grid>
    </Grid>
  );
};
