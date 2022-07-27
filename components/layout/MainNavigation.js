import {useEffect, useState} from "react";
// import Link from "next/link";
import {Box, AppBar} from "@mui/material";
import CustomizedTabs from "./CustomizedTabs";

const MainNavigation = () => {
  return (
    <Box justifyContent="center">
      <AppBar
        sx={{
          backgroundColor: "#EFF1F6",
        }}
        position="static"
        elevation={0}
      >
        <CustomizedTabs />
      </AppBar>
    </Box>
  );
};

export default MainNavigation;
