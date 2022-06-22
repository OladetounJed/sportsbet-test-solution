import { EventCompetitor } from "@/components/EventCompetitor";
import { EventDate } from "@/components/EventDate";
import { EventOdd } from "@/components/EventOdd";
import { EventPoint } from "@/components/EventPoint";
import React from "react";
import { ActiveEvent, Selection } from "src/types";
import { motion } from "framer-motion";
import { AnimateVariant, formatDate, formatTime } from "src/utils";

export function ActiveEvent(props: ActiveEvent) {
  return (
    <motion.div
      variants={AnimateVariant} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear", duration: 2 }}
      className="bg-gohan w-full flex rounded"
    >
      <div className="flex w-1/2 flex-col gap-1 p-2  sm:p-3">
        <div className="flex flex-col gap-1 pr-1 sm:pr-2">
          {props.competitors.map((competitor) => (
            <EventCompetitor competitor={competitor} key={competitor.id} />
          ))}
        </div>
        <EventDate
          date={formatDate(props.event.startTime)}
          time={formatTime(props.event.startTime)}
        />
      </div>
      <div className="flex w-1/2 gap-2 p-2">
        {props.market?.selections?.map((selection: Selection) => (
          <EventOdd selection={selection} key={selection.id} />
        ))}
        <EventPoint />
      </div>
    </motion.div>
  );
}
