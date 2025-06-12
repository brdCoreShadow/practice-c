import * as SC from "./LogoStyled";

import logoIcon from "../../assets/images/logo.svg"
const Logo = () => {
  return (
    <SC.LogoThumbStyled>
      <img src={logoIcon} alt="logo" />
    </SC.LogoThumbStyled>
  );
};

export default Logo;
