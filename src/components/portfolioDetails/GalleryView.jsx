import React from "react";
import {Box, Grid} from "@mui/material";

import ProjectCard from "./ProjectCard";

const GalleryView = () => {
  return (
    <Grid
      container
      spacing={5}
      paddingLeft={5}
      paddingRight={5}
      marginBottom={5}
      justifyContent="center"
    >
      <Grid item md={6} sm={12} display="flex" justifyContent="center">
        <Box marginTop={5}>
          <ProjectCard />
        </Box>
      </Grid>
      <Grid item md={6} sm={12} display="flex" justifyContent="center">
        <Box marginTop={5}>
          <ProjectCard />
        </Box>
      </Grid>
      <Grid item md={6} sm={12} display="flex" justifyContent="center">
        <Box marginTop={5}>
          <ProjectCard />
        </Box>
      </Grid>
      <Grid item md={6} sm={12} display="flex" justifyContent="center">
        <Box marginTop={5}>
          <ProjectCard />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GalleryView;
