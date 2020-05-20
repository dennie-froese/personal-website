import React from "react";
import style from "./style";
import { CarouselProvider, Slider, Slide, DotGroup } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Testimonial from "../../components/Testimonial";
import { content } from "./content";

export default function Testimonials() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}>Testimonials</p>
      <p>People I worked with in the past have said some nice things :)</p>
      <div style={style.subContainer}>
        <CarouselProvider
          naturalSlideWidth={600}
          naturalSlideHeight={350}
          totalSlides={2}
        >
          <Slider>
            {content.testimonials.map((obj, i) => (
              <Slide index={i}>
                <Testimonial content={obj} />
              </Slide>
            ))}
          </Slider>
          <div style={style.buttons}>
            <DotGroup showAsSelectedForCurrentSlideOnly />
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}
