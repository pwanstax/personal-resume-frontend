import React from "react";
import {Box} from "@mui/material";

import RightBox from "./RightBox";
import LeftBox from "./LeftBox";

const ProjectBox = ({side}) => {
  return (
    <Box>
      {side === "right" ? (
        <Box>
          <RightBox />
        </Box>
      ) : (
        <Box>
          <LeftBox />
        </Box>
      )}
    </Box>
  );
};

export default ProjectBox;
