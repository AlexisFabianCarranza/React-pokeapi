import React from "react";
import { Link } from "react-router-dom";

export default (props) => (
  <Link style={{ textDecoration: "none", color: "inherit" }} {...props} />
);
