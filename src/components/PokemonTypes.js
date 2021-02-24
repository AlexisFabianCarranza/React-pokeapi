import React from "react";
import Chip from "@material-ui/core/Chip";
import pokemonTypeColors from "../utils/constants/pokemonTypeColors";
import Grid from "@material-ui/core/Grid";

export default ({ pokemonTypes }) => {
  return (
    <Grid container justify={"center"}>
      {pokemonTypes.map((typeInfo) => (
        <Grid item xs={3}>
          <Chip
            label={typeInfo.type.name}
            variant="default"
            style={{ backgroundColor: pokemonTypeColors(typeInfo.type.name) }}
          />
        </Grid>
      ))}
    </Grid>
  );
};
