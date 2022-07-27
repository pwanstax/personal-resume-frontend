import React from "react";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const ProjectCard = ({data}) => {
  return (
    <Card
      sx={{
        display: "flex",
        maxWidth: 900,
        maxHeight: "auto",
        borderRadius: 4,
        boxShadow: 3,
        borderWidth: 2,
        "&:hover": {
          backgroundColor: "#E6E6E6",
          cursor: "pointer",
        },
      }}
      onClick={() => window.open(data.link)}
    >
      <CardMedia
        component="img"
        sx={{maxWidth: "40%", borderRadius: 0}}
        image={data.image}
        alt="Live from space album cover"
      />
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <CardContent sx={{flex: "1 0 auto"}}>
          <Typography textAlign="center" fontSize={30} color="#537BA9">
            {data.topic}
          </Typography>
          <Typography marginTop={2} textAlign="center" color="#626261">
            {data.time}
          </Typography>
          <Typography marginTop={2} textAlign="center" color="#626261">
            {data.description}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
export default ProjectCard;
