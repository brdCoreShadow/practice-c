import styled from "@emotion/styled";

export const MainCon = styled.div`
  & > h3 {
    margin-bottom: 48px;

    font-size: 32px;
    font-weight: 800;
    line-height: 1.25;

    color: #000;
  }

  & > button {
    padding-top: 22px;
    padding-bottom: 22px;
    padding-left: 44px;
    padding-right: 44px;

    font-size: 16px;
    font-weight: 800;

    color: #fff;

    background-color: #f94f4f;

    transition: all 0.3s;

    &:hover,
    &:active,
    &:focus {
      cursor: pointer;

      background-color: #ff9393;

      transition: all 0.3s;
    }
  }
`;
