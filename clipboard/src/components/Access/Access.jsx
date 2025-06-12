import * as SC from "./AccessStyled"

import devicesImg from "../../assets/images/image-devices.png"
const Access = () => {
  return (
    <SC.AccessStyled>
      <SC.AccessContentCon>
      <SC.AccessTitleStyled>Access Clipboard Anywhere</SC.AccessTitleStyled>
      <SC.AccessContentStyled>
        Whether you’re on the go, or at your computer, you can access all your
        Clipboard snippets in a few simple clicks.
      </SC.AccessContentStyled>
      </SC.AccessContentCon>
      <SC.AccessThumbStyled>
        <img src={devicesImg} alt="devices" />
      </SC.AccessThumbStyled>
    </SC.AccessStyled>
  );
};

export default Access;
