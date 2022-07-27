import React, {useState} from "react";
import {Box, Button, Card, CardMedia, Grid, Typography} from "@mui/material";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import {styled} from "@mui/material/styles";
import Image from "next/image";

const PhotosDisplay = () => {
  const [imageW, setImageW] = useState(1000);
  const [imageH, setImageH] = useState(600);

  const CustomBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("lg")]: {
      paddingRight: 50,
      paddingLeft: 50,
    },
  }));

  const nextImage = () => {
    if (imageH > 1700) {
      setImageW(1000);
      setImageH(600);
    } else {
      setImageW(imageW + 5);
      setImageH(imageH + 3);
    }
  };
  const prevImage = () => {
    if (imageH < 300) {
      setImageW(1000);
      setImageH(600);
    } else {
      setImageW(imageW - 5);
      setImageH(imageH - 3);
    }
  };

  return (
    <CustomBox sx={{paddingRight: 5}}>
      <Grid container>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Typography sx={{color: "#566F94", fontWeight: "bold", fontSize: 20}}>
            Random Image form Unsplash
          </Typography>
        </Grid>
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box>
            <Button
              sx={{color: "#566F94", fontWeight: "bold"}}
              onClick={(_) => prevImage()}
            >
              <ArrowLeftIcon />
              Previous
            </Button>

            <Button
              sx={{color: "#566F94", fontWeight: "bold"}}
              onClick={(_) => nextImage()}
            >
              Next
              <ArrowRightIcon />
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box position="relative">
        <Image
          src={require("../../public/static/images/imac.png")}
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
            zIndex: 5,
          }}
        >
          <CardMedia
            component="img"
            image={`https://source.unsplash.com/random/${imageW}x${imageH}`}
            alt="random from unsplash"
          />
        </Card>
      </Box>
    </CustomBox>
  );
};
export default PhotosDisplay;
