import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  background-color: ${({ theme: { palette } }) => palette!.background};
  flex-direction: column;
  padding: 30px;
  align-content: center;
  justify-content: center;
  position: relative;

  & > div {
    top: 20px;
    left: 20px;
  }
`;

const TitleWrapper = styled.div`
  font-size: 1.2rem;
  color: ${({ theme: { palette } }) => palette!.lightLetters};
  position: absolute;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 5px;
  color: black;
`;

const Description = styled.span`
  font-size: 1.5rem;
`;

const Image = styled.img`
  max-height: 170px;
  max-width: 170px;
  display: block;
`;

export { ContainerWrapper, TitleWrapper, Title, Description, Image };
