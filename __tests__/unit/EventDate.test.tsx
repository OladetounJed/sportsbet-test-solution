import React from "react";
import { render, screen } from "@testing-library/react";
import { EventDate} from "@/components/EventDate";


test("renders event data component correctly",  () => {

    const {container} = render(
        <EventDate date="Jan 1" time="12:34" />
      );
      
      expect(container.firstChild).toMatchSnapshot()
    
    expect(screen.getByRole("event-date").firstChild).toHaveTextContent("Jan 1 12:34");
});

