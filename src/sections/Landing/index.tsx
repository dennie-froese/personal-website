import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";
import gmail from "../../images/gmail.png";
import Linkedin from "../../images/Linkedin.svg";
import Github from "../../images/Github.png";
import Button from "../../components/Button";
import Avatar from "../../images/Avatar-background.jpg";
import HeadinBold from "../../components/HeadingBold";
import SubHeading from "../../components/SubHeading";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Landing() {
  return (
    <>
      <div style={style.headerContainer}>
        <img style={style.logo} src={PersonalLogo} alt="" />
        <div>
          <img style={style.logo} src={gmail} alt="" />
          <img style={style.logo} src={Linkedin} alt="" />
          <img style={style.logo} src={Github} alt="" />
        </div>
      </div>
      <div style={style.container}>
        <HeadinBold fontSize={useBreakpoint() ? 60 : 40}>
          Front-end Engineer & Designer
        </HeadinBold>
        <div style={style.subContainer}>
          <SubHeading>I love to design and develop user interfaces!</SubHeading>
          <img style={style.avatar} src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
}
