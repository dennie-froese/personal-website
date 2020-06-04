import React, { useState, useEffect } from "react";
import style from "./style";
import { TestimonialType } from "../../sections/Testimonials/content";
import Ceri from "../../images/ceri.jpeg";
import Friede from "../../images/friede.jpg";
import TextBody from "../TextBody";
import HeadingBold from "../HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";

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

  const fontSize = Math.floor(lerp(8, 15, width / 1600));

  console.log(fontSize);

  return (
    <div style={style.container}>
      <div style={style.imageWrap}>
        <img
          style={style.logo}
          src={content.name.includes("Ceri") ? Ceri : Friede}
          alt=""
        />
      </div>
      <TextBody fontSize={useBreakpoint() ? 20 : 6}>
        {content.feedback ? content.feedback : "Feedback"}
      </TextBody>
      <div style={style.bottom}>
        <HeadingBold fontSize={useBreakpoint() ? 25 : 15} margin={0}>
          {content.name ? content.name : "Name"}
        </HeadingBold>
        <TextBody margin={5} fontSize={fontSize}>
          {content.role ? content.role : "Role"}
        </TextBody>
      </div>
    </div>
  );
}
