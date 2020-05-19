import React from "react";
import style from "./style";
import { TestimonialType } from "../../sections/Testimonials/content";

interface Props {
  content: TestimonialType;
}

export default function Testimonial({ content }: Props) {
  return (
    <div style={style.container}>
      <p>{content.image ? content.image : "Image"}</p>
      <p style={style.textFeedback}>
        {content.feedback ? content.feedback : "Feedback"}
      </p>
      <p style={style.name}>{content.name ? content.name : "Name"}</p>
      <p style={style.title}>{content.role ? content.role : "Role"}</p>
    </div>
  );
}
