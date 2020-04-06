import React from "react";
import { useStoreState } from "../../../store/hooks/hooks";
import {
  Navbar,
  StyledBrand,
  StyledSearchBox,
  StyledAnimatedHamburger,
  ContainerWrapper,
  Container,
  LineDecorator,
  NavbarItemsForMobile,
} from "./styles";
import { LeftAlignWrapper } from "../common/styles";

interface Props {
  className?: string;
}

const MobileNavbar: React.FC<Props> = ({ className }) => {
  const navbarItemsVisible = useStoreState(
    (state) => state.interface.navbarItemsVisible
  );

  return (
    <Navbar className={className}>
      <LeftAlignWrapper>
        <StyledBrand />
      </LeftAlignWrapper>
      <StyledSearchBox />
      <StyledAnimatedHamburger />
      <ContainerWrapper navbarItemsVisible={navbarItemsVisible}>
        <Container>
          <LineDecorator />
          <NavbarItemsForMobile />
        </Container>
      </ContainerWrapper>
    </Navbar>
  );
};

export default MobileNavbar;
