import Hero from "../../components/Hero/Hero";
import Logo from "../../components/Logo/Logo";
import * as SC from "./HeaderStyled";

const Header = () => {
  return (
    <SC.HeaderStyled>
      <Logo />
      <Hero />
    </SC.HeaderStyled>
  );
};

export default Header;
