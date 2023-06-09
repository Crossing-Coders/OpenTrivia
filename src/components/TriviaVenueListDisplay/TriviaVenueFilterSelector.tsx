import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueLocationFilter } from "./TriviaVenueLocationFilter";
import { TriviaVenueWeekdayFilter } from "./TriviaVenueWeekdayFilter";
import { TriviaVenueTimeRangeFilter } from "./TriviaVenueTimeRangeFilter";

import { TriviaVenueFilterData } from "@/types";

interface TriviaVenueFilterProps {
  selectedFilters: TriviaVenueFilterData;
  // onFilterChange: (triviaFilter: TriviaVenueFilterData) => void;
}

interface QueryObject {
  [key: string]: any;
}

//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaVenueFilterSelector: React.FC<TriviaVenueFilterProps> = ({
  selectedFilters,
  // onFilterChange,
}) => {
  const router = useRouter();
  const { time, geoData, searchTerm } = selectedFilters;
  // console.log("selectedFilters:", selectedFilters);

  //TODO: This is jank as fuck too
  //Should I handle this here?
  //Again, is hardcoding the best option?
  const handleUpdatingQueryParams = (filterObject: TriviaVenueFilterData) => {
    // console.log(filterObject);
    const queryObject: QueryObject = {};
    //This is creating the queryObject for Router
    //GeoData
    filterObject.geoData.zipCode
      ? (queryObject.zipCode = filterObject.geoData.zipCode)
      : {};

    filterObject.geoData.mileage
      ? (queryObject.maxMileage = filterObject.geoData.mileage)
      : {};

    //Start Range
    Number(filterObject.time.timeStartBeginRange) > 0
      ? (queryObject.earliestStart = filterObject.time.timeStartBeginRange)
      : {};
    filterObject.time.timeStartEndRange > 0
      ? (queryObject.latestStart = filterObject.time.timeStartEndRange)
      : {};

    //sunday - monday
    filterObject.time.sunday ? (queryObject.sunday = "y") : {};
    filterObject.time.monday ? (queryObject.monday = "y") : {};
    filterObject.time.tuesday ? (queryObject.tuesday = "y") : {};
    filterObject.time.wednesday ? (queryObject.wednesday = "y") : {};
    filterObject.time.thursday ? (queryObject.thursday = "y") : {};
    filterObject.time.friday ? (queryObject.friday = "y") : {};
    filterObject.time.saturday ? (queryObject.saturday = "y") : {};
    router.push({ pathname: "/", query: queryObject });
  };

  //TODO: this whole function looks jank as shit
  const handleFilterDaySelect = (
    event: any,
    day:
      | "sunday"
      | "monday"
      | "tuesday"
      | "wednesday"
      | "thursday"
      | "friday"
      | "saturday"
  ) => {
    event.preventDefault();
    const newTime = { ...time };
    newTime[day] = !time[day];
    handleUpdatingQueryParams({ time: newTime, geoData, searchTerm });
  };

  const handleStartTimeMinimum = (event: any, timeMin: string) => {
    event.preventDefault();
    console.log("test");
    const newTime = { ...time };
    Number(timeMin) === newTime.timeStartBeginRange? newTime.timeStartBeginRange = -1 : newTime.timeStartBeginRange = Number(timeMin);
    handleUpdatingQueryParams({ time: newTime, geoData, searchTerm });
  };

  const handleStartTimeMaximum = (event: any, timeMax: string) => {
    event.preventDefault();
    const newTime = { ...time };
    Number(timeMax) === newTime.timeStartEndRange
      ? (newTime.timeStartEndRange = -1)
      : (newTime.timeStartEndRange = Number(timeMax));
    handleUpdatingQueryParams({ time: newTime, geoData, searchTerm });
  };


  //TODO: IMPLEMENT THIS
  //Will probably rework this to be an option set at the begining of the process.
  const handleFilterZipSelect = (event: any, zipCode: string) => {
    event.preventDefault();
  };

  const handleFilterMileageSelect = (event: any, zipCode: string) => {
    event.preventDefault();
  };

  //Display of filters (Checked/Unchecked etc.) will be based on the selectedFilters Prop
  //USE URL QUERYS????
  //CAN BE PUSHED VIA HEADER
  //Convert to Components
  return (
    <div className="flex flex-col mt-1">
      <TriviaVenueLocationFilter
        geoData={selectedFilters.geoData}
        handleZipcodeSelect={handleFilterZipSelect}
        handleMileageSelect={handleFilterMileageSelect}
      />
      <TriviaVenueWeekdayFilter
        timeFilters={selectedFilters.time}
        handleFilterDaySelect={handleFilterDaySelect}
      />
      <TriviaVenueTimeRangeFilter
        timeFilters={selectedFilters.time}
        handleStartTimeMinimum={handleStartTimeMinimum}
        handleStartTimeMaximum={handleStartTimeMaximum}
      />
      
    </div>
  );
};
