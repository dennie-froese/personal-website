import React from "react";
import style from "./style";
import porsche from "../../images/porsche.svg";
import santander from "../../images/santander.svg";
import johnson from "../../images/johnson.png";
import loreal from "../../images/loreal.png";
import HeadingBold from "../../components/HeadingBold";

export default function Companies() {
  return (
    <div style={style.container}>
      <HeadingBold fontSize={35}>
        I'm proud to have worked for some amazing companies and brands:
      </HeadingBold>
      <div style={style.subContainer}>
        <img style={style.logo} alt="" src={santander} />
        <img style={style.logo} alt="" src={porsche} />
        <img style={style.logo} alt="" src={loreal} />
        <img style={style.logo} alt="" src={johnson} />
      </div>
    </div>
  );
}
