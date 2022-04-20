import React from "react";
import {Box, Button, Card, CardMedia} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {styled} from "@mui/material/styles";

const PhotosDisplay = () => {
  const CustomBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("lg")]: {
      paddingRight: 50,
      paddingLeft: 50,
    },
  }));
  return (
    <CustomBox sx={{paddingRight: 5}}>
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
            width: "100%",
            height: "auto",
            zIndex: 10,
          }}
        />
        <Card
          sx={{
            position: "absolute",
            borderRadius: 5,
            top: 0,
            left: 0,
            width: "100%",
            height: "65%",
          }}
        >
          <CardMedia
            component="img"
            image={require("../../utils/images/pic.jpg")}
            alt="green iguana"
          />
        </Card>
      </Box>
    </CustomBox>
  );
};
export default PhotosDisplay;
