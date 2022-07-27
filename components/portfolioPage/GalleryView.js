import React from "react";
import {Grid} from "@mui/material";

import ProjectCard from "./ProjectCard";

const GalleryView = ({data}) => {
  return (
    <Grid
      container
      spacing={5}
      paddingLeft={5}
      paddingRight={5}
      marginBottom={5}
      justifyContent="center"
    >
      {data.map((item) => (
        <Grid
          item
          md={6}
          sm={12}
          display="flex"
          justifyContent="center"
          key={item.number}
        >
          <ProjectCard data={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryView;
