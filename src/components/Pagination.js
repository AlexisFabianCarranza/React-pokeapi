import React from "react";
import LinearProgress from "./LinearProgress";
import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";

export default ({ currentPage, handlePageChange }) => {
  return (
    <Grid
      container
      direction={"column"}
      justify={"center"}
      alignItems={"center"}
      spacing={5}
    >
      <Grid item xs={12}>
        <div style={{ padding: 10 }}>
          <LinearProgress />
        </div>

        <Pagination
          count={10}
          color="secondary"
          variant="outlined"
          page={currentPage}
          onChange={handlePageChange}
        />
      </Grid>
    </Grid>
  );
};
