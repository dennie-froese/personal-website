import React, { useState } from "react";
import style from "./style";

export default function Button() {
  const [colorBackground, setColorBackground] = useState("");
  const [colorText, setColorText] = useState("black");
  function mouseOver() {
    setColorBackground("black");
    setColorText("white");
  }
  function mouseOut() {
    setColorBackground("");
    setColorText("black");
  }
  return (
    <a
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      style={{
        ...style.button,
        backgroundColor: colorBackground
      }}
      href="mailto:denfroese@gmail.com?subject=Hi Dennie!"
    >
      <p style={{ ...style.text, color: colorText }}>Say hello</p>
    </a>
  );
}
