import type {NextPage} from "next";
import Image from "next/image";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import HomePage from "../components/pages/homePage/HomePage";
import WorkPage from "../components/pages/workPage/WorkPage";

const MainPage: NextPage = () => {
  return (
    <>
      <HomePage />
      <div id="work" className="content-divider">
        <div></div>
      </div>
      <WorkPage />
      <div id="aboutMe" className="content-divider">
        <div></div>
      </div>
      <AboutPage />
    </>
  );
};

export default MainPage;
