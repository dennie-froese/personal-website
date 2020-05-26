import React, { ReactNode } from "react";
import style from "./style";

interface Props {
  children?: ReactNode;
}

export default function SubHeading({ children }: Props) {
  return <p style={style.text}>{children}</p>;
}
