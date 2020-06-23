import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";
import gmail from "../../images/gmail.png";
import Linkedin from "../../images/Linkedin.svg";
import Github from "../../images/Github.png";
import Avatar from "../../images/Avatar-background.jpg";
import HeadinBold from "../../components/HeadingBold";
import SubHeading from "../../components/SubHeading";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Landing() {
  const fire = (url: string) => {
    window.open(url);
  };
  const mail = () => {
    window.location.assign("mailto:denfroese@gmail.com?subject=Hi Dennie!");
  };
  return (
    <>
      <div style={style.headerContainer}>
        <img style={style.logo} src={PersonalLogo} alt="" />
        <div style={style.logosContainer}>
          <img
            onClick={() => fire("https://github.com/dennie-froese")}
            style={style.logos}
            src={Github}
            alt=""
          />
          <img onClick={mail} style={style.logoGmail} src={gmail} alt="" />
          <img
            onClick={() => fire("https://www.linkedin.com/in/dennie-froese/")}
            style={style.logos}
            src={Linkedin}
            alt=""
          />
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
