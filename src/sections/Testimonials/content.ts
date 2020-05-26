export type TestimonialType = {
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
      name: "Ceri Godwin",
      role: "Director of Growth & Advisory - EmTech, Santander UK",
      feedback:
        "Dennie completed an extended rotation working in a number of projects during which he displayed technical skill and appetite for continuous learning and growth. Stand out was a project he completed solo with a specialist team in the bank, where he gained insight as to the clients needs, developed a solution which maximised available technologies and delivered at commercially astute cost. He also managed the implementation and on going communication taking the business teams through the changes required to realise commercial and risk benefits. Dennie is a proactive, enquiring technologist, skilled in engagement, able to listen, collaborate and deliver."
    },
    {
      name: "Friedemann Kurz",
      role: "Head of Motorsport IT, Porsche Motorsport",
      feedback:
        "Few people have the skill to gain expertise in new topics as efficiently as Dennie has. I hired Dennie for a summer internship in 2018 and he demonstrated the ability to comprehend complex use-cases and to progress those into concepts or applications.  Dennie is a great team player and would be an asset to any team."
    }
  ]
};
