import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueFilterButton } from "./TriviaVenueFilterButton";

import { TriviaVenueFilterTime } from "@/types";
import { handleClientScriptLoad } from "next/script";

interface TriviaVenueLocationFilter {
  geoData: {
    //Valid Zip Code Detection?
    zipCode: number | null;
    mileage: number | null;
  };
  handleZipcodeSelect: (event: any, zipCode: string) => void;

  handleMileageSelect: (event: any, mileage: string) => void;
}

interface QueryObject {
  [key: string]: any;
}

//col main -> up and down
//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaVenueLocationFilter: React.FC<TriviaVenueLocationFilter> = ({
  geoData,
  handleZipcodeSelect,
  handleMileageSelect,

  // onFilterChange,
}) => {
  const handleTestClick1 = async (event: any) => {
    event.preventDefault();
    console.log(navigator);
    const myPerms = await navigator.permissions.query({
      name: "geolocation",
    });
    console.log(myPerms);
  };

  const handleTestClick2 = (event: any) => {
    event.preventDefault();
    navigator.permissions.query({ name: "geolocation" });
    navigator.geolocation.getCurrentPosition((test) => {
      console.log("Location - Lat", test.coords.latitude);
      console.log("Location - Lat", test.coords.longitude);
    });
  };
  //TODO: FIX THE WEIRD SPACING OF THESE BUTTONS
  return (
    <div className="flex flex-col mt-1">
      <div className="place-self-center text-center border-b-2 w-full mb-1 pb-1">
        Location:
      </div>
      <button onClick={handleTestClick1}>TEST1</button>
      <br />
      <button onClick={handleTestClick2}>TEST2</button>
    </div>
  );
};
