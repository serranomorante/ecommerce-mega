import styled from "styled-components";
import { boxDecorator, forceVisibility } from "../../../../utils/styles/boxes";

const Main = styled.div`
  width: 100%;
  height: ${({ theme: { sizes } }) => sizes!.mobile!.product!.mediaHeight}px;

  ${boxDecorator}
`;

export { Main };
