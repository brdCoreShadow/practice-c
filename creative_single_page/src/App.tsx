import * as SC from "./AppStyled"
import About from "./components/About/About";
import BurgerBtn from "./components/BurgerBtn/BurgerBtn";
import Hero from "./components/Hero/Hero";
import Logo from "./components/Logo/Logo";

import Header from "./layouts/Header/Header";

const App: React.FC = () => {
  return (
    <SC.AppStyled>
      <Header>
        <Logo/>
        <BurgerBtn/>
      </Header>
      <Hero/>
      <About/>
    </SC.AppStyled>
  );
};

export default App;
