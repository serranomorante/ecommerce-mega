import { AppProps } from "next/app";

import { ThemeProvider } from "styled-components";
import myTheme from "../styles/myTheme";
import { GlobalStyle } from "../styles/GlobalStyles";

import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/apollo";
import ApolloClient from "apollo-client";
import { NormalizedCacheObject } from "apollo-cache-inmemory";

interface IProps {
  apollo: ApolloClient<NormalizedCacheObject>;
}

const MyApp = ({ Component, pageProps, apollo }: AppProps & IProps) => {
  return (
    <ApolloProvider client={apollo}>
      <ThemeProvider theme={myTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default withApollo(MyApp);
