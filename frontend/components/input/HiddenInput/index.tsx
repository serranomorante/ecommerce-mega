import styled from "styled-components";

const HiddenInput = styled.input`
  opacity: 0;
  position: absolute;
  /* this absolute positioned element 
   * was interfering with the "cursor: pointer"
   * from the Label element in RadioButton component.
   */
  cursor: pointer;
`;

export default HiddenInput;
