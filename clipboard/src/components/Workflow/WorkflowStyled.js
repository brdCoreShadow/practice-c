import styled from "@emotion/styled";

export const WorkflowStyled = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;

  text-align: center;

  @media (min-width: 1280px){
    padding-top: 72px;
    padding-bottom: 72px;
  }
`;

export const WorkFlowContentConStyled = styled.div`
  margin-bottom: 88px;

  @media (min-width: 1280px) {
    margin-bottom: 72px;
  }

    & > h3 {
    margin-bottom: 12px;

    font-size: 28px;
    letter-spacing: -0.46px;
    font-weight: 600;

    color: #4c545c;

    @media (min-width: 1280px){
        margin-bottom: 20px;

        font-size: 36px;
        letter-spacing: -0.59px;
    }
  }

  & > p {
    font-size: 16px;
    line-height: 1.6;
    letter-spacing: 0.12px;

    color: #9eabb2;

    @media (min-width: 1280px){
        font-size: 18px;
    }
  }
`;

export const WorkflowListStyled = styled.ul`
  text-align: center;

@media (min-width: 1280px){
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

  & > li {

    @media (min-width: 1280px){
        width: 320px;
    }

    & > div {
      display: inline-block;

      margin-bottom: 40px;
    }

    & > h4 {
      margin-bottom: 16px;

      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.39px;

      color: #4c545c;
    }

    & > p {
      font-size: 16px;
      line-height: 1.6;
      letter-spacing: 0.12px;

      color: #9eabb2;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 56px;

    @media (min-width: 1280px){
        margin-bottom: 0;
        margin-right: 32px;
    }
  }
`;
