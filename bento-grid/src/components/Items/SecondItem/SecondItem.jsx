import * as SC from "./SecondItemStyled";

import instagram from "../../../assets/images/insta.svg";
import twitter from "../../../assets/images/twitter.svg";
const SecondItem = () => {
  return (
    <SC.SecondItemStyled>
      <SC.SocNetCon>
        <SC.SocNetItem>
          <SC.Thumb>
            <img src={instagram} alt="instagram" />
          </SC.Thumb>
          <SC.ContentCon>
            <p>@YourCo</p>
            <p>12K Followers</p>
          </SC.ContentCon>
        </SC.SocNetItem>
        <SC.SocNetItem>
          <SC.Thumb>
            <img src={twitter} alt="twitter" />
          </SC.Thumb>
          <SC.ContentCon>
            <p>@YourCo</p>
            <p>12K Followers</p>
          </SC.ContentCon>
        </SC.SocNetItem>
      </SC.SocNetCon>
      <h3>Manage multiple accounts and platforms.</h3>
    </SC.SecondItemStyled>
  );
};

export default SecondItem;
