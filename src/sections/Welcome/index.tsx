import React from "react";
import style from "./style";
import { paragraphs } from "./content";
import Paragraph from "../../components/Paragraph";

export default function Welcome() {
  return (
    <div style={style.container}>
      <p style={style.textHeader}> Hi, I'm Dennie. Nice to meet you!</p>
      <div style={style.subContainer}>
        {paragraphs.text.map((text, i) => (
          <Paragraph content={text} key={i} />
        ))}
      </div>
    </div>
  );
}
