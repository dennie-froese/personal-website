import React, { useEffect, useState } from "react";
import style from "./style";
import HeadingBold from "../../components/HeadingBold";
import useBreakpoint from "../../hooks/useBreakpoint";
import TableHeader from "../../components/TableHeader";
import TableRow from "../../components/TableRow";
import TableRowCell from "../../components/TableRowCell";

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
        The latest from my GitHub:
      </HeadingBold>
      <div style={style.subContainer}>
        <TableHeader />
        <div style={style.subContainerTable}>
          <table style={style.table}>
            <tbody style={style.tableBody}>
              {events
                ? events.map((event: any) => {
                    const date = new Date(
                      event.created_at
                    ).toLocaleDateString();
                    return (
                      <TableRow>
                        <TableRowCell>{date}</TableRowCell>
                        <TableRowCell>{event.type}</TableRowCell>
                        <TableRowCell>
                          {event.repo.name.split("/")[1]}
                        </TableRowCell>
                        <TableRowCell>
                          {event.payload.commits?.map((commit: any) => (
                            <div>{commit.message}</div>
                          ))}
                        </TableRowCell>
                      </TableRow>
                    );
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
