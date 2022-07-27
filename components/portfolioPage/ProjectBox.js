import React from "react";
import {Box} from "@mui/material";

import RightBox from "./box/RightBox";
import LeftBox from "./box/LeftBox";

const ProjectBox = ({side, data}) => {
  return (
    <Box width="100%">
      {side === "right" ? (
        <Box>
          <RightBox data={data} />
        </Box>
      ) : (
        <Box>
          <LeftBox data={data} />
        </Box>
      )}
    </Box>
  );
};

export default ProjectBox;
