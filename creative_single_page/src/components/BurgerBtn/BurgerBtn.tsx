import * as SC from "./BurgerBtnStyled"

import burgerPic from "../../assets/images/mobile/icon-hamburger.svg"

const BurgerBtn:React.FC = () => {
    return ( 
        <SC.BurgerBtnStyled type="button">
            <img src={burgerPic} alt="burger" />
        </SC.BurgerBtnStyled>
     );
}
 
export default BurgerBtn;