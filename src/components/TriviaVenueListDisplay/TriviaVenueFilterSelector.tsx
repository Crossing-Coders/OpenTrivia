import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

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
    var queryObject: QueryObject = {};
    //This is creating the queryObject for Router
    //GeoData
    filterObject.geoData.zipCode
      ? (queryObject.zipCode = filterObject.geoData.zipCode)
      : {};

    filterObject.geoData.mileage
      ? (queryObject.maxMileage = filterObject.geoData.mileage)
      : {};

    //Start Ranges
    filterObject.time.timeStartBeginRange > 0
      ? (queryObject.startTimeMin = filterObject.time.timeStartBeginRange)
      : {};
    filterObject.time.timeStartEndRange > 0
      ? (queryObject.startTimeMax = filterObject.time.timeStartEndRange)
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

  //TODO: IMPLEMENT THIS
  const handleFilterTimeSelection = (
    event: any,
    timing: "start" | "end",
    value?: number
  ) => {
    event.preventDefault();
  };

  //TODO: IMPLEMENT THIS
  //Will probably rework this to be an option set at the begining of the process.
  const handleFilterGeoSelection = (
    event: any,
    timing: "zipcode" | "mileage",
    value: number
  ) => {
    event.preventDefault();
  };

  //Display of filters (Checked/Unchecked etc.) will be based on the selectedFilters Prop
  //USE URL QUERYS????
  //CAN BE PUSHED VIA HEADER

  return (
    <div>
      <div>FILTERS</div>
      <button
        className={
          selectedFilters.time.sunday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "sunday")}
      >
        Sunday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.monday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "monday")}
      >
        Monday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.tuesday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "tuesday")}
      >
        Tuesday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.wednesday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "wednesday")}
      >
        Wednesday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.thursday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "thursday")}
      >
        Thursday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.friday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "friday")}
      >
        Friday
      </button>
      <div></div>
      <button
        className={
          selectedFilters.time.saturday ? "text-green-500" : "text-black"
        }
        onClick={(e) => handleFilterDaySelect(e, "saturday")}
      >
        Saturday
      </button>
    </div>
  );
};
