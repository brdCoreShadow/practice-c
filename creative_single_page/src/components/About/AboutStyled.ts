import styled from "@emotion/styled";

export const AboutList = styled.ul`
  margin-bottom: 100px;

  & > li:nth-of-type(1) {
    background-color: #191921;
  }

  & > li:nth-of-type(2) {
    padding-top: 96px;
    padding-bottom: 96px;
    padding-left: 24px;
    padding-right: 24px;

    background-color: #f94f4f;
  }

  & > li:nth-of-type(3) {
  }
`;

export const StrategicPicThumb = styled.div`
  position: relative;

  display: inline-block;
  width: 100%;
  height: 200px;

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    display: inline-block;
    width: 100%;
    height: 100%;

    content: "";

    background-color: #000;
    opacity: 0.2;
  }

  &::after {
    position: absolute;

    bottom: 0;
    left: 0;
    z-index: 2;

    display: inline-block;
    width: 63px;
    height: 29px;

    transform: translate(24px, 50%);

    content: "";

    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='135' height='61'><path d='M98.882 60.408c10.951 0 19.618-4.864 25.999-14.593 6.38-9.728 9.571-23.054 9.571-39.977h-29.19c-.633 3.439-1.9 6.199-3.8 8.28-1.902 2.082-4.662 3.123-8.283 3.123-3.258 0-6.788-.86-10.59-2.58a354.773 354.773 0 01-12.354-5.905C65.8 6.54 60.89 4.594 55.505 2.92 50.119 1.245 44.214.408 37.787.408c-11.585 0-20.704 4.887-27.356 14.66C3.778 24.843.452 38.1.452 54.843h29.19c.633-3.348 2.059-6.063 4.276-8.144 2.218-2.082 5.182-3.123 8.893-3.123 3.077 0 6.471.838 10.182 2.512a437.483 437.483 0 0112.49 5.905c4.616 2.262 9.708 4.23 15.274 5.905 5.566 1.674 11.608 2.511 18.125 2.511z' fill='%23F94F4F' fill-rule='nonzero'/></svg>");

    background-size: cover;
  }
`;

export const StrategicContent = styled.div`
  padding-top: 72px;
  padding-bottom: 72px;
  padding-left: 24px;
  padding-right: 24px;

  color: #fff;

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    font-weight: 800;
    line-height: 1.25;

    & > span {
      color: #f94f4f;
    }
  }

  & > p {
    margin-bottom: 40px;

    font-size: 15px;
    line-height: 1.67;
  }

  & > button {
    padding-bottom: 10px;

    font-size: 15px;
    font-weight: 800;

    color: #f94f4f;

    background-color: transparent;

    border: none;

    border-bottom: 2px solid #f94f4f;

    transition: all 0.3s;

    &:hover,
    &:cover,
    &:active {
      cursor: pointer;

      color: #ff9393;

      border-bottom: 2px solid #ff9393;

      transition: all 0.3s;
    }
  }
`;

export const ApproachTitleCon = styled.div`
  margin-bottom: 48px;

  & > h3 {
    font-size: 32px;
    line-height: 1.25;
    font-weight: 800;

    color: #fff;
  }
`;

export const PicCon = styled.div`
  position: relative;

  display: inline-block;

  width: 100%;
  height: 404px;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &::before {
    position: absolute;

    top: 0;
    left: 0;

    display: inline-block;
    width: 100%;
    height: 100%;
    content: "";

    background-color: #000;
    opacity: 0.2;
  }
`;

export const PicThumb = styled.div`
  width: inherit;
  height: inherit;
`;

export const PicConContent = styled.div`
  position: absolute;

  bottom: 0;
  right: 0;

  transform: translate(-32px, -36px);

  display: inline-block;

  text-align: right;

  color: #fff;

  & > h3 {
    font-size: 15px;
    line-height: 1.33;
    font-weight: 800;
  }

  & > p {
    font-size: 15px;
    line-height: 1.33;
  }
`;

export const SliderCon = styled.div`
  padding-top: 64px;
  padding-bottom: 64px;
  padding-left: 24px;
  padding-right: 24px;

  background-color: #191921;

  & > h3 {
    margin-bottom: 24px;

    font-size: 32px;
    line-height: 1.25;
    font-weight: 800;

    color: #fff;
  }
`;

export const SliderBtnCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

& > button:not(:last-of-type){
    margin-right: 16px;
}

& > button{
    background-color: transparent;
}
`
