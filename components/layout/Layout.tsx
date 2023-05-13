import {useEffect} from "react";
import MainNavigation from "./MainNavigation";

const Layout = (props: any) => {
  return (
    <div className="layout-container ">
      <MainNavigation />
      <div>{props.children}</div>
    </div>
  );
};

export default Layout;
