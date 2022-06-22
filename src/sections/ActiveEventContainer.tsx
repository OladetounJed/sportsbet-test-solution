import { ActiveEvent } from "@sections/ActiveEvent";
import { ActiveEvents } from "src/types";



export default function ActiveEventContainer(props: ActiveEvents) {
  return (
    <div className="flex flex-col gap-1">
      {props.activeEvents.map((event) => (
        <ActiveEvent
          event={event}
          competitors={event.competitors}
          market={event.markets[0]}
          key={event.id}
        />
      ))}
    </div>
  );
}
