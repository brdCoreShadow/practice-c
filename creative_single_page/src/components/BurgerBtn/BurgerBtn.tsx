import * as SC from "./BurgerBtnStyled"

import burgerPic from "../../assets/images/mobile/icon-hamburger.svg"
import crossIcon from "../../assets/images/mobile/icon-cross.svg"

import { IToggleMenu } from "@/utils/types";

const BurgerBtn:React.FC<IToggleMenu> = ({toggleMenu, isMenu}) => {
    return ( 
        <SC.BurgerBtnStyled type="button" onClick={toggleMenu}>
            <img src={isMenu ? crossIcon : burgerPic} alt="burger" />
        </SC.BurgerBtnStyled>
     );
}
 
export default BurgerBtn;