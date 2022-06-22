import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventOdd } from "@/components/EventOdd";
import { EventPoint } from "@/components/EventPoint";

test("renders event odds component correctly", () => {
  
  const {container} = render(<EventPoint/>);
    
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.getByText("+92")).toBeInTheDocument();
});

