import * as SC from "./WorkflowStyled";

const Workflow = () => {
  return (
    <SC.WorkflowStyled>
      <h3>Supercharge your workflow</h3>
      <p>We’ve got the tools to boost your productivity.</p>
      <ul>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4>Create blacklists</h4>
          <p>
            Ensure sensitive information never makes its way to your clipboard
            by excluding certain sources.
          </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4>Plain text snippets</h4>
          <p>
            Remove unwanted formatting from copied text for a consistent look.
          </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4>Sneak preview</h4>
          <p>
            Quick preview of all snippets on your Clipboard for easy access.
          </p>
        </li>
      </ul>
    </SC.WorkflowStyled>
  );
};

export default Workflow;
