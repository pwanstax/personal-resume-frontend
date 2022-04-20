import * as React from "react";
import PropTypes from "prop-types";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {Typography, Grid} from "@mui/material";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="large" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="large" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="large" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="large" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="large" />,
    label: "Very Satisfied",
  },
};

const IconContainer = (props) => {
  const {value, ...other} = props;
  return (
    <Typography marginRight={1} {...other}>
      {customIcons[value].icon}
    </Typography>
  );
};

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

const RatingEmoji = ({onChange, rating}) => {
  return (
    <Grid container spacing={10}>
      <Grid item xs={12} display="flex">
        <Rating
          value={parseInt(rating)}
          IconContainerComponent={IconContainer}
          onChange={(e) => onChange(e.target.value)}
          highlightSelectedOnly
        />
      </Grid>
    </Grid>
  );
};
export default RatingEmoji;
