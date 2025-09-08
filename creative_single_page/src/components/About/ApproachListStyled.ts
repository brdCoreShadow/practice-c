import styled from "@emotion/styled";

export const ApproachListStyled = styled.ul`
  padding-left: 16px;
  padding-right: 16px;

  & > li {
    position: relative;

    color: #fff;

    &:not(:last-of-type) {
      margin-bottom: 40px;
    }

    & > h5 {
      margin-bottom: 16px;

      font-size: 15px;
      line-height: 1.67;
      font-weight: 800;
    }

    & > p {
      font-size: 15px;
      line-height: 1.67;

      opacity: 0.7;
    }

    & > h6{
        position: absolute;

        top: 0;
        left: 0;

        transform: translate(-16px, -50%);

        font-size: 80px;
        line-height: 1.1;
        font-weight: 800;

        opacity: 0.2;
    }
  }
`;
