import React from "react";
import style from "./style";
import porsche from "../../images/porsche.svg";
import santander from "../../images/santander.svg";
import johnson from "../../images/johnson.png";
import loreal from "../../images/loreal.png";

export default function Companies() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}>
        I'm proud to have worked for some amazing companies and brands:
      </p>
      <div style={style.subContainer}>
        <img style={style.logo} src={santander} />
        <img style={style.logo} src={porsche} />
        <img style={style.logo} src={loreal} />
        <img style={style.logo} src={johnson} />
      </div>
    </div>
  );
}
