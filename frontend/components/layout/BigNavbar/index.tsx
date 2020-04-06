import React from "react";
import {
  StyledBigNavbar,
  CenterComponentWrapper,
  LeftAlignWrapper,
  RightAlignWrapper,
  StyledIconButton,
} from "./styles";
import SearchBox from "../SearchBox";
import Brand from "../Brand";

const BigNavbar: React.FC = () => {
  return (
    <StyledBigNavbar>
      <CenterComponentWrapper>
        <LeftAlignWrapper>
          <Brand />
        </LeftAlignWrapper>
        <SearchBox />
        <RightAlignWrapper>
          <StyledIconButton icon={["far", "heart"]} />
          <StyledIconButton icon={"shopping-cart"} />
        </RightAlignWrapper>
      </CenterComponentWrapper>
    </StyledBigNavbar>
  );
};

export default BigNavbar;
