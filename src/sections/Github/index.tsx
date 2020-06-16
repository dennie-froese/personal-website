import React, { useEffect, useState } from "react";
import style from "./style";
import HeadingBold from "../../components/HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function GitHub() {
  const [result, setResult] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/dennie-froese")
      .then(res => res.json())
      .then(result => {
        setResult(result);
      });
  }, []);

  return (
    <div style={style.container}>
      <HeadingBold fontSize={useBreakpoint() ? 40 : 30}>
        Recent GitHub Activity:
      </HeadingBold>
      {result ? <div>{result.login}</div> : null}
    </div>
  );
}
