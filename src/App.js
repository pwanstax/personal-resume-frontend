import "./App.css";
import React, {useState} from "react";
import {Box, AppBar} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutMePage from "./pages/AboutMePage";
import CustomizedTabs from "./components/CustomizedTabs";

function App() {
  const [value, setValue] = useState("HomePage");

  const theme = createTheme({
    typography: {
      fontFamily: "Work Sans",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box justifyContent="center">
        <AppBar
          sx={{
            backgroundColor: "#EFF1F6",
          }}
          position="static"
          elevation={0}
        >
          <CustomizedTabs value={value} setValue={setValue} />
        </AppBar>
        {value === "HomePage" ? (
          <HomePage />
        ) : value === "PortfolioPage" ? (
          <PortfolioPage />
        ) : (
          <AboutMePage />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;
