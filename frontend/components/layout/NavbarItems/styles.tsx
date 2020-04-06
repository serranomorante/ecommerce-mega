import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const LinkItem = styled.a`
  display: block;
  text-decoration: none;
  padding: 0 20px;
`;

const DropdownList = styled(List)`
  display: none;
  position: absolute;
  background-color: transparent;
  min-width: 100px;
  z-index: ${({ theme }) => theme.zIndex!.dropdown};
`;

export { List, LinkItem, DropdownList };
