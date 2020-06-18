import React, { ReactNode } from "react";
import style from "./style";

interface Props {
  children: ReactNode;
}

export default function TableHeaderCell({ children }: Props) {
  return <th style={style.text}>{children}</th>;
}
