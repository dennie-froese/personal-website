import React from "react";
import style from "./style";
import { ColumnContent } from "../../sections/Skills/content";

interface Props {
  content: ColumnContent;
}

export default function Column({ content }: Props) {
  return (
    <div style={style.column}>
      <p style={style.textHeader}>{content.title ? content.title : "Code"}</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
    </div>
  );
}
