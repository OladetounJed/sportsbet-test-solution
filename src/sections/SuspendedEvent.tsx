import { EventCompetitor } from "@/components/EventCompetitor";
import { EventDate } from "@/components/EventDate";
import { CalenderIcon } from "@/components/icons/CalenderIcon";
import React from "react";
import { Competitors } from "src/types";
import { motion } from "framer-motion";
import { AnimateVariant } from "src/utils";



export function SuspendedEvent(props: Competitors) {
  return (
    <motion.div className="relative"
    variants={AnimateVariant} 
    initial="hidden"
    animate="enter" 
    exit="exit" 
    transition={{ type: "linear", duration: 2 }}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <CalenderIcon />
      </div>

      <div className="bg-gohan w-full flex rounded blur">
        <div className="flex w-1/2 flex-col gap-1 p-6">
          <div className="flex flex-col gap-1 pr-2">
          {props.competitors?.map(competitor => <EventCompetitor competitor={competitor} key={competitor.id}/> )}
           
            
          </div>
          <EventDate date="24/09" time="18:30" />
        </div>
        <div className="flex w-1/2 gap-2 p-6 items-center justify-between">
          <p className="text-white"> Match Suspended</p>
          <p className="text-danger"> No Odds</p>
        </div>
      </div>
    </motion.div>
  );
}
