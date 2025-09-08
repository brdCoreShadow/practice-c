import * as Sc from "./LogoStyled"

import logoPic from "../../assets/images/desktop/logo.svg"

const Logo:React.FC = () => {
    return ( 
        <Sc.LogoStyled>
            <img src={logoPic} alt="logo" />
        </Sc.LogoStyled>
     );
}
 
export default Logo;