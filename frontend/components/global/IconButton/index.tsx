import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
  icon: IconProp;
  type?: "button" | "submit" | "reset" | undefined;
}

const IconButton = styled(({ icon, type = "button", ...props }: Props) => (
  <button type={type} {...props}>
    <FontAwesomeIcon icon={icon} />
  </button>
))`
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin: auto 5px;

  & svg {
    font-size: 1.9rem;
    opacity: 0.5;
  }

  &:hover {
    opacity: 1;
  }
`;

export default IconButton;
