import React from "react";
import style from "./style";
import TextBody from "../TextBody";
import Link from "../Link";
import useBreakpoint from "../../hooks/useBreakpoint";

interface Props {
  date: string;
  event: string;
  repository: string;
  commits: Array<string>;
}

export default function GitPost({ date, event, repository, commits }: Props) {
  const font = useBreakpoint() ? 20 : 10;
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <div style={style.header}>
          <TextBody fontSize={font} margin={10}>
            {date}
          </TextBody>
          <TextBody fontSize={font} margin={10}>
            {repository}
          </TextBody>
          <TextBody fontSize={font} margin={10}>
            {event.split("Event")[0]}
          </TextBody>
        </div>
        <div>
          {commits?.map((commit: string) => {
            return <Link fontSize={font}>{commit}</Link>;
          })}
        </div>
      </div>
    </div>
  );
}
