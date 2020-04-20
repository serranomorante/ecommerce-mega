import styled from "styled-components";

const Main = styled.div`
  display: grid;
  padding: ${({ theme: { sizes } }) => sizes!.mainFullBorderPadding}px;

  @media (min-width: ${({ theme: { breakpoints } }) =>
      breakpoints!.values.md}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export { Main };
