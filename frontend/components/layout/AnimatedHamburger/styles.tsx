import styled, { css } from "styled-components";

interface StyledHamburgerProps {
  showItems?: boolean;
}

const StyledHamburger = styled.a<StyledHamburgerProps>`
  position: absolute;
  right: 0;
  align-self: center;
  cursor: pointer;
  padding: 10px 35px 16px 0;
  z-index: 25;

  span,
  span:before,
  span:after {
    cursor: pointer;
    border-radius: 1px;
    height: 5px;
    width: 35px;
    background: black;
    position: absolute;
    display: block;
    content: "";
    transition: all 300ms ease-in-out;
  }

  span:before {
    top: -10px;
  }

  span:after {
    bottom: -10px;
  }

  ${({ showItems }) =>
    showItems
      ? css`
          position: fixed;
          z-index: 35;

          span {
            background-color: transparent;
          }

          span:before,
          span:after {
            top: 0;
            background-color: white;
          }

          span:before {
            transform: rotate(45deg);
          }

          span:after {
            transform: rotate(-45deg);
          }
        `
      : ""}
`;

export { StyledHamburger };
