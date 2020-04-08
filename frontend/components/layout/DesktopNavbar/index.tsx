import React from "react";
import SocialNavbar from "../SocialNavbar";
import { StyledNavbar, CentralItemsWrapper, StyledNavbarItems } from "./styles";
import BigNavbar from "../BigNavbar";

interface Props {
  className?: string;
}

const DesktopNavbar: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <SocialNavbar />
      <BigNavbar />
      <StyledNavbar>
        <CentralItemsWrapper>
          <StyledNavbarItems />
        </CentralItemsWrapper>
      </StyledNavbar>
    </div>
  );
};

export default DesktopNavbar;
