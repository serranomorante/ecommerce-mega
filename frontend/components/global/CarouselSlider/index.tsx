import React from "react";
import { Container, TextWrapper, Image } from "./styles";

interface Props {
  title?: string;
  description?: string;
  url: string;
  width: number;
}

const CarouselSlide = ({ width, title, description, url }: Props) => {
  return (
    <Container width={width}>
      <TextWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextWrapper>
      <Image src={url} />
    </Container>
  );
};

export default CarouselSlide;
