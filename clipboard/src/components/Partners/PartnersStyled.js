import styled from "@emotion/styled";

export const PartnersStyled = styled.ul`
  margin-top: 64px;
  margin-bottom: 64px;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    padding-top: 72px;
    padding-bottom: 72px;
  }

  & > li {
    & > img {
      margin-left: auto;
      margin-right: auto;
    }
  }

  & > li:not(:last-of-type) {
    margin-bottom: 60px;

    @media (min-width: 1280px) {
      margin-bottom: 0;
    }
  }
`;
