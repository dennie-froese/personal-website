import React from "react";
import style from "./style";
import { paragraphs } from "./content";
import TextBody from "../../components/TextBody";
import HeadingBold from "../../components/HeadingBold";

export default function Welcome() {
  return (
    <div style={style.container}>
      <HeadingBold fontSize={35} primaryTextColorBool>
        Hi, I'm Dennie. Nice to meet you!
      </HeadingBold>
      <div style={style.subContainer}>
        {paragraphs.text.map((text, i) => (
          <TextBody primaryTextColorBool>{text}</TextBody>
        ))}
      </div>
    </div>
  );
}
