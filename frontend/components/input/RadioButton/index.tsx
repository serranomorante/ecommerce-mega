import React from "react";

import HiddenInput from "../HiddenInput";
import { Label, Main } from "./styles";

export interface Props {
  id: string;
  name: string;
  value: string;
  className?: string;
  checked?: boolean;
  onChange?: () => void;
}

const RadioButton: React.FC<Props> = ({
  children,
  className,
  id,
  name,
  value,
  checked = false,
  onChange,
}) => (
  <Main className={className}>
    <HiddenInput
      id={id}
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
    />
    <Label htmlFor={id}>{children}</Label>
  </Main>
);

export default RadioButton;
