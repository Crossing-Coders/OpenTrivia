import React, { useState, useEffect } from "react";

import {ScreenDisplay} from './ScreenDisplay'
import { TriviaFilterSelector } from "./TriviaFilterSelector";
import { TriviaCardList } from "./TriviaCardList";







import { TriviaEntry } from "../../types/index";
import { TriviaFilter } from "../../types/index";




import { TEMPDATA } from "../../TEMPDATA";
//Seperate Types Folder?

//TriviaFilter
//TriviaList
//TriviaEntry

//Use of string | null vs. string === ''?
//How best to represent time?
//setup ENUM incase of unknown? for now we do boolean or string




const defaultFilter = {
  time: {
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    timeStartBeginRange: 1600,
    timeStartEndRange: 2200,
  },
  location: {
    zipCode: null,
    mileage: null,
  },
  searchTerm: "",
};
//TODO: DEFAULT OPEN TRIVIA PAGE
//TODO: SET UP EACH LOCATIONS PAGE
//TODO: WE NEED A MAP
//TODO: FILTERS
//TODO: CLEAN UP CSS

const TriviaListDisplay: React.FC = () => {
    //Should we have a list of filtered Trivias?
//   const [filteredTriviaList, setFilteredTriviaList] = useState<Array<TriviaEntry> | null>(null);

  const [triviaEntryList, setTriviaEntryList] = useState<Array<TriviaEntry> | null>(null);
  const [currentlySelectedLocation, setCurrentlySelectedLocation] = useState<
    number | null
  >(0);
  const [filtersActive, setFiltersActive] = useState<boolean>(false);

  const [selectedFilters, setSelectedFilters] =
    useState<TriviaFilter>(defaultFilter);



  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTriviaEntryList(TEMPDATA);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleFilterChange = (triviaFilter: TriviaFilter) => {
    setSelectedFilters(triviaFilter);
  };

    const handleSelectedLocationChange = (locationId: number | undefined) => {
      locationId === currentlySelectedLocation
        ? setCurrentlySelectedLocation(0)
        : setCurrentlySelectedLocation(locationId ? locationId : 0);
    };
  

  return (
    <div className="min-h-screen w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row min-w-full min-h-screen">
          {/* FILTER*/}
          <div className="hidden lg:block sticky sideFrameHeight self-end basis-1/12 bottom-0 border-r-4 z-10  bg-stone-50 text-black">
            <TriviaFilterSelector
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          {/* LIST*/}
          {/* Need to add the Filter Logic - might make sense to put in a triviaList Component // NEW - ON CLICK, IF ITS MOBILE, REDIRECT TO PAGE, OTHERWISE, have it pop up on the side*/}
          <div className="lg:block w-fill lg:basis-6/12 p-4 bg-stone-50 min-h-full">
            <TriviaCardList
              triviaEntryList={triviaEntryList}
              onLocationCardClick={handleSelectedLocationChange}
              currentlySelectedLocation={currentlySelectedLocation}
            />
          </div>
          {/* RESTRAUNT PAGE -- hidden unless lg*/}

          <div className="hidden lg:flex flex-col justify-center h-screen sticky sideFrameHeight self-end bottom-0 z-10 basis-5/12 bg-orange-700">
            <ScreenDisplay
              triviaEntry={triviaEntryList?.find(
                (triviaEntry) =>
                  triviaEntry.locationId === currentlySelectedLocation
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TriviaListDisplay;