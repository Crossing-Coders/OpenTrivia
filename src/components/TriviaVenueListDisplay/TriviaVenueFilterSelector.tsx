import React, { useState, useEffect } from "react";

import { TriviaVenueFilterData } from "@/types";

interface TriviaVenueFilterProps {
  selectedFilters: TriviaVenueFilterData;
  onFilterChange: (triviaFilter: TriviaVenueFilterData) => void;
}

//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaVenueFilterSelector: React.FC<TriviaVenueFilterProps> = ({
  selectedFilters,
  onFilterChange,
}) => {
  const handleFilterSelect = (event: any, values: TriviaVenueFilterData) => {
    onFilterChange(values);
  };

  //Display of filters (Checked/Unchecked etc.) will be based on the selectedFilters Prop
  //USE URL QUERYS????
  //CAN BE PUSHED VIA HEADER
  return (
    <aside>
      <div>FILTERS</div>
      {selectedFilters.time.timeStartBeginRange} -{" "}
      {selectedFilters.time.timeStartEndRange} <div>FILTERS</div>{" "}
      <div>FILTERS</div> <div>FILTERS</div> <div>FILTERS</div>{" "}
      <div>FILTERS</div> <div>FILTERS</div> <div>FILTERS</div>{" "}
    </aside>
  );
};
