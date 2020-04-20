import React from "react";

import {
  Main,
  Content,
  Title,
  PriceContainer,
  ComparePriceAt,
  Price,
  AddToWishlist,
  Variant,
  OptionsContainer,
  Option,
  VariantsContainer,
  AddToCart,
} from "./styles";

import { dummyData } from "../dummyData";

const Detail = () => {
  // hooks
  const [state, setState] = React.useState<any>({
    /**
     * Only for now, I'm hardcoding the values
     */
    size: "x",
    color: "gold",
    ram: "1",
  });

  const onClickRadioButton = (name: string, value: string) => {
    setState((prevState: any) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Main>
      <Content>
        <Title>{dummyData.title}</Title>

        <PriceContainer>
          <Price>$ {dummyData.price.toFixed(2)}</Price>
          <ComparePriceAt>
            $ {dummyData.comparePriceAt.toFixed(2)}
          </ComparePriceAt>
        </PriceContainer>

        <AddToWishlist icon={["far", "heart"]} />

        <OptionsContainer>
          {dummyData.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <Option>
                {option.label}
                {!!state[option.id] ? <span>: {state[option.id]}</span> : null}
              </Option>

              <VariantsContainer
                name={option.id}
                onClickRadioButton={onClickRadioButton}
                selectedValue={state[option.id] || ""}
              >
                {option.variants.map((variant, variantIndex) => (
                  <Variant
                    key={variantIndex}
                    id={variant.id}
                    name={option.id}
                    value={variant.id}
                  >
                    <span>{variant.label}</span>
                  </Variant>
                ))}
              </VariantsContainer>
            </div>
          ))}
        </OptionsContainer>

        <AddToCart>Añadir al carrito</AddToCart>
      </Content>
    </Main>
  );
};

export default Detail;
