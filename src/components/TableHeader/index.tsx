import React from "react";
import style from "./style";
import TableHeaderCell from "../TableHeaderCell";

export default function TableHeader() {
  const headings: Array<string> = ["Date", "Event", "Repository", "Commit"];

  return (
    <thead style={style.header}>
      {headings.map((heading: string) => (
        <TableHeaderCell>{heading}</TableHeaderCell>
      ))}
    </thead>
  );
}
