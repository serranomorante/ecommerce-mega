import gql from "graphql-tag";

const ARTICLES = gql`
  query Articles {
    articles {
      id
      title
    }
  }
`;

export default ARTICLES;
