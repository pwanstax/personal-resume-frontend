import React from "react";
import {red} from "@mui/material/colors";
import {Box, Grid, Typography, Divider} from "@mui/material";

import LeftSide from "../components/aboutMeDetails/LeftSide";
import RightSide from "../components/aboutMeDetails/RightSide";

const AboutMePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #EFF1F6 45%, #ffffff 45%)",
        paddingTop: 10,
      }}
    >
      <Grid container>
        <Grid item md={9} sm={12} display="flex" justifyContent="center">
          <Box marginLeft={5}>
            <Typography textAlign="left" fontSize={48}>
              Finally!!! last page!?
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
          </Box>
        </Grid>
        <Grid item md={3} sm={0} display="flex" justifyContent="center"></Grid>
        <Grid container display="flex" justifyContent="center">
          <Grid item md={6} sm={12} display="flex" justifyContent="center">
            <Box>
              <LeftSide />
            </Box>
          </Grid>
          <Grid item md={6} sm={12} display="flex" justifyContent="center">
            <Box>
              <RightSide />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutMePage;
