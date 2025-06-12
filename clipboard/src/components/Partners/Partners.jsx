import * as SC from "./PartnersStyled";

import googleLogo from "../../assets/images/logo-google.png";
import ibmLogo from "../../assets/images/logo-ibm.png";
import microLogo from "../../assets/images/logo-microsoft.png";
import hpLogo from "../../assets/images/logo-hp.png";
import vectorLogo from "../../assets/images/logo-vector-graphics.png";
const Partners = () => {
  return (
    <SC.PartnersStyled>
      <li>
        <img src={googleLogo} alt="google" />
      </li>
      <li>
        <img src={ibmLogo} alt="ibm" />
      </li>
      <li>
        <img src={microLogo} alt="microsoft" />
      </li>
      <li>
        <img src={hpLogo} alt="hp" />
      </li>
      <li>
        <img src={vectorLogo} alt="vector" />
      </li>
    </SC.PartnersStyled>
  );
};

export default Partners;
