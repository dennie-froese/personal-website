import React, { useEffect, useState } from "react";
import style from "./style";
import HeadingBold from "../../components/HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";
import TableHeader from "../../components/TableHeader";

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
      <table>
        <TableHeader />
        {events
          ? events.map((event: any) => {
              const date = new Date(event.created_at).toLocaleDateString();
              return (
                <div
                  style={{
                    flexDirection: "row",
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ fontWeight: "bold", padding: 10 }}>{date}</div>
                  <div style={{ fontWeight: "bold", padding: 10 }}>
                    {event.type}
                  </div>
                  <div style={{ fontWeight: "bold", padding: 10 }}>
                    {event.repo.name.split("/")[1]}
                  </div>
                  {event.payload.commits?.map((commit: any) => (
                    <div style={{ fontWeight: "bold", padding: 10 }}>
                      {commit.message}
                    </div>
                  ))}
                </div>
              );
            })
          : null}
      </table>
    </div>
  );
}
