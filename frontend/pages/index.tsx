import { NextPage } from "next";
import styled from "styled-components";
import Layout from "../components/layout/Layout";

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <Layout>
    <h1>Hello world! - user agent: {userAgent}</h1>
    <StyledTest>This is working</StyledTest>
  </Layout>
);

Home.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent;
  return { userAgent };
};

export default Home;

const StyledTest = styled.div`
  height: 100px;
  width: 100px;
  background-color: aliceblue;
`;
