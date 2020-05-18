import React from "react";
import style from "./style";

export default function Welcome() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}> Hi, I'm Dennie. Nice to meet you!</p>
      <div style={style.subContainer}>
        <p style={style.textMain}>
          I'm a designer and software developer at Santander UK. Skilled in
          Javascript and Typescript, I'm currently working as a mobile developer
          using React Native. As part of my role, I also get to design beautiful
          and concise mobile user interfaces. In my free time, I enjoy working
          on personal projects, playing and watching football and chess. I'm
          naturally curious, a fast learner and have a passion for solving
          problems.
        </p>
      </div>
    </div>
  );
}
