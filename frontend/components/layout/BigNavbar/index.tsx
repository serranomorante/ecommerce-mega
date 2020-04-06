import React from "react";
import {
  StyledBigNavbar,
  CenterComponentWrapper,
  LeftAlignWrapper,
  RightAlignWrapper,
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
        <RightAlignWrapper />
      </CenterComponentWrapper>
    </StyledBigNavbar>
  );
};

export default BigNavbar;
