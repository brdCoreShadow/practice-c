import * as SC from "./ListStyled"

import EighthItem from "../Items/EighthItem/EighthItem";
import FifthItem from "../Items/FifthItem/FifthItem";
import FirstItem from "../Items/FirstItem/FirstItem";
import FourthItem from "../Items/FourthItem/FourthItem";
import SecondItem from "../Items/SecondItem/SecondItem";
import SeventhItem from "../Items/SeventhItem/SeventhItem";
import SixthItem from "../Items/SixthItem/SixthItem";
import ThirdItem from "../Items/ThirdItem/ThirdItem";

const List = () => {
  return (
    <SC.ListStyled>
      <FirstItem/>
      <SecondItem/>
      <ThirdItem/>
      <FourthItem/>
      <FifthItem/>
      <SixthItem/>
      <SeventhItem/>
      <EighthItem/>
    </SC.ListStyled>
  );
};

export default List;
