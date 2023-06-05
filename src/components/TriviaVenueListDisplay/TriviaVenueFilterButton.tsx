import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueFilterData } from "@/types";
interface TriviaVenueFilterButton {
  selected: boolean;
  buttonId: string
  buttonText: string;
  buttonValue: string;
  handleButtonClick: (...args: any[]) => void;

  // onFilterChange: (triviaFilter: TriviaVenueFilterData) => void;
}

export const TriviaVenueFilterButton: React.FC<TriviaVenueFilterButton> = ({
  selected,
  buttonId,
  buttonText,
  buttonValue,
  handleButtonClick,
}) => {

  const baseClassName =
    "select-none font-light cursor-pointer outline-1 outline peer-text-sm  outline rounded-md w-2/3 text-center my-2 transition-all ease-in duration-150";
  const uncheckedBehavior = "hover:bg-gray-200";
  const checkedBehavior =
    "peer-checked:outline-none peer-checked:bg-gray-200 peer-checked:ring peer-checked:ring-cyan-700 peer-checked:hover:bg-gray-300";

  const wholeClass =
    baseClassName + " " + checkedBehavior + " " + uncheckedBehavior;
  return (
    // <button
    //   className={selected ? selectedClassName : unselectedClassName}
    //   onClick={(e) => handleButtonClick(e, buttonValue)}
    // >
    //   {buttonText}
    // </button>
    <div className="flex flex-col w-full items-center">
      <input
        type="checkbox"
        onChange={(e) => handleButtonClick(e, buttonValue)}
        className="hidden peer"
        id={buttonId}
        checked={selected}
      />
      <label htmlFor={buttonId} className={wholeClass} id={buttonId}>
        {buttonText}
      </label>
    </div>
  );
};
