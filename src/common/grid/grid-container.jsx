import React from "react";
import { Grid } from "@mui/material";

const GridContainer = ({ spacing = 4, children, sx, columns }) => {
  return (
    <Grid item container spacing={spacing} sx={sx} columns={columns}>
      {children}
    </Grid>
  );
};

export default GridContainer;
