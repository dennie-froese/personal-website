import React from "react";
import style from "./style";
import "./index.css";

export default function Button() {
  return (
    <a
      style={style.button}
      href="mailto:denfroese@gmail.com?subject=Hi Dennie!"
    >
      <p style={style.text}>Get in touch!</p>
    </a>
  );
}
