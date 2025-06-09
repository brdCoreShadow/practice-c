import * as SC from "./ThirdItemStyled"

import calendar from "../../../assets/images/calendar.svg"
const ThirdItem = () => {
  return (
  <SC.ThirdItemStyled> 
    <h3>Maintain a consistent posting schedule.</h3>
    <SC.Thumb>
        <img src={calendar} alt="calendar" />
    </SC.Thumb>
  </SC.ThirdItemStyled>
);
};

export default ThirdItem;
