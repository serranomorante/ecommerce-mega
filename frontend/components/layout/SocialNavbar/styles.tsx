import styled from "styled-components";
import NavbarItem from "../NavbarItem";

const UpperNavbarItem = styled(NavbarItem)`
  font-size: 1.4rem;
  border-left-color: ${({ theme: { palette } }) => palette!.navbarBorderColor};
  border-left-width: 1px;
  border-left-style: solid;
  border-right-color: ${({ theme: { palette } }) => palette!.navbarBorderColor};
  border-right-width: 1px;
  border-right-style: solid;
  border-radius: 0;
  padding: 10px 15px;
  margin-left: -1px;

  &:hover {
    background-color: #fff3e8;
    border-bottom-color: #ffa14f;
  }
`;

const RightAlignWrapper = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`;

const SocialButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: auto 5px;

  & svg {
    font-size: 1.9rem;
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }
`;

const SocialMediaWrapper = styled.div``;

const LeftAlignWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const StyledSocialNavbar = styled.nav`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 40px;
`;

const CenterComponentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto ${({ theme: { sizes } }) => sizes!.lateralMargin}%;
  position: relative;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    margin: auto 2%;
  }
`;

export {
  UpperNavbarItem,
  RightAlignWrapper,
  SocialButton,
  SocialMediaWrapper,
  LeftAlignWrapper,
  StyledSocialNavbar,
  CenterComponentWrapper,
};
