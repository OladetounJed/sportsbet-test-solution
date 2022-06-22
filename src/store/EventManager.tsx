import { EventsQuery, EventSubscription } from "@api/schema";
import React, { useContext, useEffect } from "react";
import { EventContext } from "src/store/event";
import { EventProp, Event, EventsData } from "src/types";
import { useQuery, useSubscription } from "urql";

//Manage All Events to be fetched at Page Load
export function EventManager({ data }: EventsData) {
  const [result, reexecuteQuery] = useQuery({
    query: EventsQuery,
  });
  const { activeEvents, suspendedEvents, setSuspendedEvents, setActiveEvents } =
    useContext(EventContext);
  useEffect(() => {
    if (!data) return;

    //Set active events at Page load
    setActiveEvents(
      data?.events?.filter((event: any) => event?.markets?.length)
    );

    //Set suspended events at Page Load
    setSuspendedEvents(
      data?.events?.filter((event: any) => !event?.markets?.length)
    );
  }, [data]);

  useEffect(() => {
    // sanity checks for react concurrency issue that is duplicating events
    suspendedEvents.forEach((element) => {
      const duplicatedEvent = activeEvents.find((e) => e.id === element.id);

      if (!duplicatedEvent) return;

      const updatedEvents = activeEvents.filter(
        (element: Event) => element.id !== duplicatedEvent.id
      );
      setActiveEvents(updatedEvents);
    });

    // Refetch data from server once active events
    if (!activeEvents.length && suspendedEvents.length) {
    
    reexecuteQuery({ requestPolicy: "network-only" });
       //Set active events after refetching data from server
    setActiveEvents(
      result?.data?.events?.filter((event: any) => event?.markets?.length)
    );
    //Set suspended events after refetching data from server
    setSuspendedEvents(
      result?.data?.events?.filter((event: any) => !event?.markets?.length)
    );

    }
  }, [suspendedEvents.length, activeEvents.length]);

  return (
    <>
      {activeEvents.map((event) => (
        <ActiveEventListener eventId={event.id} key={event.id} />
      ))}
    </>
  );
}

//Subscribe to all activeEvents via Websocket (graphql-ws) for changes
function ActiveEventListener({ eventId }: EventProp) {
  //Uqrl Subscription Query
  const [{ data }] = useSubscription({
    query: EventSubscription,
    variables: { eventId },
  });

  //Save updatedEvent to a const to make it type-safe.
  const event: Event = data?.eventUpdate;
  const { activeEvents, suspendedEvents, setSuspendedEvents, setActiveEvents } =
    useContext(EventContext);

  useEffect(() => {
    if (!event) return;
    if (!event?.markets?.length) {
      //Add event to suspendedEvents and remove from activeEvents if markets is empty
      const updatedEvents = activeEvents.filter(
        (element: Event) => element.id !== event.id
      );

      setActiveEvents(updatedEvents);

      const existingEvent = suspendedEvents.find(
        (element) => element.id === event.id
      );
      if (existingEvent) return;

      setSuspendedEvents([...suspendedEvents, event]);
    } else {
      //Update event on activeEvents if markets is not empty
      const existingEvent = suspendedEvents.find(
        (element) => element.id === event.id
      );
      if (existingEvent) return;

      const updatedEvents = activeEvents.map((element: Event) =>
        element.id === event.id ? event : element
      );
      setActiveEvents(updatedEvents);
    }
  }, [data]);

  return null;
}
