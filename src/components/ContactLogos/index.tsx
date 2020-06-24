import React, { useState } from "react";
import style from "./style";
import gmail from "../../images/gmail.png";
import Linkedin from "../../images/Linkedin.svg";
import Github from "../../images/Github.png";
import menu from "../../images/menu.png";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function ContactLogos() {
  const [navOpened, setNavOpened] = useState(false);
  const navClassName = navOpened ? "flyoutMenu show" : "flyoutMenu hide";

  function mouseOver(event: any) {
    event.target.style.backgroundColor = "lightgrey";
    event.target.style.borderRadius = "20%";
  }
  function mouseOut(event: any) {
    event.target.style.backgroundColor = "";
    event.target.style.borderRadius = "";
  }
  const fire = (url: string) => {
    window.open(url);
  };
  const mail = () => {
    window.location.assign("mailto:denfroese@gmail.com?subject=Hi Dennie!");
  };

  return useBreakpoint() ? (
    <div style={style.logosContainer}>
      <img
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={() => fire("https://github.com/dennie-froese")}
        style={style.logos}
        src={Github}
        alt=""
      />
      <img
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={mail}
        style={style.logoGmail}
        src={gmail}
        alt=""
      />
      <img
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        onClick={() => fire("https://www.linkedin.com/in/dennie-froese/")}
        style={style.logos}
        src={Linkedin}
        alt=""
      />
    </div>
  ) : null;
}
