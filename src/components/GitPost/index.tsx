import React from "react";
import style from "./style";
import TextBody from "../TextBody";
import Link from "../Link";
import useBreakpoint from "../../hooks/useBreakpoint";

interface Props {
  date: string;
  event: any;
}

export default function GitPost({ date, event }: Props) {
  const font = useBreakpoint() ? 20 : 10;
  const margin = useBreakpoint() ? 15 : 5;
  return (
    <div style={style.container}>
      <div style={style.subContainer}>
        <div style={style.header}>
          <TextBody fontSize={font} margin={margin}>
            {date}
          </TextBody>
          <Link url={event.repo?.url} fontSize={font} margin={margin}>
            {event.repo.name.split("/")[1]}
          </Link>
          <TextBody fontSize={font} margin={margin}>
            {event.type.split("Event")[0]}
          </TextBody>
        </div>
        <div>
          {event.payload.commits?.map((commit: any) => {
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
