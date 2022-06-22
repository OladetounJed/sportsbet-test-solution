import React, { createContext, useState } from "react";
import { Event } from "src/types";
const EventContext = createContext <EventType>({activeEvents: [], suspendedEvents: [], setSuspendedEvents: null, setActiveEvents: null});

type EventType = {
  activeEvents: Array<any>;
  suspendedEvents: Array<any>;
  setSuspendedEvents?: any;
  setActiveEvents?: any;
};

const EventProvider = ({ children }: any) => {
    const [activeEvents, setActiveEvents] = useState([] as Array<Event>);
    const [suspendedEvents, setSuspendedEvents] = useState([] as Array<Event>);
   
    return (
      <EventContext.Provider value={{ activeEvents, suspendedEvents, setSuspendedEvents, setActiveEvents }}>
        {children}
      </EventContext.Provider>
    );
  };


  export { EventProvider, EventContext };