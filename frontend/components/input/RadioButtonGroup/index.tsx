import React from "react";

import { Props as RadioButtonProps } from "../RadioButton";

export interface Props {
  name: string;
  selectedValue: string;
  onClickRadioButton: (name: string, value: string) => void;
  children?: any;
}

const RadioGroup: React.FC<Props> = ({
  children,
  name,
  selectedValue,
  onClickRadioButton,
  ...rest
}) => {
  return (
    <div role="radiogroup" {...rest}>
      {React.Children.map(
        children,
        (element: React.ReactElement<RadioButtonProps>) =>
          React.cloneElement(element, {
            ...element.props,
            checked: selectedValue === element.props.id,
            onChange: () => onClickRadioButton(name, element.props.id),
            name,
          })
      )}
    </div>
  );
};

export default RadioGroup;
