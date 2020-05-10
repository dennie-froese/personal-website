import React from "react";
import style from "./AppStyles";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App" style={style.container}>
      <Header />
      <p style={style.textHeader}> Text </p>
    </div>
  );
}
