import * as SC from "./ApproachListStyled"

const ApproachList:React.FC = () => {
    return ( 
        <SC.ApproachListStyled>
            <li>
                <h6>01</h6>
                <h5>Brand Strategy</h5>
                <p>Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
            </li>
            <li>
                <h6>02</h6>
                <h5>Brand Design</h5>
                <p>Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively.</p>
            </li>
            <li>
                <h6>03</h6>
                <h5>Web Design</h5>
                <p>A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
            </li>
        </SC.ApproachListStyled>
     );
}
 
export default ApproachList;