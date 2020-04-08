import styled, { css } from "styled-components";

const desktopContainers = css`
  & div:nth-child(1) {
    grid-column: 1 / span 2;
  }

  & div:nth-child(2) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  & div:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  & div:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }
`;

const mobileContainers = css``;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;
  padding-left: ${({ theme: { sizes } }) => sizes!.mobile!.lateralMargin}px;
  padding-right: ${({ theme: { sizes } }) => sizes!.mobile!.lateralMargin}px;

  ${mobileContainers}

  @media (min-width: ${({ theme: { breakpoints } }) =>
    breakpoints!.values.md}px) {
      padding-left: ${({ theme: { sizes } }) => sizes!.desktop.lateralMargin}%;
  padding-right: ${({ theme: { sizes } }) => sizes!.desktop.lateralMargin}%;
    ${desktopContainers}
  }
`;

export { Wrapper };
