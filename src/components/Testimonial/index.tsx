import React from "react";
import style from "./style";
import { TestimonialType } from "../../sections/Testimonials/content";
import Ceri from "../../images/ceri.jpeg";
import Friede from "../../images/friede.jpg";

interface Props {
  content: TestimonialType;
}

export default function Testimonial({ content }: Props) {
  return (
    <div style={style.container}>
      <div style={style.imageWrap}>
        <img
          style={style.logo}
          src={content.name.includes("Ceri") ? Ceri : Friede}
          alt=""
        />
      </div>
      <p style={style.textFeedback}>
        {content.feedback ? content.feedback : "Feedback"}
      </p>
      <p style={style.name}>{content.name ? content.name : "Name"}</p>
      <p style={style.title}>{content.role ? content.role : "Role"}</p>
    </div>
  );
}
