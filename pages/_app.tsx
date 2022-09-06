import "../styles/globals.scss";
import "../styles/utilities.scss";
import type {AppProps} from "next/app";
import Layout from "../components/layout/Layout";
import {useEffect} from "react";

function MyApp({Component, pageProps}: AppProps) {
  useEffect(() => {
    const html = document.querySelector("html");
    html!.dataset.theme = `light`;
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
