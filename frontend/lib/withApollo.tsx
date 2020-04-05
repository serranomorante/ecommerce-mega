import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { createHttpLink } from "apollo-link-http";
import withApollo from "next-with-apollo";

import fetch from "isomorphic-unfetch";

const GRAPHQL_URL = process.env.BACKEND_URL || "http://localhost:1337/graphql";

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL,
});

export default withApollo(
  ({ initialState }) => {
    return new ApolloClient({
      link: link,
      cache: new InMemoryCache().restore(initialState || {}),
    });
  },
  {
    render: ({ Page, props }) => {
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} />
        </ApolloProvider>
      );
    },
  }
);
