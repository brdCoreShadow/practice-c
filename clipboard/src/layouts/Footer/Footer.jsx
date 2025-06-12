import Logo from "../../components/Logo/Logo";
import SocNets from "../../components/SocNets/SocNets";
import * as SC from "./FooterStyled";
const Footer = () => {
  return (
    <SC.Footer>
      <Logo/>
      <SC.NavStyled>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Press Kit</a>
          </li>
          <li>
            <a href="#">Install Guide</a>
          </li>
        </ul>
      </SC.NavStyled>
      <SocNets/>
    </SC.Footer>
  );
};

export default Footer;
