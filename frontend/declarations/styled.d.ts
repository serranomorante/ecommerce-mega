// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    direction: string;

    palette?: {
      type: string;
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
  }
}
