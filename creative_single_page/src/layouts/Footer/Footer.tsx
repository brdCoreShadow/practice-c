import * as SC from "./FooterStyled"

import { IChildProps } from "@/utils/types";

const Footer: React.FC<IChildProps> = ({ children }) => {
  return <SC.FooterStyled>{children}</SC.FooterStyled>;
};

export default Footer;
