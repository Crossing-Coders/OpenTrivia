import React, { useState, useEffect } from "react";

import { TriviaFilter } from "@/types";

interface TriviaFilterProps {
  selectedFilters: TriviaFilter;
  onFilterChange: (triviaFilter: TriviaFilter) => void;
  
}

//Do we want to apply filter instantly on filter selection or have a button that allows user to apply filter?
//Doing it now instantaneously
export const TriviaFilterSelector: React.FC<TriviaFilterProps> = ({
  selectedFilters,
  onFilterChange,
}) => {
  const handleFilterSelect = (event: any, values: TriviaFilter) => {
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
