import React from "react";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";

const ProjectCard = () => {
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
      onClick={() => window.open("https://medium.com/@pawankanjeam")}
    >
      <CardMedia
        component="img"
        sx={{maxWidth: "40%", borderRadius: 4}}
        image={require("../../utils/images/pic.jpg")}
        alt="Live from space album cover"
      />
      <Box sx={{display: "flex", flexDirection: "column"}}>
        <CardContent sx={{flex: "1 0 auto"}}>
          <Typography textAlign="center" fontSize={30} color="#537BA9">
            Depression Web Application
          </Typography>
          <Typography marginTop={2} textAlign="center" color="#626261">
            This web application is under Depression AI project of Chulalongkorn
            University (D Mind: Detection and Monitoring Intelligence Network
            for Depression) which participates sicThailand in the final round.
            In my part which is backend is to process the inputted audio file
            from the Department of Mental Health into text (JSON file) and to
            process the same audio file to Voice Activity Detection (VAD) in CSV
            form.
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};
export default ProjectCard;
