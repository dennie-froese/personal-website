import React from "react";
import style from "./style";
import { Paragraphs } from "../../sections/Welcome/content";

interface Props {
  content: String;
}

export default function Paragraph({ content }: Props) {
  return <p style={style.text}>{content}</p>;
}
