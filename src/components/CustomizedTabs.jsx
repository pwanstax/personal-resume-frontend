import React from "react";
import {styled} from "@mui/material/styles";
import {Tabs, Tab} from "@mui/material";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan" />}}
    centered
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 30,
    width: "100%",
    backgroundColor: "#566F94",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({theme}) => ({
    textTransform: "none",
    marginRight: theme.spacing(3),
    color: "black",
    "&.Mui-selected": {
      color: "#566F94",
      fontWeight: "bold",
    },
  })
);

const CustomizedTabs = ({value, setValue}) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <StyledTabs value={value} onChange={handleChange}>
      <StyledTab label="Home" value="HomePage" />
      <StyledTab label="Portfolio" value="PortfolioPage" />
      <StyledTab label="About Me" value="AboutMePage" />
    </StyledTabs>
  );
};
export default CustomizedTabs;
