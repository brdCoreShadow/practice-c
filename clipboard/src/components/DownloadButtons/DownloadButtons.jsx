import * as SC from "./DonwloadButtons";

const DownloadButtons = () => {
  return (
    <SC.DownloadButtonsStyled>
      <button type="button">Download for iOS</button>
      <button type="button">Download for Mac</button>
    </SC.DownloadButtonsStyled>
  );
};

export default DownloadButtons;
