import styled from "@emotion/styled";

export const Footer = styled.footer`
  padding-top: 52px;
  padding-bottom: 52px;

  text-align: center;

  background-color: #9eabb2;

  color: #4c545c;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding-top: 40px;
    padding-bottom: 40px;

    & > div {
      margin-bottom: 0;
    }
  }
`;

export const NavStyled = styled.nav`
  margin-bottom: 48px;

  @media (min-width: 1280px) {
    margin-bottom: 0;

    & > ul {
      max-width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 28px;
    }
  }

  & li {
    width: 150px;
    text-align: center;

    @media (min-width: 1280px) {
      text-align: left;
    }
  }

  & li:not(:last-of-type) {
    margin-bottom: 20px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  & a {
    font-size: 18px;
    line-height: 1.7;
    letter-spacing: 0.14px;

    text-decoration: none;

    color: #4c545c;

    @media (min-width: 1280px) {
      transition: color 0.3s;

      &:hover,
      &:focus,
      &:active {
        color: #26bba4;
        cursor: pointer;
        transition: color 0.3s;
      }
    }
  }
`;
