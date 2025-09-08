import ApproachList from "./ApproachList";

import * as SC from "./AboutStyled";

import forwardBtnPic from "../../assets/images/desktop/icon-arrow-next.svg";
import backBtnPic from "../../assets/images/desktop/icon-arrow-previous.svg";
import slidePicMob1 from "../../assets/images/mobile/image-slide-1.jpg";
import slidePicMob2 from "../../assets/images/mobile/image-slide-2.jpg";
import slidePicMob3 from "../../assets/images/mobile/image-slide-3.jpg";
import strategicPicMob from "../../assets/images/mobile/image-strategic.jpg";

const About: React.FC = () => {
  return (
    <SC.AboutList>
      <li>
        <SC.StrategicPicThumb>
          <img src={strategicPicMob} alt="strategic" />
        </SC.StrategicPicThumb>
        <SC.StrategicContent>
          <h3>
            <span>Design</span> is strategic.
          </h3>
          <p>
            “A well-crafted design strategy consistently produces desired
            outcomes and brand awareness. We are firm believers that success
            lies in creative collaboration with our clients.”
          </p>
          <button>Schedule a Call</button>
        </SC.StrategicContent>
      </li>
      <li>
        <div></div>
        <SC.ApproachTitleCon>
          <h3>Our approach for creating a winning brand</h3>
        </SC.ApproachTitleCon>
        <ApproachList />
      </li>
      <li>
        <SC.PicCon>
          <SC.PicThumb>
            <img src={slidePicMob1} alt="pic" />
          </SC.PicThumb>
          <SC.PicConContent>
            <h3>Lean Product Roadmap</h3>
            <p>2019 Project</p>
          </SC.PicConContent>
        </SC.PicCon>
        <div>
          <h3>Brand naming & guidelines</h3>
          <div>
            <button type="button">
              <img src={backBtnPic} alt="prev" />
            </button>
            <button type="button">
              <img src={forwardBtnPic} alt="next" />
            </button>
          </div>
        </div>
      </li>
    </SC.AboutList>
  );
};

export default About;
