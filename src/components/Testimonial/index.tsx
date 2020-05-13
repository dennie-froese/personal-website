import React from "react";
import style from "./style";

export default function Testimonial() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}>Testimonial</p>
      <p>Name</p>
      <div style={style.subContainer}>
        <p style={style.textMain}>Picture</p>
      </div>
    </div>
  );
}
