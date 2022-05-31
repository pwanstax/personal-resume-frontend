import React from "react";
import {Button, Box, Grid, Typography} from "@mui/material";

const LeftBox = ({data}) => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        background: "linear-gradient(90deg, #E6E6E6 70%, transparent 70%)",
        paddingTop: 5,
        width: "100%",
      }}
    >
      <Grid item xs={5}></Grid>
      <Grid item xs={7} display="flex" justifyContent="center" color="#537BA9">
        <Typography
          fontSize={30}
          marginBottom={3}
          textAlign="center"
          fontWeight="bold"
        >
          {data.topic}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Box
          marginRight="30%"
          paddingLeft="5%"
          paddingRight="5%"
          textAlign="center"
        >
          <Typography fontSize={23} marginBottom={2}>
            {data.description}
          </Typography>
          <Typography fontSize={20} marginBottom={3}>
            ({data.time})
          </Typography>
          <Typography fontSize={20} textAlign="center">
            {data.info.map((each) => (
              <Typography>- {each}</Typography>
            ))}
          </Typography>

          <Button
            sx={{
              fontSize: 20,
              textTransform: "none",
              marginTop: 2,
              marginBottom: 3,
            }}
            onClick={() => window.open(data.link)}
          >
            More Information
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftBox;
