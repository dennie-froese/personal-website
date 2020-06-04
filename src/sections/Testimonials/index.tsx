import React, { useState, useEffect } from "react";
import { content } from "./content";
import style from "./style";
import "./index.css";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import Testimonial from "../../components/Testimonial";
import HeadingBold from "../../components/HeadingBold";
import TextBody from "../../components/TextBody";

export default function Testimonials() {
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

  const heightSlide = lerp(1400, 450, width / 1600);
  const widthSlide = lerp(1000, 550, width / 1600);

  return (
    <div style={style.container}>
      <HeadingBold fontSize={30}>Testimonials</HeadingBold>
      <TextBody fontSize={18} margin={5}>
        People I worked with in the past have said some nice things:
      </TextBody>
      <div style={style.subContainer}>
        <CarouselProvider
          naturalSlideWidth={widthSlide}
          naturalSlideHeight={heightSlide}
          totalSlides={2}
        >
          <Slider>
            {content.testimonials.map((obj, i) => (
              <Slide index={i}>
                <Testimonial content={obj} />
              </Slide>
            ))}
          </Slider>
          <div style={style.buttonContainer}>
            <Dot slide={0}>
              <></>
            </Dot>
            <Dot slide={1}>
              <></>
            </Dot>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
