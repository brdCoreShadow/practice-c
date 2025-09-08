import styled from "@emotion/styled";

export const MenuCon = styled.div`
  position: absolute;

  top: 0;
  right: 0;

  transform: translate(-26px, 110px);

  display: inline-block;
  width: 67%;

  padding-top: 32px;
  padding-bottom: 28px;
  padding-left: 26px;
  padding-right: 26px;

  text-align: center;

  color: #fff;

  background-color: #191921;
`;

export const BurgerList = styled.ul`
  margin-bottom: 24px;

  & > li {
    &:not(:last-of-type) {
      margin-bottom: 24px;
    }

    & > a {
      font-size: 18px;
      line-height: 1.78;

      color: #fff;
    }
  }
`;

export const MenuBtn = styled.button`
  padding-top: 22px;
  padding-bottom: 22px;
  padding-left: 24px;
  padding-right: 24px;

  font-size: 16px;
  font-weight: 800;

  color: #fff;

  background-color: #f94f4f;
`;
