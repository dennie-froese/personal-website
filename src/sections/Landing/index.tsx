import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";

import Avatar from "../../images/Avatar-background.jpg";
import HeadinBold from "../../components/HeadingBold";
import SubHeading from "../../components/SubHeading";
import useBreakpoint from "../../hooks/useBreakpoint";
import ContactLogos from "../../components/ContactLogos";

export default function Landing() {
  return (
    <>
      <div style={style.headerContainer}>
        <img style={style.logo} src={PersonalLogo} alt="" />
        <ContactLogos />
      </div>
      <div style={style.container}>
        <HeadinBold fontSize={useBreakpoint() ? 60 : 30}>
          Front-end Engineer & Designer
        </HeadinBold>
        <div style={style.subContainer}>
          <SubHeading fontSize={useBreakpoint() ? 25 : 15}>
            I love to design and develop user interfaces!
          </SubHeading>
          <img style={style.avatar} src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
}
