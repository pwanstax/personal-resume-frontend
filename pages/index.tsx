import type {NextPage} from "next";
import Image from "next/image";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import AboutPage from "../components/pages/aboutPage/AboutPage";
import HomePage from "../components/pages/homePage/HomePage";
import WorkPage from "../components/pages/workPage/WorkPage";
import Head from "next/head";

const MainPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pawan Kanjeam</title>
      </Head>
      <HomePage />
      <div id="work" className="content-divider">
        My Opinion of Programming {/*i love coding but it hates me...*/}
      </div>
      <WorkPage />
      <div id="aboutMe" className="content-divider">
        Click to Hire me!!! Please 🥺
      </div>
      <AboutPage />
    </>
  );
};

export default MainPage;
