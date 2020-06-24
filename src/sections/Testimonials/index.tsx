import React from "react";
import { content } from "./content";
import style from "./style";
import "./index.css";

import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import useLerp from "../../hooks/useLerp";
import Testimonial from "../../components/Testimonial";
import HeadingBold from "../../components/HeadingBold";
import TextBody from "../../components/TextBody";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Testimonials() {
  const heightSlide = useLerp(1400, 450);
  const widthSlide = useLerp(1000, 550);

  return (
    <div style={style.container}>
      <HeadingBold fontSize={useBreakpoint() ? 40 : 25}>
        Testimonials
      </HeadingBold>
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
