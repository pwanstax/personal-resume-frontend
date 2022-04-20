import React from "react";
import {Grid, Typography, Box} from "@mui/material";

const Education = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, transparent 15%, #E6E6E6 15%)",
        paddingTop: 3,
        paddingBottom: 2,
        marginBottom: 7,
      }}
    >
      <Typography
        fontSize={24}
        marginBottom={3}
        color="#537BA9"
        fontWeight="bold"
      >
        Education
      </Typography>
      <Grid
        container
        marginLeft="15%"
        width="85%"
        paddingLeft={5}
        paddingRight={5}
        display="flex"
        justifyContent="center"
      >
        <Grid item xs={12} sm={12} md={12} marginBottom={3}>
          <Typography fontSize={18} textAlign="center">
            Chulalongkorn University
          </Typography>
          <Typography fontSize={18} textAlign="center">
            Computer Engineer
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
