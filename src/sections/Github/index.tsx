import React, { useEffect, useState } from "react";
import style from "./style";
import HeadingBold from "../../components/HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";
import GitPost from "../../components/GitPost";

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
      <HeadingBold fontSize={useBreakpoint() ? 40 : 25}>
        The latest from my GitHub:
      </HeadingBold>
      <div style={style.subContainer}>
        {events
          ? events.map((event: any) => {
              const date = new Date(event.created_at).toLocaleDateString();
              return <GitPost date={date} event={event} />;
            })
          : null}
      </div>
    </div>
  );
}
