import styled from "styled-components";

interface Props {
  type?: string;
}

const Button = styled(({ type = "button", ...props }) => (
  <button type={type} {...props} />
))<Props>`
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  background-color: black;
  border: none;
  width: 100%;
  padding: 10px 15px;
  cursor: pointer;
`;

export default Button;
