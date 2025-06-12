import styled from "@emotion/styled";

export const SocNetStyled = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > li:not(:last-of-type) {
    margin-right: 40px;
  }

  & > li {
    @media (min-width: 1280px) {
     & a {
    color: #4c545c; /* Base icon color */
    transition: color 0.3s ease;

    &:hover {
      color: #26bba4; /* Hover fill will follow this */
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;

      path {
        fill: currentColor;
      }
    }
  }
    }
  }
`;
