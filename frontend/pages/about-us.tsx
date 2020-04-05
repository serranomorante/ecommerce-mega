import React from "react";
import { ArticlesComponent } from "../generated/apolloComponents";
import { NextPage, GetServerSideProps } from "next";
import Article from "../interfaces/article/Article";
import ARTICLES from "../graphql/queries/article/articles";

interface Props {
  articles?: Article[];
}

const AboutUs: NextPage<Props> = ({ articles }) => {
  console.log(articles);

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

export default AboutUs;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  return {
    props: {},
  };
};
