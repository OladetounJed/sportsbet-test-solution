import React from "react";

interface Props  {
  date: string;
  time: string;
};

export function EventDate(props: Props) {
  return (

      <div className=" flex text-xs sm:text-sm text-trunks gap-1" role="event-date">
        <p>{props.date } {props.time}</p>
      </div>

  );
}
