import Link from "next/link";
import React from "react";

interface Props {
  href?: string;
  icon: JSX.Element;
}

export function PartnerLogo(props: Props) {
  return (
    <div role="partner-logo" className="px-3 py-2 bg-plank rounded-full flex items-center justify-center">
      {props.icon}
    </div>
  );
}
