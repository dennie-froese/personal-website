import React, { ReactNode } from "react";
import style from "./style";
import TableRowCell from "../TableRowCell";

interface Props {
  children: ReactNode;
}

export default function TableRow({ children }: Props) {
  return <tr style={style.row}>{children}</tr>;
}
