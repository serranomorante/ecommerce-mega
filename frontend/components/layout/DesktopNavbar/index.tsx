import React from "react";
import SocialNavbar from "../SocialNavbar";
import { StyledNavbar, CentralItemsWrapper } from "./styles";
import NavbarItems from "../NavbarItems";
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
          <NavbarItems />
        </CentralItemsWrapper>
      </StyledNavbar>
    </div>
  );
};

export default DesktopNavbar;
