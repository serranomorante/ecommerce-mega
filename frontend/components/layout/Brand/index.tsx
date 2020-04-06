import React from "react";
import { Image } from "./styles";

interface Props {
  className?: string;
}

const Brand: React.FC<Props> = ({ className }) => {
  return (
    <Image
      className={className}
      src="https://www.cephissus.com/wp-content/uploads/ecommerce-logo.png"
      alt="Company Logo"
    />
  );
};

export default Brand;
