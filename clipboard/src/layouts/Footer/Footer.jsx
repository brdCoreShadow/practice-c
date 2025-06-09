import Logo from "../../components/Logo/Logo";
import * as SC from "./FooterStyled"
const Footer = () => {
    return ( <SC.Footer>
<Logo/>
<nav>
<ul>
    <li><a href=""></a>FAQs</li>
    <li><a href=""></a>Contact Us</li>
    <li><a href=""></a>Privacy Policy</li>
    <li><a href=""></a>Press Kit</li>
    <li><a href=""></a>Install Guide</li>
</ul>
</nav>
    </SC.Footer> );
}
 
export default Footer;