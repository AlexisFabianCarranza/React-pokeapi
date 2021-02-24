import React, { useContext } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { LoadingContext } from "../utils/contexts/LoadingContext";

export default () => {
  const { isLoading } = useContext(LoadingContext);

  return isLoading && <LinearProgress color="secondary" />;
};
