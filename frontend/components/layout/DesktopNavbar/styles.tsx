import styled from "styled-components";
import NavbarItems from "../NavbarItems";

const CentralItemsWrapper = styled.div`
  width: 100%;
  margin: auto ${({ theme: { sizes } }) => sizes!.desktop.lateralMargin}%;
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    margin: auto ${({ theme: { sizes } }) => sizes!.mobile!.lateralMargin}px;
  }
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  background: ${({ theme: { palette } }) => palette!.lightBackground};
  font-size: 1.4rem;
  min-height: 50px;
`;

const StyledNavbarItems = styled(NavbarItems)`
  width: 100%;
`;

export { CentralItemsWrapper, StyledNavbar, StyledNavbarItems };
