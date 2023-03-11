import { Grid } from "@mui/material";
import React from "react";

const GridChild = ({ lg, md = 6, xs = 12, children, sx }) => {
  return (
    <Grid item lg={lg} md={md} xs={xs} sx={sx}>
      {children}
    </Grid>
  );
};

export default GridChild;
