import React, {useState} from "react";
import {Box, Grid, Typography, Divider} from "@mui/material";
import {red} from "@mui/material/colors";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewAgendaIcon from "@mui/icons-material/ViewAgenda";
import FilterListIcon from "@mui/icons-material/FilterList";

import GalleryView from "../components/portfolioDetails/GalleryView";
import ListView from "../components/portfolioDetails/ListView";
import CustomSpeedDial from "../components/CustomSpeedDial";
import ReviewBox from "../components/ReviewBox";
import CustomAlert from "../components/portfolioDetails/CustomAlert";

const PortfolioPage = () => {
  const [view, setView] = useState("list");
  const [iconView, setIconView] = useState(<GridViewIcon />);
  const [showReview, setShowReview] = useState(false);
  const [isAlert, setAlert] = useState(false);

  const handleView = () => {
    if (view === "gallery") {
      setView("list");
      setIconView(<GridViewIcon />);
    } else {
      setView("gallery");
      setIconView(<ViewAgendaIcon />);
    }
  };
  const handleClickReview = () => {
    setShowReview(true);
  };
  const actions = [
    {icon: <FilterListIcon />, name: "Filter"},
    {icon: iconView, name: "Select view", action: handleView},
    {
      icon: <RateReviewIcon />,
      name: "Rate this web ?!",
      action: handleClickReview,
    },
  ];
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(#eff1f6, #FFFFFF)",
        paddingTop: 10,
      }}
    >
      <Grid container spacing={10}>
        <Grid item xs={9} display="flex" justifyContent="center">
          <Box marginLeft={5}>
            <Typography textAlign="left" fontSize={48}>
              Here is what i’ve been through!
            </Typography>
            <Divider
              sx={{
                background: red[900],
                borderWidth: 2,
                maxWidth: 200,
                margin: "auto",
                marginTop: 3,
                marginBottom: 10,
              }}
            />
            <CustomSpeedDial actions={actions} />
            <ReviewBox
              showReview={showReview}
              setShowReview={setShowReview}
              setAlert={setAlert}
            />
            <CustomAlert isAlert={isAlert} setAlert={setAlert} />
          </Box>
        </Grid>
        <Grid item xs={3} display="flex" justifyContent="center" />
      </Grid>
      {view === "gallery" ? <GalleryView /> : <ListView />}
    </Box>
  );
};

export default PortfolioPage;
