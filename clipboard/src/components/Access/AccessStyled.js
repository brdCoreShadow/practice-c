import styled from "@emotion/styled";

export const AccessStyled = styled.div`
  padding-top: 92px;
  padding-bottom: 64px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-top: 72px;
    padding-bottom: 80px;
  }
`;

export const AccessContentCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    width: 50%;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const AccessTitleStyled = styled.h3`
  margin-bottom: 16px;

  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.46px;

  color: #4c545c;

  @media (min-width: 1280px) {
    margin-bottom: 20px;

    font-size: 36px;
    letter-spacing: -0.59px;
  }
`;

export const AccessContentStyled = styled.p`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.12px;

  color: #9eabb2;

  @media (min-width: 1280px) {
    font-size: 18px;
  }
`;

export const AccessThumbStyled = styled.div`
  display: inline-block;

  width: 311px;
  height: 182px;

  @media (min-width: 1280px) {
    width: 812px;
    height: 475px;
  }

  & > img {
    width: inherit;
    height: inherit;
  }
`;
