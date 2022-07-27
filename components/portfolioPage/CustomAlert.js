import React from "react";
import {Alert, AlertTitle, Snackbar} from "@mui/material";

const CustomAlert = ({isAlert, setAlert}) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };
  return (
    <Snackbar open={isAlert} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        sx={{
          position: "fixed",
          bottom: 16,
          left: 16,
          zIndex: 10,
        }}
        onClose={handleClose}
      >
        <AlertTitle>Success</AlertTitle>
        Review success! Thank you so much.
      </Alert>
    </Snackbar>
  );
};
export default CustomAlert;
