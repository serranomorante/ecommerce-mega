import styled from "styled-components";
import MobileNavbar from "./MobileNavbar";

const NavbarContainer = styled.div``;

const StyledMobileNavbar = styled(({ ...rest }) => <MobileNavbar {...rest} />)`
  @media (min-width: ${(props) => props.theme.breakpoints!.values.md}px) {
    display: none;
  }
`;

// const StyledDesktopNavbar = styled(({ ...rest }) => (
//   <DesktopNavbar {...rest} />
// ))`
//   @media (max-width: ${props => props.theme.breakpoints!.values.md}px) {
//     display: none;
//   }
// `;

export {
  NavbarContainer,
  StyledMobileNavbar,
  // StyledDesktopNavbar
};
