import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: ${({ theme: { palette } }) => palette!.background};
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  padding: 10px;
`;

interface ContentProps {
  width: number;
}

const Content = styled.div<ContentProps>`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme: { palette } }) => palette!.lightLetters};

  & h1 {
    font-weight: bold;
    font-size: 2rem;
    color: black;
    margin-bottom: 5px;
  }

  & span {
    font-size: 1.5rem;
  }
`;

const ImageWrapper = styled.div`
  max-width: 180px;
  padding: 20px;
  align-self: center;
`;

const Image = styled.img`
  max-height: auto;
  max-width: 100%;
  display: block;
`;

export { Wrapper, Content, Title, Image, ImageWrapper };
