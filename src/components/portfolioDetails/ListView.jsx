import React from "react";
import {Box, Grid} from "@mui/material";

import ProjectBox from "./ProjectBox";

const ListView = () => {
  return (
    <Box sx={{marginTop: 5}}>
      <Grid container spacing={5} marginBottom={5} justifyContent="center">
        <Grid item display="flex" justifyContent="center">
          <ProjectBox side="right" />
        </Grid>
        <Grid item display="flex" justifyContent="center">
          <ProjectBox side="left" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListView;
