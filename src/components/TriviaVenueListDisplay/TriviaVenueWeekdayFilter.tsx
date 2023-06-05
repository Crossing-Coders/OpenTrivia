import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueFilterButton } from "./TriviaVenueFilterButton";

import { TriviaVenueFilterTime } from "@/types";


interface TriviaVenueWeekdayFilter {
  timeFilters: TriviaVenueFilterTime;
  handleFilterDaySelect: (
    event: any,
    day:
      | "sunday"
      | "monday"
      | "tuesday"
      | "wednesday"
      | "thursday"
      | "friday"
      | "saturday"
  ) => void;
}

interface QueryObject {
  [key: string]: any;
}


//col main -> up and down 
//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaVenueWeekdayFilter: React.FC<TriviaVenueWeekdayFilter> = ({
  timeFilters,
  handleFilterDaySelect,
  // onFilterChange,
}) => {
  //TODO: FIX THE WEIRD SPACING OF THESE BUTTONS
  return (
    <div className="flex flex-col mt-1">
      <div className="place-self-center text-center border-b-2 w-full mb-1 pb-1">
        Day(s) of Week:
      </div>
      <div className="flex flex-row mt-1 w-full">
        <div className="flex flex-col w-1/2 items-center ml-1">
          <TriviaVenueFilterButton
            selected={timeFilters.sunday}
            buttonId={"sunday_dayFilter"}
            buttonText={"Sun"}
            buttonValue={"sunday"}
            handleButtonClick={handleFilterDaySelect}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.tuesday}
            buttonId={"tuesday_dayFilter"}
            buttonText={"Tue"}
            buttonValue={"tuesday"}
            handleButtonClick={handleFilterDaySelect}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.thursday}
            buttonId={"thursday_dayFilter"}
            buttonText={"Thu"}
            buttonValue={"thursday"}
            handleButtonClick={handleFilterDaySelect}
          />
        </div>
        <div className="flex flex-col w-1/2 items-center mr-1">
          <TriviaVenueFilterButton
            selected={timeFilters.monday}
            buttonId={"monday_dayFilter"}
            buttonText={"Mon"}
            buttonValue={"monday"}
            handleButtonClick={handleFilterDaySelect}
          />
          <TriviaVenueFilterButton
            selected={timeFilters.wednesday}
            buttonId={"wednesday_dayFilter"}
            buttonText={"Wed"}
            buttonValue={"wednesday"}
            handleButtonClick={handleFilterDaySelect}
          />

          <TriviaVenueFilterButton
            selected={timeFilters.friday}
            buttonId={"friday_dayFilter"}
            buttonText={"Fri"}
            buttonValue={"friday"}
            handleButtonClick={handleFilterDaySelect}
          />
        </div>
      </div>
      <div className="flex place-self-center w-1/2 justify-center">
        <TriviaVenueFilterButton
          selected={timeFilters.saturday}
          buttonId={"saturday_dayFilter"}
          buttonText={"Sat"}
          buttonValue={"saturday"}
          handleButtonClick={handleFilterDaySelect}
        />
      </div>
    </div>
  );
};
