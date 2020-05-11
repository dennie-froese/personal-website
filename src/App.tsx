import React from "react";
import style from "./AppStyles";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <Header />
      <Intro />
      <Welcome />
    </div>
  );
}
