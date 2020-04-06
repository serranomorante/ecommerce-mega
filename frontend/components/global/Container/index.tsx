import React from "react";
import {
  ContainerWrapper,
  TitleWrapper,
  Description,
  Image,
  Title,
} from "./styles";

interface Props {
  title: string;
  description: string;
  url: string;
}

const Category = ({ title, description, url }: Props) => {
  return (
    <ContainerWrapper>
      <TitleWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </TitleWrapper>
      <Image src={url} />
    </ContainerWrapper>
  );
};

export default Category;
