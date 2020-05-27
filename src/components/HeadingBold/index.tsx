import React, { ReactNode } from "react";
import style from "./style";
import { primaryTextColor } from "../../constants/styles";

interface Props {
  children?: ReactNode;
  primaryTextColorBool?: boolean;
  fontSize?: number;
  margin?: number;
}

export default function HeadingBold({
  children,
  primaryTextColorBool = false,
  fontSize = 40,
  margin = 25
}: Props) {
  return (
    <p
      style={
        primaryTextColorBool
          ? {
              ...style.text,
              color: primaryTextColor,
              fontSize: fontSize,
              margin: margin
            }
          : { ...style.text, fontSize: fontSize, margin: margin }
      }
    >
      {children}
    </p>
  );
}
