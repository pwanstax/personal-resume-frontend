import React from "react";
import {Box, Grid, Typography} from "@mui/material";

import ProjectBox from "./ProjectBox";

const ListView = ({data}) => {
  return (
    <Grid container spacing={5} marginBottom={5}>
      {data.map((item) =>
        item.number % 2 === 0 ? (
          <Grid item display="flex" width="100%" justifyContent="center">
            <ProjectBox side="right" data={item} />
          </Grid>
        ) : (
          <Grid item display="flex" width="100%" justifyContent="center">
            <ProjectBox side="left" data={item} />
          </Grid>
        )
      )}
    </Grid>
  );
};

export default ListView;
