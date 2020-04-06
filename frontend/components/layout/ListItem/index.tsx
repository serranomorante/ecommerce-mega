import React from "react";
import { StyledListItem, StyledArrowDown } from "./styles";

const ListItem: React.FC = ({ children }) => {
  const childrenCount = React.Children.count(children);

  const [showDropdown, setShowDropdown] = React.useState(false);

  const node = React.useRef<HTMLLIElement>(null);

  const handleClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  const handleClickOutside = (event: any) => {
    if (!node.current!.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  React.useEffect(() => {
    if (childrenCount > 1 && showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    if (!showDropdown) {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <StyledListItem
      ref={node}
      showDropdown={showDropdown}
      onClick={handleClick}
    >
      {children}
      {childrenCount > 1 && <StyledArrowDown />}
    </StyledListItem>
  );
};

export default ListItem;
