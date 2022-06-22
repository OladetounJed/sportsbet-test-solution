import { AppIcon } from "@/components/logos/AppIcon";
import { ArsenalIcon } from "@/components/logos/ArsenalIcon";
import { FlamengoIcon } from "@/components/logos/FlamengoIcon";
import { SouthamptonIcon } from "@/components/logos/SouthamptonIcon";
import { WatfordIcon } from "@/components/logos/WatfordIcon";
import { PartnerLogo } from "@/components/PartnerLogo";
import React from "react";

export function AppHeader() {
  return (
    <div className="flex justify-between items-center w-full pb-10">
        <AppIcon />
      <div className="flex flex-col gap-2">
        <p className="text-white text-sm font-light">Official Partners of</p>
        <div className="flex gap-2">
            <PartnerLogo href="https://www.sportsbet.io/" icon={< ArsenalIcon/>} />
            <PartnerLogo href="https://www.sportsbet.io/" icon={< FlamengoIcon/>} />
            <PartnerLogo href="https://www.sportsbet.io/" icon={< SouthamptonIcon/>} />
            <PartnerLogo href="https://www.sportsbet.io/" icon={< WatfordIcon/>} />
        </div>
      </div>
    </div>
  );
}
