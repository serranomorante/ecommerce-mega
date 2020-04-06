import styled, { css } from "styled-components";

interface SliderOuterProps {
  width: number;
}

interface SliderInnerProps {
  width: number;
  index: number;
  dataLength: number;
}

interface ButtonProps {
  direction: string;
}

const CarouselWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;

const SliderOuter = styled.div<SliderOuterProps>`
  overflow: hidden;
  width: ${({ width }) => width}px;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    height: ${({ theme: { sizes } }) => sizes!.sliderHeight}px;
  }
`;

const SliderInner = styled.div<SliderInnerProps>`
  display: block;
  position: relative;
  width: ${({ dataLength, width }) => dataLength * width}px;
  left: -${({ width, index }) => width * index - width}px;
  transition: left 1s;

  > div {
    float: left;
  }
`;

const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border: none;
  background-color: #ffa14f;
  outline: none;
  cursor: pointer;
  align-self: center;
  z-index: ${({ theme: { zIndex } }) => zIndex!.carouselButton};
  border-radius: 50%;
  width: 32px;
  height: 32px;
  color: white;

  ${({ direction }) =>
    direction == `left`
      ? css`
          left: 25px;
        `
      : css`
          right: 25px;
        `}
`;

export { CarouselWrapper, SliderOuter, SliderInner, Button };
