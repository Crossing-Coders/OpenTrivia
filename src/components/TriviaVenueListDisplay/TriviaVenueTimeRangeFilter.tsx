import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueFilterButton } from "./TriviaVenueFilterButton";

import { TriviaVenueFilterTime } from "@/types";


interface TriviaVenueTimeRangeFilter {
  timeFilters: TriviaVenueFilterTime;
  handleStartTimeMinimum: (event: any, timeMin: string) => void;
  handleStartTimeMaximum: (event: any, timeMax: string) => void;
}

interface QueryObject {
  [key: string]: any;
}


//col main -> up and down 
//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaVenueTimeRangeFilter: React.FC<TriviaVenueTimeRangeFilter> = ({
  timeFilters,
  handleStartTimeMinimum,
  handleStartTimeMaximum,
  // onFilterChange,
}) => {
  //TODO: FIX THE WEIRD SPACING OF THESE BUTTONS
  return (
    <>
      <div className="place-self-center text-center border-b-2 w-full mb-1 pb-1 mt-4">
        Start Time:
      </div>
      <div className="flex flex-row w-full text-center ml-1">
        <div className="text-xs w-1/2">Earliest:</div>
        <div className="text-xs w-1/2">Latest:</div>
      </div>
      <div className="flex flex-row mt-1 w-full divide-x-2">
        <div className="flex flex-col w-1/2 items-center ml-1 ">
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 1700}
            buttonId={"1700_startMin"}
            buttonText={"5PM"}
            buttonValue={"1700"}
            handleButtonClick={handleStartTimeMinimum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 1800}
            buttonId={"1800_startMin"}
            buttonText={"6PM"}
            buttonValue={"1800"}
            handleButtonClick={handleStartTimeMinimum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 1900}
            buttonId={"1900_startMin"}
            buttonText={"7PM"}
            buttonValue={"1900"}
            handleButtonClick={handleStartTimeMinimum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 2000}
            buttonId={"2000_startMin"}
            buttonText={"8PM"}
            buttonValue={"2000"}
            handleButtonClick={handleStartTimeMinimum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 2100}
            buttonId={"2100_startMin"}
            buttonText={"9PM"}
            buttonValue={"2100"}
            handleButtonClick={handleStartTimeMinimum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartBeginRange === 2200}
            buttonId={"2200_startMin"}
            buttonText={"10PM"}
            buttonValue={"2200"}
            handleButtonClick={handleStartTimeMinimum}
          />
        </div>
        {/* //TODO: BASE THIS ON ACCEPTABLE VALUES IN CURRENT SELECTION */}
        <div className="flex flex-col w-1/2 items-center">
          <TriviaVenueFilterButton
            buttonId={"1700_startMax"}
            selected={timeFilters.timeStartEndRange === 1700}
            buttonText={"5PM"}
            buttonValue={"1700"}
            handleButtonClick={handleStartTimeMaximum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartEndRange === 1800}
            buttonId={"1800_startMax"}
            buttonText={"6PM"}
            buttonValue={"1800"}
            handleButtonClick={handleStartTimeMaximum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartEndRange === 1900}
            buttonId={"1900_startMax"}
            buttonText={"7PM"}
            buttonValue={"1900"}
            handleButtonClick={handleStartTimeMaximum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartEndRange === 2000}
            buttonId={"2000_startMax"}
            buttonText={"8PM"}
            buttonValue={"2000"}
            handleButtonClick={handleStartTimeMaximum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartEndRange === 2100}
            buttonId={"2100_startMax"}
            buttonText={"9PM"}
            buttonValue={"2100"}
            handleButtonClick={handleStartTimeMaximum}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.timeStartEndRange === 2200}
            buttonId={"2200_startMax"}
            buttonText={"10PM"}
            buttonValue={"2200"}
            handleButtonClick={handleStartTimeMaximum}
          />
        </div>
      </div>
    </>
  );
};
