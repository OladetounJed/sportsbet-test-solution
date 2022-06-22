import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { EventPoint } from "@/components/EventPoint";
import { PartnerLogo } from "@/components/PartnerLogo";
import { ArsenalIcon } from "@/components/logos/ArsenalIcon";

test("renders event odds component correctly", () => {
  
  const {container} = render(<PartnerLogo icon={<ArsenalIcon/>}/>);
    
  expect(container.firstChild).toMatchSnapshot()


  expect(screen.getByRole('partner-logo').firstChild).toBeInTheDocument();

});

