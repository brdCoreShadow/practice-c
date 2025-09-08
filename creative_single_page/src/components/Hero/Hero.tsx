import * as SC from "./HeroStyled"

const Hero:React.FC = () => {
  return (
    <SC.HeroCon>
      <SC.BgImgCon></SC.BgImgCon>
      <SC.HeroContentCon>
        <h3>Branding & website design agency</h3>
        <p>We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
        <button type="button">Learn More</button>
      </SC.HeroContentCon>
    </SC.HeroCon>
  );
};

export default Hero;
