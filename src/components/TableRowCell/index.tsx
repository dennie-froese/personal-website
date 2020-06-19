import React, { ReactNode } from "react";
import style from "./style";

interface Props {
  children: ReactNode;
}

export default function TableRowCell({ children }: Props) {
  return <td style={style.text}>{children}</td>;
}
