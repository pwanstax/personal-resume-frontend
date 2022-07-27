import {styled} from "@mui/material/styles";
import {Tabs, Tab, Box} from "@mui/material";
import Link from "next/link";
import {useRouter} from "next/router";
import {useState} from "react";

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    onChange={props.onChange}
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

const CustomizedTabs = () => {
  const [value, setValue] = useState("/");
  const router = useRouter();

  const handleChange = (event, newValue) => {
    router.push(
      {
        pathname: newValue,
      },
      undefined,
      {shallow: true}
    );

    setValue(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange}>
      <StyledTab label="Home" value="/" />
      <StyledTab label="Portfolio" value="/PortfolioPage" />
      <StyledTab label="About Me" value="/AboutMePage" />
    </StyledTabs>
  );
};
export default CustomizedTabs;
