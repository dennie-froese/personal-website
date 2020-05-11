import React from "react";
import style from "./style";

export default function Intro() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}> Front-end developer and designer</p>
      <div style={style.subContainer}>
        <p style={style.textMain}>
          I like to design and develop user interfaces!
        </p>
      </div>
    </div>
  );
}
