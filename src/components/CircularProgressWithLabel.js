import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import pokemonStatsColor from "../utils/constants/pokemonStatsColor";

export default ({ value, label, maxSize }) => {
  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
    >
      <Grid item xs={6}>
        <div style={{ maxWidth: maxSize, maxHeight: maxSize }}>
          <CircularProgressbar
            value={value}
            text={`${value}%`}
            styles={buildStyles({
              pathColor: pokemonStatsColor(label),
              textColor: pokemonStatsColor(label),
            })}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography align={"center"} variant={"body1"}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};
