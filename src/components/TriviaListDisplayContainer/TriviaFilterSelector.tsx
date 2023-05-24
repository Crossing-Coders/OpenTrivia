import React, { useState, useEffect } from "react";

interface TriviaFilter {
  time: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    timeStartBeginRange: number;
    timeStartEndRange: number;
  };
  location: {
    //Valid Zip Code Detection?
    zipCode: number | null;
    mileage: number | null;
  };
  searchTerm: string;
}

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

  return (
    <div>
      <div>
        FILTERS
      </div>
      {selectedFilters.time.timeStartBeginRange} -{" "}
      {selectedFilters.time.timeStartEndRange}{" "}
    </div>
  );
};
