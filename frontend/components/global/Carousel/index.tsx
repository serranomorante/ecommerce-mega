import React from "react";
import useWindowDimensions from "../../../utils/useWindowDimensions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CarouselWrapper, SliderInner, SliderOuter, Button } from "./styles";
import CarouselSlide from "../CarouselSlider";

interface Props {
  data: {
    title?: string;
    description?: string;
    url: string;
  }[];
}

const Carousel = (props: Props) => {
  const { width } = useWindowDimensions();

  const [state, setState] = React.useState({
    index: 1,
  });

  const handleNext = () => {
    setState((prevState) => {
      const nextIndex = prevState.index + 1;
      return {
        ...prevState,
        index: nextIndex > props.data.length ? 1 : nextIndex,
      };
    });
  };

  const handlePrev = () => {
    setState((prevState) => {
      const nextIndex = prevState.index - 1;
      return {
        ...prevState,
        index: nextIndex < 1 ? props.data.length : nextIndex,
      };
    });
  };

  return (
    <CarouselWrapper>
      <Button direction="left" onClick={handlePrev}>
        <FontAwesomeIcon icon="arrow-left" />
      </Button>
      <SliderOuter width={width}>
        <SliderInner
          width={width}
          index={state.index}
          dataLength={props.data.length}
        >
          {props.data.map((slide, index) => (
            <CarouselSlide
              width={width}
              key={index}
              url={slide.url}
              title={slide.title}
              description={slide.description}
            />
          ))}
        </SliderInner>
      </SliderOuter>
      <Button direction="right" onClick={handleNext}>
        <FontAwesomeIcon icon="arrow-right" />
      </Button>
    </CarouselWrapper>
  );
};

export default Carousel;
