import styled from "styled-components";

const CentralItemsWrapper = styled.div`
  width: 100%;
  margin: auto ${({ theme: { sizes } }) => sizes!.lateralMargin}%;
  display: flex;
  position: relative;
  justify-content: center;
  align-content: center;

  /* Lateral margins 20% */
  @media (max-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    margin: auto 2%;
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

export { CentralItemsWrapper, StyledNavbar };
