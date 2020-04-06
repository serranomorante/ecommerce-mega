import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainersOverride = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 15px;

  & div:nth-child(1) {
    grid-column: 1 / span 2;
    flex-direction: row;
  }

  & div:nth-child(2) {
    grid-column: 3;
    grid-row: 1 / span 2;
  }

  & div:nth-child(3) {
    grid-column: 1;
    grid-row: 2;

    & > img {
      margin-bottom: -50px;
    }
  }

  & div:nth-child(4) {
    grid-column: 2;
    grid-row: 2;

    & > img {
      margin-bottom: -50px;
    }
  }
`;

export { Wrapper, ContainersOverride };
