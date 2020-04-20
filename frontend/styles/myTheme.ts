import { DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  direction: "ltr",

  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  zIndex: {
    dropdown: 10,
    mobileNavbar: 20,
    carouselButton: 5,
  },

  palette: {
    main: "#f9f9f9",
    secondary: "magenta",
    lightBackground: "white",
    lightLetters: "#6a6a6a",
    background: "#f2f2f2",
    formBorderColor: "#d0d0d082",
    navbarBorderColor: "#cccccc69",
    jazzy: "#ffbc00",
  },

  sizes: {
    mobile: {
      searchBoxWidth: 270,
      searchButtonWidth: 45,
      selectWidth: 120,
      lateralMargin: 10,
      product: {
        mediaHeight: 250,
      },
    },
    desktop: {
      searchButtonWidth: 65,
      lateralMargin: 20,
    },
    formHeight: 37,
    sliderHeight: 400,
    mainFullBorderPadding: 10,
  },
};

export default myTheme;
