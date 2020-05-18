import React from "react";
import style from "./style";

interface Props {
  title?: string;
}

export default function Column({ title }: Props) {
  return (
    <div style={style.column}>
      <p style={style.textHeader}>{title ? title : "Code"}</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
      <p style={style.textMain}>Skill</p>
    </div>
  );
}
