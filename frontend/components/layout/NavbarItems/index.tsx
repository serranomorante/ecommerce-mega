import React from "react";
import { List, LinkItem, DropdownList } from "./styles";
import ListItem from "../ListItem";

interface Props {
  className?: string;
}

const NavbarItems: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <List>
        <ListItem>
          <LinkItem href="#!">Item 1</LinkItem>
          <DropdownList>
            <ListItem>
              <LinkItem href="#!">Item 1.1 </LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#!">Item 1.2</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#!">Item 1.3</LinkItem>
            </ListItem>
          </DropdownList>
        </ListItem>
        <ListItem>
          <LinkItem href="#!">Item 2</LinkItem>
          <DropdownList>
            <ListItem>
              <LinkItem href="#!">Item 2.1</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#!">Item 2.2</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="#!">Item 2.3</LinkItem>
            </ListItem>
          </DropdownList>
        </ListItem>
        <ListItem>
          <LinkItem href="#!">Item 3</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="#!">Item 4</LinkItem>
        </ListItem>
        <ListItem>
          <LinkItem href="#!">Item 5</LinkItem>
        </ListItem>
      </List>
    </div>
  );
};

export default NavbarItems;
