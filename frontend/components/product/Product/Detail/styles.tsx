import styled, { css } from "styled-components";
import { boxDecorator } from "../../../../utils/styles/boxes";
import IconButton from "../../../global/IconButton";
import RadioButton from "../../../input/RadioButton";
import RadioButtonGroup from "../../../input/RadioButtonGroup";
import Button from "../../../global/Button";

const Main = styled.div`
  display: flex;
  align-items: center;

  ${boxDecorator}
`;

const Content = styled.div`
  width: 100%;
  display: grid;
  grid-row-gap: 10px;
  align-items: center;
  grid-template-columns: repeat(4, [col] 1fr);
  grid-template-rows: repeat(4, [row] auto);
  padding: ${({ theme: { sizes } }) => sizes!.mainFullBorderPadding}px;
`;

const Title = styled.h2`
  font-weight: bold;
  grid-column: col / span 4;
`;

const PriceContainer = styled.div`
  display: flex;
  grid-column: col / span 2;
  grid-row: row 2;
`;

const Price = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme: { palette } }) => palette!.jazzy};
`;

const ComparePriceAt = styled.div`
  font-size: 1.5rem;
  text-decoration: line-through;
  margin-left: 0.8rem;
  color: ${({ theme: { palette } }) => palette!.lightLetters};
`;

const Variants = styled.div``;

const AddToWishlist = styled(IconButton)`
  grid-row: row 2;
  grid-column: col 3 / span 4;
  justify-self: right;
`;

const AddToCart = styled(Button)`
  grid-row: row 4;
  grid-column: col / span 4;
`;

const OptionsContainer = styled.div`
  grid-row: row 3;
  grid-column: col / span 4;
`;

const Option = styled.div`
  text-transform: uppercase;

  & span {
    font-weight: bold;
    text-transform: none;
  }
`;

const VariantsContainer = styled(RadioButtonGroup)`
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
  justify-content: start;
`;

const Variant = styled(RadioButton)`
  border-color: grey;
  border-width: 1px;
  border-style: solid;
  border-radius: 2px;
  margin: 5px;

  ${({ checked }) =>
    checked
      ? css`
          background-color: red;
        `
      : null}
`;

export {
  Main,
  Content,
  Title,
  Price,
  Variants,
  PriceContainer,
  ComparePriceAt,
  AddToWishlist,
  OptionsContainer,
  Option,
  VariantsContainer,
  Variant,
  AddToCart,
};
