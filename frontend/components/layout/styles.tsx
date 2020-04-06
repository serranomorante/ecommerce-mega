import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const NavbarContainer = styled.div``;

const StyledMobileNavbar = styled(({ ...rest }) => <MobileNavbar {...rest} />)`
  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    display: none;
  }
`;

const StyledDesktopNavbar = styled(({ ...rest }) => (
  <DesktopNavbar {...rest} />
))`
  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    display: none;
  }
`;

export { NavbarContainer, StyledMobileNavbar, StyledDesktopNavbar };
