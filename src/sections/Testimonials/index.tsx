import React, { useState, useEffect } from "react";
import style from "./style";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonial from "../../components/Testimonial";
import { content } from "./content";
import "./index.css";
import HeadingBold from "../../components/HeadingBold";
import TextBody from "../../components/TextBody";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Testimonials() {
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // function lerp(start: number, end: number, t: number) {
  //   return start * (1 - t) + end * t;
  // }

  // var slideHeightMin: number = 450;
  // var slideHeightMax: number = 1100;

  // var slideWidthMin: number = 550;
  // var slideWidthMax: number = 1100;

  // const heightSlide = lerp(slideHeightMax, slideHeightMin, width / 1600);
  // const widthSlide = lerp(slideWidthMax, slideWidthMin, width / 1600);

  // console.log(heightSlide);
  // console.log(widthSlide);

  return (
    <div style={style.container}>
      <HeadingBold fontSize={30}>Testimonials</HeadingBold>
      <TextBody fontSize={18} margin={5}>
        People I worked with in the past have said some nice things:
      </TextBody>
      <div style={style.subContainer}>
        <CarouselProvider
          naturalSlideWidth={useBreakpoint() ? 550 : 800}
          naturalSlideHeight={useBreakpoint() ? 450 : 1200}
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
