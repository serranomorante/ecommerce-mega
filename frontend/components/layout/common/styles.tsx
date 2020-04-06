import styled from "styled-components";

const LeftAlignWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`;

const SectionDivision = styled.div`
  margin-top: 50px;
`;

const TitleWrapper = styled.div`
  margin-bottom: 50px;
  text-align: center;
  color: ${({ theme: { palette } }) => palette!.lightLetters};

  & > h1 {
    color: black;
    margin-bottom: 15px;
  }
`;

export { LeftAlignWrapper, CarouselContainer, SectionDivision, TitleWrapper };
