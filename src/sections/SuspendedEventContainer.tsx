import { SuspendedEvent } from "@sections/SuspendedEvent";
import { SuspendedEvents } from "src/types";

export default function SuspendedEventContainer(props: SuspendedEvents) {
  return (
    <div className="flex flex-col gap-1">
      {props.suspendedEvents.map((event) => (
        <SuspendedEvent competitors={event.competitors} key={event.id} />
      ))}
    </div>
  );
}
