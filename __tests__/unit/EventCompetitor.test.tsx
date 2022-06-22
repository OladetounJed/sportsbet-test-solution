import React from "react";
import { render, screen } from "@testing-library/react";
import { EventCompetitor } from "@/components/EventCompetitor";

test("renders event competitor component correctly", async () => {
  const {container} = render(
    <EventCompetitor
      competitor={{
        score: 1,
        name: "Arsenal FC",
      }}
    />
  );
  
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByTestId("competitor-name")).toHaveTextContent("Arsenal FC");
  expect(screen.getByTestId("competitor-score")).toHaveTextContent("1");
});
