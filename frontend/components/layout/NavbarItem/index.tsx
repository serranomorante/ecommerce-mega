import React from "react";
import { MyNavbarItem } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  title: string;
  className?: string;
}

const NavbarItem: React.FC<Props> = ({ title, className }) => {
  return (
    <MyNavbarItem type="button" className={className}>
      {title}
      <FontAwesomeIcon icon="chevron-down" />
    </MyNavbarItem>
  );
};

export default NavbarItem;
