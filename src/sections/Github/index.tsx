import React, { useEffect, useState } from "react";
import style from "./style";
import HeadingBold from "../../components/HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function GitHub() {
  const [events, setEvents] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/dennie-froese/events")
      .then(res => res.json())
      .then(result => {
        setEvents(result);
      });
  }, []);

  return (
    <div style={style.container}>
      <HeadingBold fontSize={useBreakpoint() ? 40 : 30}>
        Recent GitHub Activity:
      </HeadingBold>
      {events
        ? events.map((event: any) => (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-between"
              }}
            >
              <div>{event.id}</div>
              <div>{event.type}</div>
              <div>{event.repo.name.split("/")[1]}</div>
              {event.payload.commits?.map((commit: any) => (
                <div>{commit.message}</div>
              ))}
            </div>
          ))
        : null}
    </div>
  );
}
