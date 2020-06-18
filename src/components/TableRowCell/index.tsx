import React, { ReactNode } from "react";
import style from "./style";

interface Props {
  children: ReactNode;
}

export default function TableRowCell({ children }: Props) {
  return <tr style={style.text}>{children}</tr>;
}
