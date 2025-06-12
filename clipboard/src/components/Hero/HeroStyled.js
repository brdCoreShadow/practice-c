import styled from "@emotion/styled";

export const HeroStyled = styled.div`
  & > h1 {
    margin-bottom: 16px;

    font-size: 32px;
    letter-spacing: -0.52px;
    font-weight: 600;

    color: #4C545C;

    @media (min-width: 1280px){
        font-size: 46px;
        letter-spacing: -0.75px;
    }
  }

  & > p{
    margin-bottom: 48px;

    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.12px;

    color: #9EABB2;

    @media (min-width:1280px){
        font-size: 20px;
        line-height: 1.5;
        letter-spacing: 0.15;
    }
  }
`;
