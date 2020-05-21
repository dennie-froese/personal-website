import React from "react";
import style from "./AppStyles";
import Welcome from "./sections/Welcome";
import Landing from "./sections/Landing";
import Companies from "./sections/Companies";
import Skills from "./sections/Skills";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <Landing />
      <Welcome />
      <Skills />
      <Companies />
    </div>
  );
}
