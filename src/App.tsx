import React from "react";
import style from "./AppStyles";

export default function App() {
  return (
    <div className="App" style={style.textContainer}>
      <header className="App-header" style={style.textHeader}>
        <p>Here it is, the first try!</p>
        <h2
          style={{
            alignItems: "center",
            color: "pink",
            backgroundColor: "green"
          }}
        >
          A very warm welcome to my personal website!
        </h2>
      </header>
    </div>
  );
}
