import React from "react";

// next
import { NextPage, GetServerSideProps } from "next";
import { getDataFromTree } from "@apollo/react-ssr";

// interface
import Article from "../interfaces/article/Article";

// graphql
import { ArticlesComponent } from "../generated/apolloComponents";

// HOC
import withApollo from "../lib/withApollo";

interface Props {
  articles?: Article[];
}

const AboutUs: NextPage<Props> = () => {
  return (
    <ArticlesComponent>
      {({ loading, error, data }) => {
        if (loading) return <p>loading...</p>;
        if (error) return <p>Error: {JSON.stringify(error)}</p>;

        return (
          <div>
            {data?.articles?.map((article, index) => (
              <div key={index}>{article?.title}</div>
            ))}
          </div>
        );
      }}
    </ArticlesComponent>
  );
};

export default withApollo(AboutUs, { getDataFromTree });
