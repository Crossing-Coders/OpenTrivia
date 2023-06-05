import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { TriviaVenueFilterButton } from "./TriviaVenueFilterButton";

import { TriviaVenueFilterTime } from "@/types";


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
  handleMileageSelect

  // onFilterChange,
}) => {
  //TODO: FIX THE WEIRD SPACING OF THESE BUTTONS
  return (
    <div className="flex flex-col mt-1">
      <div className="place-self-center text-center border-b-2 w-full mb-1 pb-1">
        Location:
      </div>
    </div>
  );
};
