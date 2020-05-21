import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";
import Button from "../../components/Button";
import Avatar from "../../images/Avatar-nobackground.png";

export default function Landing() {
  return (
    <>
      <div style={style.headerContainer}>
        <img style={style.logo} src={PersonalLogo} alt="" />
        <Button />
      </div>
      <div style={style.container}>
        <p style={style.textHeader}> Front-end developer and designer</p>
        <div style={style.subContainer}>
          <p style={style.textMain}>
            I like to design and develop user interfaces!
          </p>
          <img style={style.avatar} src={Avatar} alt="" />
        </div>
      </div>
    </>
  );
}
