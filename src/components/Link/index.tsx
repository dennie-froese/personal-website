import React, { ReactNode } from "react";
import style from "./style";
import { primaryTextColor } from "../../constants/styles";

interface Props {
  children?: ReactNode;
  primaryTextColorBool?: boolean;
  fontSize?: number;
  margin?: number;
}

export default function TextBody({ children }: Props) {
  return <p style={style.link}>{children}</p>;
}
