import React, { ReactNode } from "react";
import style from "./style";
import { primaryTextColor } from "../../constants/styles";

interface Props {
  children?: ReactNode;
  primaryTextColorBool?: boolean;
  fontSize?: number;
}

export default function TextBody({
  children,
  primaryTextColorBool = false,
  fontSize = 20
}: Props) {
  return (
    <p
      style={
        primaryTextColorBool
          ? { ...style.text, color: primaryTextColor, fontSize: fontSize }
          : { ...style.text, fontSize: fontSize }
      }
    >
      {children}
    </p>
  );
}
