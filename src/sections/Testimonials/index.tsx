import React from "react";
import style from "./style";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonial from "../../components/Testimonial";
import { content } from "./content";
import "./index.css";
import HeadingBold from "../../components/HeadingBold";
import TextBody from "../../components/TextBody";

export default function Testimonials() {
  return (
    <div style={style.container}>
      <HeadingBold fontSize={30}>Testimonials</HeadingBold>
      <TextBody fontSize={18}>
        People I worked with in the past have said some nice things:
      </TextBody>
      <div style={style.subContainer}>
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={600}
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
