import React from "react";
import style from "./style";

import useLerp from "../../hooks/useLerp";
import { TestimonialType } from "../../sections/Testimonials/content";
import TextBody from "../TextBody";
import HeadingBold from "../HeadingBold";

import Ceri from "../../images/ceri.jpeg";
import Friede from "../../images/friede.jpg";

interface Props {
  content: TestimonialType;
}

export default function Testimonial({ content }: Props) {
  const fontSizeBody = useLerp(3, 20);
  const fontSizeHeader = useLerp(10, 25);
  const fontSizeSubHeader = useLerp(8, 15);

  return (
    <div style={style.container}>
      <div style={style.imageWrap}>
        <img
          style={style.logo}
          src={content.name.includes("Ceri") ? Ceri : Friede}
          alt=""
        />
      </div>
      <TextBody margin={fontSizeBody} fontSize={fontSizeBody}>
        {content.feedback ? content.feedback : "Feedback"}
      </TextBody>
      <div style={style.bottom}>
        <HeadingBold fontSize={fontSizeHeader} margin={0}>
          {content.name ? content.name : "Name"}
        </HeadingBold>
        <TextBody margin={5} fontSize={fontSizeSubHeader}>
          {content.role ? content.role : "Role"}
        </TextBody>
      </div>
    </div>
  );
}
