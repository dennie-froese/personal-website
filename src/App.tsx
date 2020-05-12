import React from "react";
import style from "./AppStyles";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import Companies from "./components/Companies";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <Intro />
      <Welcome />
      <Companies />
    </div>
  );
}
