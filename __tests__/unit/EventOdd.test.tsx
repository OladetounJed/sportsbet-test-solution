import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventOdd } from "@/components/EventOdd";

test("renders event odds component correctly", async () => {
  const {container} = render(
    <EventOdd selection={{ odds: 12 }} />
  );
  
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByTestId("event-odd")).toHaveTextContent("12");
});

test("check if odd component doesn't click when there is no odd", async () => {
  render(<EventOdd selection={{ odds: undefined }} />);
  const handleClick = jest.fn();
  fireEvent.click(screen.getByTestId("event-odd"));
  expect(handleClick).toHaveBeenCalledTimes(0);
});
