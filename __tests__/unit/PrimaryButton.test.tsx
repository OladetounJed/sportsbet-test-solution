import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventPoint } from "@/components/EventPoint";
import { PrimaryButton } from "@/components/PrimaryButton";


test("renders event odds component correctly", () => {
  
  const {container} = render(<PrimaryButton text="Get All Events"/>);
    
  expect(container.firstChild).toMatchSnapshot()


  expect(screen.getByRole("button")).toBeInTheDocument();

});

