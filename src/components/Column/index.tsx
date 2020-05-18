import React from "react";
import style from "./style";
import { ColumnContent } from "../../sections/Skills/content";

interface Props {
  content: ColumnContent;
}

export default function Column({ content }: Props) {
  return (
    <div style={style.column}>
      <p style={style.header}>{content.title ? content.title : ""}</p>
      <p style={style.main}>{content.subtitle ? content.subtitle : ""}</p>
      <p style={style.subheader}>
        {content.skills.title ? content.skills.title : ""}
      </p>
      {content.skills.skills.map((skill, i) => (
        <p key={i} style={style.main}>
          {skill}
        </p>
      ))}
      <p style={style.subheader}>
        {content.tools.title ? content.tools.title : ""}
      </p>
      {content.tools.skills.map((skill, i) => (
        <p key={i} style={style.main}>
          {skill}
        </p>
      ))}
    </div>
  );
}
