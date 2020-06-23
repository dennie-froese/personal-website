import React, { ReactNode } from "react";
import style from "./style";
import { primaryTextColor } from "../../constants/styles";

interface Props {
  children?: ReactNode;
  primaryTextColorBool?: boolean;
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
    <a href={url}>
      <p style={{ ...style.link, fontSize: fontSize, margin: margin }}>
        {children}
      </p>
    </a>
  );
}
