import React from "react";

interface Props {
  selection: { odds?: Number };
}

export function EventOdd(props: Props) {
  return (
    <div
      data-testid="event-odd"
      onClick={() => {
        props.selection?.odds ? console.log(props.selection) : null;
      }}
      className={
        "h-full bg-goku flex items-center justify-center text-white text-xs sm:text-base  font-semibold w-full rounded" +
        (props.selection?.odds ? " cursor-pointer" : " cursor-not-allowed")
      }
    >
      {props.selection?.odds?.toFixed(2) || "-"}
    </div>
  );
}
