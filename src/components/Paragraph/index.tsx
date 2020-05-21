import React from "react";
import style from "./style";

interface Props {
  content: String;
}

export default function Paragraph({ content }: Props) {
  return <p style={style.text}>{content}</p>;
}
