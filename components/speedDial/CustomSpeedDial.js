import * as React from "react";

import {SpeedDial, SpeedDialAction, SpeedDialIcon} from "@mui/material";
import {red, blue} from "@mui/material/colors";

const CustomSpeedDial = ({actions}) => {
  return (
    <SpeedDial
      ariaLabel="SpeedDial"
      sx={{
        position: "fixed",
        bottom: 16,
        right: 16,
      }}
      icon={<SpeedDialIcon />}
      FabProps={{
        sx: {
          bgcolor: blue[800],
          "&:hover": {
            bgcolor: red[900],
          },
        },
      }}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={action.action}
        />
      ))}
    </SpeedDial>
  );
};
export default CustomSpeedDial;
