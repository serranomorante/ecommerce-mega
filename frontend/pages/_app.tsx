import { AppProps } from "next/app";

// styled
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import myTheme from "../styles/myTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
