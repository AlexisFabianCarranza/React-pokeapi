import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

export default ({ pokemonInfo }) => {
  return (
    <Grid
      container
      direction="row"
      justify="space-around"
      alignItems="flex-start"
    >
      {pokemonInfo.stats.map((stats) => (
        <Grid item sm={6} md={4} lg={4} xs={6}>
          <CircularProgressWithLabel
            value={stats.base_stat}
            label={stats.stat.name}
            maxSize={"100px"}
          />
        </Grid>
      ))}
    </Grid>
  );
};
