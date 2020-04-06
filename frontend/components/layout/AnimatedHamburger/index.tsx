import React from "react";

import { useStoreActions, useStoreState } from "../../../store/hooks/hooks";
import { StyledHamburger } from "./styles";

interface Props {
  className?: string;
}

const AnimatedHamburger: React.FC<Props> = ({ className }) => {
  const setNavbarItemsVisible = useStoreActions(
    (actions) => actions.interface.setNavbarItemsVisible
  );
  const navbarItemsVisible = useStoreState(
    (state) => state.interface.navbarItemsVisible
  );

  const handleClick = () => setNavbarItemsVisible();

  return (
    <>
      <StyledHamburger
        showItems={navbarItemsVisible}
        className={className}
        onClick={handleClick}
      >
        <span></span>
      </StyledHamburger>
    </>
  );
};

export default AnimatedHamburger;
