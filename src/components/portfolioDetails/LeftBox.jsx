import React from "react";
import {Button, Box, Grid, Typography} from "@mui/material";

const LeftBox = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        background: "linear-gradient(90deg, #E6E6E6 70%, transparent 70%)",
        paddingTop: 5,
      }}
    >
      <Grid item sm={5}></Grid>
      <Grid item sm={7} display="flex" justifyContent="center" color="#537BA9">
        <Typography fontSize={30} marginBottom={3} textAlign="center">
          Depression Web Application
        </Typography>
      </Grid>
      <Grid item>
        <Box
          marginRight="30%"
          paddingLeft="5%"
          paddingRight="5%"
          textAlign="center"
        >
          <Typography fontSize={20}>
            This web application is under Depression AI project of Chulalongkorn
            University (D Mind: Detection and Monitoring Intelligence Network
            for Depression) which participates sicThailand in the final round.
            In my part which is backend is to process the inputted audio file
            from the Department of Mental Health into text (JSON file) and to
            process the same audio file to Voice Activity Detection (VAD) in CSV
            form.
          </Typography>
          <Button
            sx={{
              fontSize: 20,
              textTransform: "none",
              marginTop: 2,
              marginBottom: 3,
            }}
          >
            More Information
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LeftBox;
