import styled from "styled-components";
import NavbarItems from "../NavbarItems";
import SearchBox from "../SearchBox";
import AnimatedHamburger from "../AnimatedHamburger";
import Brand from "../Brand";

interface ContainerWrapperProps {
  navbarItemsVisible?: boolean;
}

const StyledAnimatedHamburger = styled(({ ...props }) => (
  <AnimatedHamburger {...props} />
))`
  right: 10px;
`;

const StyledBrand = styled(({ ...props }) => <Brand {...props} />)`
  max-width: 55px;
  max-height: 55px;
`;

const StyledSearchBox = styled(({ ...props }) => <SearchBox {...props} />)`
  width: ${({ theme: { sizes } }) => sizes.mobile.searchBoxWidth}px;

  & input {
    width: calc(
      ${({ theme: { sizes } }) => sizes.mobile.searchBoxWidth}px -
        ${({ theme: { sizes } }) => sizes.mobile.selectWidth}px
    );
  }

  & > div {
    position: absolute;
    height: calc(${({ theme: { sizes } }) => sizes.formHeight}px - 2px);
    width: ${({ theme: { sizes } }) => sizes.mobile.selectWidth}px;
    right: 0;

    & > select {
      padding: 0 20px 0 5px;
    }

    & > svg {
      right: calc(
        ${({ theme: { sizes } }) => sizes.mobile.searchButtonWidth}px + 5px
      );
    }

    & > button {
      position: absolute;
      width: ${({ theme: { sizes } }) => sizes.mobile.searchButtonWidth}px;
      top: -2px;

      & > svg {
        position: relative;
        font-size: 2rem;
      }
    }
  }
`;

const ContainerWrapper = styled.div<ContainerWrapperProps>`
  height: 100vh;
  background-color: #000000a6;
  position: fixed;
  display: ${({ navbarItemsVisible }) =>
    navbarItemsVisible ? "block" : "none"};
  width: 100%;
  z-index: ${({ theme: { zIndex } }) => zIndex!.mobileNavbar! - 1};
`;

const Container = styled.section`
  display: block;
  position: fixed;
  border-radius: 20px 20px 0 0;
  bottom: 0;
  width: 100%;
  height: calc(100vh - 20%);
  background: ${({ theme: { palette } }) => palette!.lightBackground};
  font-size: 1.4rem;
  z-index: ${({ theme: { zIndex } }) => zIndex!.mobileNavbar};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  position: relative;

  /* LeftAlign... */
  & > div:first-child {
    left: 10px;
  }
`;

const LineDecorator = styled.div`
  width: 50%;
  height: 5px;
  background-color: #00000038;
  margin: 15px auto;
  border-radius: 5px;
`;

const NavbarItemsForMobile = styled(NavbarItems)`
  background-color: transparent;
  height: inherit;

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: inherit;
    padding: 30px 5% 0 5%;

    & li:hover {
      background: linear-gradient(#eea67178 1%, #00f0 100%);
      border-radius: 5px;
    }
  }

  & > ul > li {
    font-weight: bold;
  }

  & ul li {
    float: none;
    font-size: 2rem;
    width: 100%;
    position: relative;

    & > svg {
      top: 20px;
      right: 10px;
    }
  }

  & ul li a {
    padding: 5%;
  }

  & ul {
    position: relative;
  }

  & > ul li > ul li {
    text-indent: 1.5rem;
  }
`;

export {
  StyledAnimatedHamburger,
  StyledBrand,
  StyledSearchBox,
  ContainerWrapper,
  Container,
  Navbar,
  LineDecorator,
  NavbarItemsForMobile,
};
