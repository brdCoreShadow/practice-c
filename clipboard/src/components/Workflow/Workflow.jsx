import * as SC from "./WorkflowStyled";

import blacklistIcon from "../../assets/images/icon-blacklist.svg"
import prewivIcon from "../../assets/images/icon-preview.svg"
import textIcon from "../../assets/images/icon-text.svg"
const Workflow = () => {
  return (
    <SC.WorkflowStyled>
      <SC.WorkFlowContentConStyled>
      <h3>Supercharge your workflow</h3>
      <p>We’ve got the tools to boost your productivity.</p>
      </SC.WorkFlowContentConStyled>
      <SC.WorkflowListStyled>
        <li>
          <div>
            <img src={blacklistIcon} alt="blaclist" />
          </div>
          <h4>Create blacklists</h4>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </li>
        <li>
          <div>
            <img src={textIcon} alt="text icon" />
          </div>
          <h4>Plain text snippets</h4>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </li>
        <li>
          <div>
            <img src={prewivIcon} alt="preview" />
          </div>
          <h4>Sneak preview</h4>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </li>
      </SC.WorkflowListStyled>
    </SC.WorkflowStyled>
  );
};

export default Workflow;
