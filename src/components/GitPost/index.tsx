import React from "react";
import style from "./style";
import TextBody from "../TextBody";

interface Props {
  date: string;
  event: string;
  repository: string;
  commits: Array<string>;
}

export default function GitPost({ date, event, repository, commits }: Props) {
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <div style={style.header}>
          <TextBody margin={10}>{date}</TextBody>
          <TextBody margin={10}>{repository}</TextBody>
          <TextBody margin={10}>{event}</TextBody>
        </div>
        {commits?.map((commit: string) => {
          return <div>{commit}</div>;
        })}
      </div>
    </div>
  );
}
