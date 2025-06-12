import * as SC from "./SnippetsStyled";

import compImg from "../../assets/images/image-computer.png";
const Snippets = () => {
  return (
    <SC.SnippetsStyled>
      <SC.SnippetsContentCon>
        <SC.SnippetsTitleStyled>
          Keep track of your snippets
        </SC.SnippetsTitleStyled>
        <SC.SnippetsContent>
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </SC.SnippetsContent>
      </SC.SnippetsContentCon>
      <SC.SnippetsListCon>
        <SC.ThumbImgComp>
          <img src={compImg} alt="computer" />
        </SC.ThumbImgComp>
        <SC.SnippettsList>
          <li>
            <h3>Quick Search</h3>
            <p>
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </li>
          <li>
            <h3>iCloud Sync</h3>
            <p>Instantly saves and syncs snippets across all your devices.</p>
          </li>
          <li>
            <h3>Complete History</h3>
            <p>
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </li>
        </SC.SnippettsList>
      </SC.SnippetsListCon>
    </SC.SnippetsStyled>
  );
};

export default Snippets;
