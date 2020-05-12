import React from "react";
import style from "./style";
import PersonalLogo from "../../images/PersonalLogo.png";

export default function Intro() {
  return (
    <div style={style.container}>
      <div>
        <img src={PersonalLogo} />
      </div>
      <p style={style.textHeader}> Front-end developer and designer</p>
      <div style={style.subContainer}>
        <p style={style.textMain}>
          I like to design and develop user interfaces!
        </p>
      </div>
    </div>
  );
}
