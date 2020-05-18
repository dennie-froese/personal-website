import React from "react";
import style from "./style";
import Column from "../../components/Column";
import Separator from "../../components/Separator";

export default function Skills() {
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <Column title="Designer" />
        <Separator />
        <Column title="Front-end developer" />
      </div>
    </div>
  );
}
