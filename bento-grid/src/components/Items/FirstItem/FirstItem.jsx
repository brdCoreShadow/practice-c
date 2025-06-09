import * as SC from "./FirstItemStyled";

import star from "../../../assets/images/Star 7.svg";
const FirstItem = () => {
  return (
    <SC.FirstItemStyled>
      <h3>
        Social Media <span>10x</span> <span>Faster</span> with AI
      </h3>
      <ul>
        <li>
          <img src={star} alt="star" />
        </li>
        <li>
          <img src={star} alt="star" />
        </li>
        <li>
          <img src={star} alt="star" />
        </li>
        <li>
          <img src={star} alt="star" />
        </li>
        <li>
          <img src={star} alt="star" />
        </li>
      </ul>
      <p>Over 4,000 5-star reviews</p>
    </SC.FirstItemStyled>
  );
};

export default FirstItem;
