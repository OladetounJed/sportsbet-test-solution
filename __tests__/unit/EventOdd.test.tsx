import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import { EventOdd } from "@/components/EventOdd";

test("renders event odds component correctly",  () => {
  const {container} = render(
    <EventOdd selection={{ odds: 12 }} />
  );
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByTestId("event-odd")).toHaveTextContent("12");
});
