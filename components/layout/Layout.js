import {Box} from "@mui/material";
import MainNavigation from "./MainNavigation";

function Layout(props) {
  return (
    <Box>
      <MainNavigation />
      <Box>{props.children}</Box>
    </Box>
  );
}

export default Layout;
