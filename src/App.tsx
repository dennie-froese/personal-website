import React from "react";
import style from "./AppStyles";
import Welcome from "./sections/Welcome";
import Landing from "./sections/Landing";
import Companies from "./sections/Companies";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import GitHub from "./sections/Github";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <GitHub />
      <Landing />
      <Welcome />
      <Skills />
      <Companies />
      <Testimonials />
    </div>
  );
}
