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
          <a
            href="https://instagram.com/__pwan?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="Instagram"
              src={require("../../utils/images/ig.jpg")}
              sx={{marginRight: 3}}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pawan-kanjeam-487409218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="Linkedin"
              src={require("../../utils/images/linkedin.png")}
              sx={{marginLeft: 3}}
            />
          </a>
        </Grid>
      </Grid>
      <Education />
    </CustomBox>
  );
};

export default LeftSide;
