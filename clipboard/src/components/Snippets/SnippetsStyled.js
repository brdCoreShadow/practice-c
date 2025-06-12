import styled from "@emotion/styled";

export const SnippetsStyled = styled.div`
  padding-top: 80px;
  padding-bottom: 92px;

  text-align: center;

  @media (min-width: 1280px) {
    padding-top: 72px;
    padding-bottom: 72px;
  }
`;

export const SnippetsContentCon = styled.div`
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    width: 50%;

    margin-bottom: 80px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const SnippetsTitleStyled = styled.h2`
  margin-bottom: 16px;

  font-size: 28px;
  letter-spacing: -0.46px;
  font-weight: 600;

  color: #4c545c;

  @media (min-width: 1280px) {
    margin-bottom: 20px;

    font-size: 36px;
  }
`;

export const SnippetsContent = styled.p`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.12px;

  color: #9eabb2;
`;

export const SnippetsListCon = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export const ThumbImgComp = styled.div`
  position: relative;

  overflow: hidden;

  display: inline-block;
  width: 312px;
  height: 238px;

  margin-bottom: 56px;

  @media (min-width: 1280px) {
    width: 752px;
    height: 572px;

    margin-bottom: 0;
  }

  & > img {
    width: inherit;
    height: inherit;

    @media (min-width: 1280px) {
      position: absolute;
      top: 0;
      left: 0;

      transform: translate(-60px, 0);
    }
  }
`;

export const SnippettsList = styled.ul`
  @media (min-width: 1280px) {
    width: 28%;

    text-align: left;
  }

  & > li {


    & > h3 {
      margin-bottom: 12px;

      font-size: 24px;
      font-weight: 600;
      letter-spacing: -0.39px;

      color: #4c545c;

      @media (min-width: 1280px){
        margin-bottom: 8px;
      }
    }

    & > p {
      font-size: 16px;
      line-height: 1.6;
      letter-spacing: 0.12px;

      color: #9eabb2;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 48px;

    @media (min-width: 1280px){
        margin-bottom: 56px;
    }
  }
`;
