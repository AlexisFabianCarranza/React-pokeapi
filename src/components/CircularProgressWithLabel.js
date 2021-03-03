import React from "react";
import Typography from "@material-ui/core/Typography";

import Grid from "@material-ui/core/Grid";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";

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
              //pathColor: `rgba(62, 152, 199, ${value / 100})`,
              textColor: "red",
              trailColor: "red",
              backgroundColor: "red",
            })}
          />
        </div>
      </Grid>
      <Grid item xs={6}>
        <Typography align={"left"} variant={"h5"}>
          {label}
        </Typography>
      </Grid>
    </Grid>
  );
};
/*
<CircularProgress
          variant="static"
          value={value}
          color={"primary"}
          style={{ color: "red" }}
        />
 */
