// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    direction: string;

    palette?: {
      type?: string;
      main: string;
      secondary: string;
      lightBackground: string;
      lightLetters: string;
      background: string;
      formBorderColor: string;
      navbarBorderColor: string;
      jazzy: string;
    };

    breakpoints?: {
      keys: string[];
      values: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
      };
    };

    zIndex?: {
      dropdown?: number;
      mobileNavbar?: number;
      carouselButton?: number;
    };

    sizes?: {
      mobile?: {
        searchBoxWidth: number;
        selectWidth: number;
        searchButtonWidth: number;
        lateralMargin?: number;
        product?: {
          mediaHeight?: number;
        };
      };
      desktop: {
        searchButtonWidth: number;
        lateralMargin?: number;
      };
      formHeight?: number;
      sliderHeight: number;
      mainFullBorderPadding: number;
    };
  }
}
