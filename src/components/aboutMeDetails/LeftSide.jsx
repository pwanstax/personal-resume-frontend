import React from "react";
import {Box, Grid, Avatar} from "@mui/material";
import {styled} from "@mui/material/styles";
import ToolNTech from "./ToolNTech";
import Education from "./Education";

const LeftSide = () => {
  const CustomBox = styled(Box)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
      marginTop: 0,
      marginLeft: 20,
      width: "90%",
    },
  }));
  return (
    <CustomBox
      sx={{
        width: "75%",
        marginLeft: 15,
        marginTop: 20,
      }}
    >
      <ToolNTech />
      <Grid
        container
        paddingLeft="15%"
        marginTop={3}
        marginBottom={3}
        display="flex"
        justifyContent="center"
      >
        <Grid item display="flex" justifyContent="center">
          <Avatar
            alt="Medium"
            src={require("../../utils/images/medium.png")}
            sx={{marginRight: 3}}
          />
          <Avatar
            alt="Medium"
            src={require("../../utils/images/medium.png")}
            sx={{marginLeft: 3}}
          />
        </Grid>
      </Grid>
      <Education />
    </CustomBox>
  );
};

export default LeftSide;
