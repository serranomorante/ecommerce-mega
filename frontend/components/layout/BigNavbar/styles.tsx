import styled from "styled-components";
import IconButton from "../../global/IconButton";

const LeftAlignWrapper = styled.div`
  position: absolute;
  left: 0;
`;

const RightAlignWrapper = styled.div`
  position: absolute;
  right: 0;
`;

const CenterComponentWrapper = styled.div`
  width: 100%;
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto ${({ theme: { sizes } }) => sizes!.desktop.lateralMargin}%;
  position: relative;

  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    margin: auto 2%;
  }
`;

const StyledBigNavbar = styled.div`
  display: flex;
  border-top-color: ${({ theme: { palette } }) => palette!.navbarBorderColor};
  border-bottom-color: ${({ theme: { palette } }) =>
    palette!.navbarBorderColor};
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
`;

const StyledIconButton = styled(IconButton)`
  & svg {
    opacity: 1;
  }
`;

export {
  LeftAlignWrapper,
  RightAlignWrapper,
  CenterComponentWrapper,
  StyledBigNavbar,
  StyledIconButton,
};
