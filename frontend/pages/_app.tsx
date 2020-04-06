import { AppProps } from "next/app";

// styled
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import myTheme from "../styles/myTheme";

// font awesome
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

// font awesome library
import {
  faBars,
  faUser,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook } from "@fortawesome/free-brands-svg-icons";

library.add(faChevronDown, faSearch);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
