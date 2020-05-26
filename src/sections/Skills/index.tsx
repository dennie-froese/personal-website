import React from "react";
import style from "./style";
import Column from "../../components/Column";
import Separator from "../../components/Separator";
import { content } from "./content";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Skills() {
  return (
    <div style={style.container}>
      <div
        style={
          useBreakpoint()
            ? style.subContainer
            : {
                ...style.subContainer,
                flexDirection: "column",
                alignItems: "center"
              }
        }
      >
        <Column content={content.columns[0]} />
        <Separator />
        <Column content={content.columns[1]} />
      </div>
    </div>
  );
}
