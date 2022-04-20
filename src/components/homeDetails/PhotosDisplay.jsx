import React from "react";
import {Box, Button, Card, CardMedia} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const PhotosDisplay = () => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        <Button sx={{color: "#566F94", fontWeight: "bold"}}>
          <ArrowLeftIcon />
          Previous
        </Button>
        <Button sx={{color: "#566F94", fontWeight: "bold"}}>
          Next
          <ArrowRightIcon />
        </Button>
      </Box>
      <Box position="relative">
        <img
          src={require("../../utils/images/imac.png")}
          alt="imac"
          style={{
            position: "relative",
            top: 0,
            left: 0,
            height: "60vh",
            width: "auto",
            zIndex: 10,
          }}
        />
        <Card
          sx={{
            position: "absolute",
            top: 21.5,
            left: 21.5,
            height: "37vh",
            width: "65vh",
          }}
        >
          <CardMedia
            component="img"
            image={require("../../utils/images/pic.jpg")}
            alt="green iguana"
          />
        </Card>
      </Box>
    </Box>
  );
};
export default PhotosDisplay;
