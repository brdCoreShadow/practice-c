import { useEffect } from "react";
import * as SC from "./AppStyled";
import About from "./components/About/About";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import Hero from "./components/Hero/Hero";
import Logo from "./components/Logo/Logo";
import BurgerPortal from "./components/Portal/Portal";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./layouts/Footer/Footer";

import Header from "./layouts/Header/Header";
import SharedLayout from "./layouts/SharedLayout/SharedLayout";
import { useMenuToggle } from "./hooks/useMenuToggle";

const App: React.FC = () => {
  const { isMenu, toggleMenu } = useMenuToggle();

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenu]);

  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn toggleMenu={toggleMenu} isMenu={isMenu}/>
      </Header>
      {isMenu && (
        <BurgerPortal>
          <BurgerMenu />
        </BurgerPortal>
      )}
      <SharedLayout>
        <Hero />
        <About />
      </SharedLayout>
      <Footer>
        <Schedule />
      </Footer>
    </SC.AppStyled>
  );
};

export default App;
