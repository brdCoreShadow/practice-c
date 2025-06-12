import * as SC from "./HeroStyled"

import DownloadLinks from "../DownloadLinks/DownloadLinks";

const Hero = () => {
  return (
    <SC.HeroStyled>
      <h1>A history of everything you copy</h1>
      <p>
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>
      <DownloadLinks />
    </SC.HeroStyled>
  );
};

export default Hero;
