import React from "react";

interface Props {
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled?: boolean;
  text: string;
}

export function PrimaryButton(props: Props) {
  return (
    <button
      className="bg-piccolo text-white text-base sm:text-xl  font-normal rounded-full tracking-wider p-3 sm:p-5 my-4 w-full"
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
