import React from "react";
import {
  StyledSocialNavbar,
  LeftAlignWrapper,
  SocialMediaWrapper,
  SocialButton,
  RightAlignWrapper,
  UpperNavbarItem,
  CenterComponentWrapper,
} from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialNavbar: React.FC = () => {
  return (
    <StyledSocialNavbar>
      <CenterComponentWrapper>
        <LeftAlignWrapper>
          <SocialMediaWrapper>
            <SocialButton>
              <FontAwesomeIcon icon="facebook" />
            </SocialButton>
            <SocialButton>
              <FontAwesomeIcon icon="instagram" />
            </SocialButton>
            <SocialButton>
              <FontAwesomeIcon icon="twitter" />
            </SocialButton>
            <SocialButton>
              <FontAwesomeIcon icon="youtube" />
            </SocialButton>
          </SocialMediaWrapper>
        </LeftAlignWrapper>
        <RightAlignWrapper>
          <UpperNavbarItem title="Help" />
          <UpperNavbarItem title="Registrarse/Iniciar Sesión" />
        </RightAlignWrapper>
      </CenterComponentWrapper>
    </StyledSocialNavbar>
  );
};

export default SocialNavbar;
