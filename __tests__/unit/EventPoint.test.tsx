import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventOdd } from "@/components/EventOdd";

test("renders event odds component correctly", async () => {
  
  render(<EventOdd selection={{ odds: 12 }} />);
  expect(screen.getByTestId("event-odd")).toHaveTextContent("12");
});

test("check if odd component doesn't click when there is no odd", async () => {
  render(<EventOdd selection={{ odds: 12 }} />);
  const handleClick = jest.fn();
  expect(screen.getByTestId("event-odd")).toHaveTextContent("12");

  fireEvent.click(screen.getByTestId("event-odd"));
  expect(handleClick).toHaveBeenCalledTimes(0);
});
