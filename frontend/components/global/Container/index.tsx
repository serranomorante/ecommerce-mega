import React from "react";
import { Wrapper, Content, Image, Title, ImageWrapper } from "./styles";

interface Props {
  title: string;
  description: string;
  url: string;
}

const Category = ({ title, description, url }: Props) => {
  const [width, setWidth] = React.useState(0);
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setWidth(wrapperRef!.current!.clientWidth);
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <Content width={width}>
        <Title>
          <h1>{title}</h1>
          <span>{description}</span>
        </Title>
        <ImageWrapper>
          <Image src={url} />
        </ImageWrapper>
      </Content>
    </Wrapper>
  );
};

export default Category;
