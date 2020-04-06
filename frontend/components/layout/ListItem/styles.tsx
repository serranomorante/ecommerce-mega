import styled, { css } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface StyledListItemProps {
  showDropdown: boolean;
}

const StyledListItem = styled.li<StyledListItemProps>`
  position: relative;
  float: left;
  cursor: pointer;

  & > ul {
    ${(props) =>
      props.showDropdown
        ? css`
            display: block;
          `
        : css`
            display: none;
          `}
  }
`;

const StyledArrowDown = styled(({ ...props }) => (
  <FontAwesomeIcon icon="chevron-down" {...props} />
))`
  position: absolute;
  top: 0;
  right: 0;
`;

export { StyledArrowDown, StyledListItem };
