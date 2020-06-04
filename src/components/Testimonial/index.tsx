import React, { useState, useEffect } from "react";
import style from "./style";
import { TestimonialType } from "../../sections/Testimonials/content";
import Ceri from "../../images/ceri.jpeg";
import Friede from "../../images/friede.jpg";
import TextBody from "../TextBody";
import HeadingBold from "../HeadingBold";

interface Props {
  content: TestimonialType;
}

export default function Testimonial({ content }: Props) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function lerp(start: number, end: number, t: number) {
    return start * (1 - t) + end * t;
  }

  const fontSizeBody = Math.floor(lerp(3, 20, width / 1600));
  const fontSizeHeader = Math.floor(lerp(10, 25, width / 1600));
  const fontSizeSubHeader = Math.floor(lerp(8, 15, width / 1600));

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
