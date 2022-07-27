import React from "react";
import {Box, Grid, Typography, Avatar} from "@mui/material";
import {styled} from "@mui/material/styles";

import IndustryKnowledge from "./IndustryKnowledge";
import WorkExperience from "./WorkExperience";

const RightSide = () => {
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
        marginRight: 15,
      }}
    >
      <IndustryKnowledge />
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
            href="https://medium.com/@pawankanjeam/portfolio-7b6166e250c6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="Medium"
              src="/static/images/medium.png"
              sx={{marginRight: 3}}
            />
          </a>
          <a
            href="mailto:tutor_pawan@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              alt="E-mail"
              src="/static/images/email.png"
              sx={{marginLeft: 3}}
            />
          </a>
        </Grid>
      </Grid>
      <WorkExperience />
      <Typography
        marginLeft="15%"
        fontSize={48}
        textAlign="center"
        color="#537BA9"
      >
        That&apos;s it ! Goodbye...
      </Typography>
    </CustomBox>
  );
};

export default RightSide;
