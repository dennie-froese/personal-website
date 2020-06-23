import React, { ReactNode } from "react";
import style from "./style";
import { primaryTextColor } from "../../constants/styles";

interface Props {
  children?: ReactNode;
  primaryTextColorBool?: boolean;
  fontSize?: number;
  margin?: number;
}

export default function Link({ children, fontSize = 20, margin = 10 }: Props) {
  return (
    <p style={{ ...style.link, fontSize: fontSize, margin: margin }}>
      {children}
    </p>
  );
}
