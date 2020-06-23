import React, { ReactNode } from "react";
import style from "./style";

interface Props {
  children?: ReactNode;
  fontSize?: number;
  margin?: number;
  url?: string;
}

export default function Link({
  children,
  fontSize = 20,
  margin = 10,
  url
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      style={{ ...style.link, fontSize: fontSize, margin: margin }}
    >
      {children}
    </a>
  );
}
