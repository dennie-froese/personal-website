import React from "react";
import style from "./AppStyles";
import Welcome from "./components/Welcome";
import Landing from "./components/Landing";
import Companies from "./components/Companies";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <Landing />
      <Welcome />
      <Companies />
    </div>
  );
}
