import React from "react";
import style from "./style";
import Testimonial from "../../components/Testimonial";

export default function Testimonials() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}>Testimonials</p>
      <p>People I worked with in the past have said some nice things :)</p>
      <div style={style.subContainer}>
        <Testimonial />
      </div>
    </div>
  );
}
