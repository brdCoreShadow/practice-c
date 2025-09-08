import styled from "@emotion/styled";

import bgHeroPicMob from "../../assets/images/mobile/image-hero.jpg";

export const HeroCon = styled.div`
  margin-bottom: 96px;
`;

export const BgImgCon = styled.div`
  display: inline-block;

  width: 100%;
  height: 200px;

  margin-bottom: 56px;

  background-image: url(${bgHeroPicMob});
`;

export const HeroContentCon = styled.div`
  padding-left: 24px;
  padding-right: 24px;

  & > h3 {
    margin-bottom: 16px;

    font-size: 40px;
    font-weight: 800;
  }

  & > p {
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 1.67;
  }

  & > button {
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 40px;
    padding-right: 40px;

    font-size: 18px;
    font-weight: 800;

    color: #fff;

    background-color: #f94f4f;

    &:hover,
    &:active,
    &:focus {
      cursor: pointer;

      background-color: #ff9393;
    }
  }
`;
