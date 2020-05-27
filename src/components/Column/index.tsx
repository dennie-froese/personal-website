import React from "react";
import style from "./style";
import { ColumnContent } from "../../sections/Skills/content";
import HeadingBold from "../HeadingBold";
import TextBody from "../TextBody";
import Dev from "../../images/Dev-logo.png";
import Design from "../../images/Design-logo.png";

interface Props {
  content: ColumnContent;
}

export default function Column({ content }: Props) {
  return (
    <div style={style.column}>
      <img
        style={style.logo}
        src={content.title.includes("Dev") ? Dev : Design}
        alt=""
      />
      <div style={style.section}>
        <HeadingBold fontSize={30}>
          {content.title ? content.title : ""}
        </HeadingBold>
        <TextBody fontSize={18}>
          {content.subtitle ? content.subtitle : ""}
        </TextBody>
      </div>
      <div style={style.section}>
        <p style={style.subheader}>
          {content.tools.title ? content.tools.title : ""}
        </p>
        {content.tools.skills.map((skill, i) => (
          <TextBody fontSize={20} margin={10}>
            {skill}
          </TextBody>
        ))}
      </div>
      <div style={style.section}>
        <p style={style.subheader}>
          {content.skills.title ? content.skills.title : ""}
        </p>
        {content.skills.skills.map((skill, i) => (
          <TextBody fontSize={20} margin={10}>
            {skill}
          </TextBody>
        ))}
      </div>
    </div>
  );
}
