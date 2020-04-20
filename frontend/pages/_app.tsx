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
  faChevronDown,
  faSearch,
  faArrowRight,
  faArrowLeft,
  faShoppingCart,
  faHeart as faHeartDarker,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faHeart as faHeartLight,
  faShareSquare,
} from "@fortawesome/free-regular-svg-icons";

library.add(
  faChevronDown,
  faSearch,
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
  faArrowRight,
  faArrowLeft,
  faShoppingCart,
  faHeartDarker,
  faHeartLight,
  faShareSquare
);

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
