import styled from "styled-components";

interface ContainerProps {
  width: number;
}

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Container = styled.div<ContainerProps>`
  display: flex;
  position: relative;
  align-items: center;
  width: ${({ width }) => width}px;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    height: ${({ theme: { sizes } }) => sizes!.sliderHeight}px;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  margin: 5px 10px;
  z-index: 1;
  color: white;
  font-size: 2.5rem;
  margin-left: 20%;
  text-shadow: 1px 1px #1e1e1e;

  > h1 {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
`;

export { Image, Container, TextWrapper };
