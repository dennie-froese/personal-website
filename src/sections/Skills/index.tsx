import React from "react";
import style from "./style";
import Column from "../../components/Column";
import Separator from "../../components/Separator";
import { content } from "./content";

export default function Skills() {
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        {content.columns.map((col, i) => (
          <Column key={i} content={col} />
        ))}
      </div>
      <Separator />
    </div>
  );
}
