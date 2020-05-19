export type TestimonialType = {
  image: string;
  name: string;
  role: string;
  feedback: string;
};

export type TestimonialArray = {
  testimonials: TestimonialType[];
};

export const content: TestimonialArray = {
  testimonials: [
    {
      image: "../../images/Ceri.png",
      name: "Ceri Godwin",
      role: "Head of Growth & Advisory",
      feedback: "Dennie"
    },
    {
      image: "../../images/friede.png",
      name: "Friedemann Kurz",
      role: "Head of Motorsport IT at Porsche Motorsport",
      feedback: "Dennie"
    }
  ]
};
