import React from "react";
import style from "./style";
import gmail from "../../images/gmail.png";
import Linkedin from "../../images/Linkedin.svg";
import Github from "../../images/Github.png";

export default function ContactLogos() {
  const fire = (url: string) => {
    window.open(url);
  };
  const mail = () => {
    window.location.assign("mailto:denfroese@gmail.com?subject=Hi Dennie!");
  };
  return (
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
  );
}
