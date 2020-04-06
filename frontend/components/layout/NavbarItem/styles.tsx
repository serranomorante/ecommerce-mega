import styled from "styled-components";

const MyNavbarItem = styled.button`
  display: flex;
  border-color: transparent;
  background-color: inherit;
  font-size: 1.5rem;
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 4px;
  cursor: pointer;
  color: #756d6d;

  & svg {
    font-size: 2rem;
  }

  &:hover {
    background-color: #ffe3ca;
  }
`;

export { MyNavbarItem };
