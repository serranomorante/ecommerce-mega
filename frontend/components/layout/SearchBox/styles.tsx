import styled from "styled-components";

const Button = styled.button`
  position: relative;
  bottom: 2px;
  right: -2px;
  width: 65px;
  height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0 10rem 10rem 0;
  background-color: #ffa14f;
  border-color: #ffa14f;
  border-style: solid;
  border-width: 2px;

  & svg {
    color: white;
    font-size: 1.8em;
  }
`;

const Form = styled.form`
  position: relative;
  display: flex;
  height: ${({ theme: { sizes } }) => sizes!.formHeight}px;
  border-color: ${({ theme: { palette } }) => palette!.formBorderColor};
  border-width: 2px;
  border-style: solid;
  border-radius: 10rem;
  background-color: transparent;
`;

const Input = styled.input`
  background-color: transparent;
  border: none;
  padding: 10px 20px;
  width: inherit;
`;

const SelectWrapper = styled.div`
  display: flex;
  position: relative;

  & svg {
    position: absolute;
    align-self: center;
    right: 4px;
    pointer-events: none;
  }
`;

const Select = styled.select`
  border: none;
  border-left-style: solid;
  border-left-color: ${({ theme: { palette } }) => palette!.formBorderColor};
  border-left-width: 2px;
  background-color: transparent;
  appearance: none;
  cursor: pointer;
  padding: 0 17px 0 10px;
`;

export { Button, Form, Input, SelectWrapper, Select };
