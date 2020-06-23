import React from "react";
import style from "./style";
import TextBody from "../TextBody";
import Link from "../Link";
import useBreakpoint from "../../hooks/useBreakpoint";

interface Props {
  date: string;
  event: string;
  repository: string;
  commits: any;
}

export default function GitPost({ date, event, repository, commits }: Props) {
  const font = useBreakpoint() ? 20 : 10;
  const margin = useBreakpoint() ? 15 : 5;
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <div style={style.header}>
          <TextBody fontSize={font} margin={margin}>
            {date}
          </TextBody>
          <TextBody fontSize={font} margin={margin}>
            {repository}
          </TextBody>
          <TextBody fontSize={font} margin={margin}>
            {event.split("Event")[0]}
          </TextBody>
        </div>
        <div>
          {commits?.map((commit: any) => {
            return (
              <Link url={commit.url} fontSize={font}>
                {commit.message}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
