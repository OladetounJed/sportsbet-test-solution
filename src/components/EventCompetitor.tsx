import React from "react";

interface Props {
  competitor: {
    score: number;
    name: string;
  };
}

export function EventCompetitor(props: Props) {
  return (
    <div className=" flex items-center justify-between text-trunks">
      <p
        className="font-light text-xs sm:text-sm text-white"
      >
        {props.competitor?.name}
      </p>
      <p className="text-piccolo text-xs sm:text-sm" data-testid="competitor-score">
        {props.competitor?.score}
      </p>
    </div>
  );
}
