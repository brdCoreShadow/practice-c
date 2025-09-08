import * as SC from "./BurerMenuStyled"

const BurgerMenu:React.FC = () => {
    return ( 
        <SC.MenuCon>
            <SC.BurgerList>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </SC.BurgerList>
            <button type="button">Schedule a Call</button>
        </SC.MenuCon>
     );
}
 
export default BurgerMenu;