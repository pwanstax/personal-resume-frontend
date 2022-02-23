import "./App.css";
import React from "react";
import useBarIndexHook from "./hooks/barIndex";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import AppBar from "@mui/material/AppBar";
import MainPage from "./pages/MainPage";
import StudyPage from "./pages/StudyPage";
import AboutMePage from "./pages/AboutMePage";

function App() {
  const { barIndex, setBarIndex } = useBarIndexHook(0);

  const handleTab = (e, val) => {
    setBarIndex(val);
  };

  return (
    <div>
      <AppBar color="transparent" position="static">
        <Tabs value={barIndex} onChange={handleTab} centered>
          <Tab label="Home" />
          <Tab label="study" />
          <Tab label="About me" />
        </Tabs>
      </AppBar>
      <TabPanel site={<MainPage />} value={barIndex} index={0} />
      <TabPanel site={<StudyPage />} value={barIndex} index={1} />
      <TabPanel site={<AboutMePage />} value={barIndex} index={2} />
    </div>
  );
}

function TabPanel(props) {
  const { site, value, index } = props;
  return value === index && site;
}

export default App;
