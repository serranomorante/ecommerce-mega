import { NextPage } from "next";
import Layout from "../components/layout/Layout";
import { StoreProvider } from "easy-peasy";
import store from "../store/store";
import {
  CarouselContainer,
  SectionDivision,
  TitleWrapper,
} from "../components/layout/common/styles";
// import Carousel from "../components/global/Carousel";

import dynamic from "next/dynamic";
import ContainersWrapper from "../components/global/ContainersWrapper";

const Carousel = dynamic(import("../components/global/Carousel"), {
  ssr: false,
});

const dummyData = [
  {
    title: "Test title",
    description: "Test description",
    url:
      "https://www.usnews.com/dims4/USNEWS/cac952f/2147483647/thumbnail/640x420/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2Fd4%2Fc9%2F6234b77a4ede900294850cace7f0%2F200103-womanshoppingbags-stock.jpg",
  },
  {
    title: "Test title",
    description: "Test description",
    url: "https://img2.10bestmedia.com/static/img/placeholder-shopping.jpg",
  },
  {
    title: "Test title",
    description: "Test description",
    url:
      "https://www.shopfacts.be/wp-content/uploads/sites/8/2019/01/iStock-868718238-730x480.jpg",
  },
];

const Home: NextPage = () => (
  <StoreProvider store={store}>
    <Layout>
      <CarouselContainer>
        <Carousel data={dummyData} />
      </CarouselContainer>
      <SectionDivision>
        <TitleWrapper>
          <h1>Tendencias</h1>
          <span>Descripción de ejemplo</span>
        </TitleWrapper>
        <ContainersWrapper />
      </SectionDivision>
    </Layout>
  </StoreProvider>
);

export default Home;
