import React from "react";
import {Box, Grid, Typography, Divider} from "@mui/material";

import PhotosDisplay from "../components/homeDetails/PhotosDisplay";

function HomePage() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #EFF1F6 85%, white 15%)",
        paddingTop: 10,
      }}
    >
      <Grid item md={6} sm={12} display="flex" justifyContent="center">
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
              background: "#313130",
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
            Fullstack developer / Data Science
          </Typography>
          <Typography fontSize={18} textAlign="left" color="#626261">
            I don’t have anything to present to you so much right now, acually I
            have nothing to say so do you guys know that whales are a widely
            distributed and diverse group of fully aquatic placental marine
            mammals. They are an informal grouping within the infraorder
            Cetacea, which usually excludes dolphins and porpoises. By the way,
            right now I’m just a student and I’m not fullstack dev or data
            science specialist yet but I’ll be soon and also don’t have any
            pictures so, here’s come a whale, oh sorry it’s just a random
            picture from internet ->
          </Typography>
        </Box>
      </Grid>
      <Grid
        item
        md={6}
        sm={12}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box paddingTop={22}>
          <PhotosDisplay />
        </Box>
      </Grid>
    </Grid>
  );
}

export default HomePage;
