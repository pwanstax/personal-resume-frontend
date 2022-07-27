import Layout from "../components/layout/Layout";
import {createTheme, ThemeProvider} from "@mui/material/styles";

import "../styles/globals.css";

function MyApp({Component, pageProps}) {
  const theme = createTheme({
    typography: {
      fontFamily: "Work Sans",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
