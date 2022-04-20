import React from "react";
import {Box, Grid, Typography} from "@mui/material";
import {INDUSTRY_KNOWLEDGE} from "../../utils/constants/aboutMeInfo";
const IndustryKnowledge = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(90deg, transparent 15%, #E6E6E6 15%)",
        paddingTop: 3,
        paddingBottom: 2,
      }}
    >
      <Typography
        fontSize={24}
        marginBottom={3}
        color="#537BA9"
        fontWeight="bold"
      >
        Industry Knowledge
      </Typography>
      <Grid
        container
        marginLeft="15%"
        width="85%"
        paddingLeft={5}
        paddingRight={5}
      >
        {INDUSTRY_KNOWLEDGE.map((each) => (
          <Grid item xs={12} sm={12} md={12} marginBottom={3} key={each}>
            <Typography fontSize={18} textAlign="center">
              {each}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default IndustryKnowledge;
