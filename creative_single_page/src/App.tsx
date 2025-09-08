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

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Header>
        <Logo />
        <BurgerBtn />
      </Header>
      <BurgerPortal>
        <BurgerMenu />  
      </BurgerPortal>
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
