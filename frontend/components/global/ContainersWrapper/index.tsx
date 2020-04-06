import React from "react";
import { ContainersOverride, Wrapper } from "./styles";
import Container from "../Container";

const dummyData = [
  {
    title: "Mochilas",
    description: "Colección Top",
    url: "https://pngimage.net/wp-content/uploads/2018/06/mochilas-png-3.png",
  },
  {
    title: "Laptop",
    description: "Colección top",
    url: "https://www.pngarts.com/files/4/Laptop-PNG-Image.png",
  },
  {
    title: "Smartphones",
    description: "Colección Top",
    url:
      "https://purepng.com/public/uploads/large/purepng.com-asus-smartphonepersonal-computersmartphonemobile-operating-systemcellular-phonephilipsandroid-1701528390817qbpuc.png",
  },
  {
    title: "Electrodomésticos",
    description: "Colección Top",
    url: "https://pngimg.com/uploads/microwave/microwave_PNG15734.png",
  },
];

const ContainersWrapper = () => {
  return (
    <Wrapper>
      <ContainersOverride>
        {dummyData.map((category, index) => (
          <Container
            key={index}
            title={category.title}
            description={category.description}
            url={category.url}
          />
        ))}
      </ContainersOverride>
    </Wrapper>
  );
};

export default ContainersWrapper;
