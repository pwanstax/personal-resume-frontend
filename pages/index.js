import React from "react";
import {Box, Grid, Typography, Divider} from "@mui/material";
import {red} from "@mui/material/colors";
import {styled} from "@mui/material/styles";

import PhotosDisplay from "../components/homePage/PhotosDisplay";

const HomePage = () => {
  const CustomTypography = styled(Typography)(({theme}) => ({
    [theme.breakpoints.down(1220)]: {
      fontSize: 17.5,
    },
  }));

  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #EFF1F6 85%, white 85%)",
        paddingTop: 10,
      }}
    >
      <Grid item lg={6} md={12} sm={12} display="flex" justifyContent="center">
        <Box
          sx={{
            paddingLeft: 15,
            paddingRight: 5,
          }}
        >
          <Typography fontSize={48} textAlign="center" color="#313130">
            Hi guys! I’m Pwan
          </Typography>
          <Divider
            sx={{
              background: red[900],
              borderWidth: 2,
              maxWidth: 200,
              margin: "auto",
              marginTop: 3,
              marginBottom: 10,
            }}
          />
          <Typography
            fontSize={24}
            color="#566F94"
            fontWeight="bold"
            sx={{
              marginBottom: 3,
            }}
            textAlign="right"
          >
            Frontend / Backend developer
          </Typography>
          <CustomTypography fontSize={18} textAlign="left" color="#626261">
            Hi Again! I am Pawan Kanjeam (Ter). I am currently studying for a
            Bachelor’s Degree in Computer Engineering from Chulalongkorn
            University. My interest in technology and innovation drives me to
            become a Computer Engineering student. I believe that this field is
            boundless, the technology keeps evolving, and so many things are
            waiting for me to explore. My current goal is to gain as much
            knowledge as possible in this field and thrive in my career.
          </CustomTypography>
        </Box>
      </Grid>
      <Grid
        item
        lg={6}
        md={12}
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box marginTop={3}>
          <PhotosDisplay />
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
