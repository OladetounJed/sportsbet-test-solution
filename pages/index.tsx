import { PrimaryButton } from "@/components/PrimaryButton";
import { client } from "@api/gateway";
import { EventsQuery } from "@api/schema";
import ActiveEventContainer from "@sections/ActiveEventContainer";
import { AppHeader } from "@sections/AppHeader";
import { EventManager } from "src/store/EventManager";
import SuspendedEventContainer from "@sections/SuspendedEventContainer";
import { useContext } from "react";
import { EventContext } from "src/store/event";
import { EventsData } from "src/types";

function Home(props: EventsData) {
  const { activeEvents, suspendedEvents } = useContext(EventContext);
  return (
    <main className="bg-[#222a32e5] min-h-screen">
      <EventManager data={props.data} />
      <div className="bg-goku max-w-full sm:max-w-screen-md w-100  m-auto p-4 sm:p-12">
        <AppHeader />
        <SuspendedEventContainer suspendedEvents={suspendedEvents} />

        <h1 className="text-white font-light text-sm sm:text-xl mt-10 mb-8 tracking-wider">
          Go to Sportsbet and place your own bet!
        </h1>
        <ActiveEventContainer activeEvents={activeEvents} />
        <PrimaryButton type="button" text="See all featured events" />
      </div>
    </main>
  );
}

// This gets called on every page reload
export async function getServerSideProps(context: any) {
  const { data } = await client.query(EventsQuery).toPromise();
  // Pass data to the page via props
  return { props: { data } };
}

export default Home;
