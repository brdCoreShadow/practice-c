import styled from "@emotion/styled";

import bgIconMob from "../../assets/images/bg-header-mobile.png"
import bgIconDesk from "../../assets/images/bg-header-desktop.png"

export const HeaderStyled = styled.header`
padding-top: 124px;
padding-bottom: 80px;
padding-left: 32px;
padding-right: 32px;

text-align: center;

background-image: url(${bgIconMob});
background-repeat: no-repeat;
background-size: contain;



@media (min-width: 1280px){
    padding-top: 128px;
    padding-bottom: 72px;
    padding-left: 0;
    padding-right: 0;

background-image: url(${bgIconDesk});

}
`;
