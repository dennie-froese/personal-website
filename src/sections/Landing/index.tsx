import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";
import Button from "../../components/Button";
import Avatar from "../../images/Avatar-nobackground.png";
import HeadinBold from "../../components/HeadingBold";
import SubHeading from "../../components/SubHeading";

export default function Landing() {
  return (
    <>
      <div style={style.headerContainer}>
        <img style={style.logo} src={PersonalLogo} alt="" />
        <Button />
      </div>
      <div style={style.container}>
        <HeadinBold>Front-end developer & designer</HeadinBold>
        <div style={style.subContainer}>
          <SubHeading>I like to design and develop user interfaces!</SubHeading>
          <img style={style.avatar} src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
}
