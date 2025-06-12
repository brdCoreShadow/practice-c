import styled from "@emotion/styled";

export const LogoThumbStyled = styled.div`
  display: inline-block;

  width: 125px;
  height: 125px;

margin-bottom: 64px;

@media (min-width: 1280px){
    margin-bottom: 56px;
}

  & > img {
    width: inherit;
    height: inherit;
  }
`;
