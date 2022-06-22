import React from "react";
import { render, screen } from "@testing-library/react";
import { EventDate} from "@/components/EventDate";


test("renders event data component correctly", async () => {

    const {container} = render(
        <EventDate date="Jan 1" time="12:34" />
      );
      
      expect(container.firstChild).toMatchSnapshot()
    
    expect(screen.getByTestId("event-date")).toHaveTextContent("Jan 1");
    expect(screen.getByTestId("event-time")).toHaveTextContent("12:34");
});

