import React from "react";
import style from "./style";
import Column from "../../components/Column";

export default function Skills() {
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <Column />
        <Column />
      </div>
    </div>
  );
}
