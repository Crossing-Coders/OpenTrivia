import React, { useState, useEffect } from "react";

import {ScreenDisplay} from './TriviaVenueScreenDisplay'
import { TriviaVenueFilterSelector } from "./TriviaVenueFilterSelector";
import { TriviaVenueCardList } from "./TriviaVenueCardList";







import { TriviaVenueEntryData } from "../../types/index";
import { TriviaVenueFilterData } from "../../types/index";




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
  geoData: {
    zipCode: null,
    mileage: null,
  },
  searchTerm: "",
};
//TODO: DEFAULT OPEN TRIVIA PAGE
//TODO: SET UP EACH Venues PAGE
//TODO: WE NEED A MAP
//TODO: FILTERS
//TODO: CLEAN UP CSS

const TriviaVenueListDisplay: React.FC = () => {
  //Should we have a list of filtered Trivias?
  //   const [filteredTriviaList, setFilteredTriviaList] = useState<Array<TriviaEntry> | null>(null);

  const [triviaVenueEntryList, setTriviaVenueEntryList] =
    useState<Array<TriviaVenueEntryData> | null>(null);

  const [currentlySelectedTriviaVenue, setCurrentlySelectedTriviaVenue] = useState<
    number | null
  >(0);
  const [filtersActive, setFiltersActive] = useState<boolean>(false);

  const [selectedFilters, setSelectedFilters] =
    useState<TriviaVenueFilterData>(defaultFilter);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setTriviaVenueEntryList(TEMPDATA);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  const handleFilterChange = (triviaFilter: TriviaVenueFilterData) => {
    setSelectedFilters(triviaFilter);
  };

  const handleSelectedTriviaVenueChange = (venueId: number | undefined) => {
    venueId === currentlySelectedTriviaVenue
      ? setCurrentlySelectedTriviaVenue(0)
      : setCurrentlySelectedTriviaVenue(venueId ? venueId : 0);
  };

  return (
    <div className="min-h-screen w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row min-w-full min-h-screen">
          {/* FILTER*/}
          <div className="hidden lg:block sticky sideFrameHeight self-end basis-1/12 bottom-0 border-r-4 z-10  bg-stone-50 text-black">
            <TriviaVenueFilterSelector
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          {/* LIST*/}
          {/* Need to add the Filter Logic - might make sense to put in a triviaList Component // NEW - ON CLICK, IF ITS MOBILE, REDIRECT TO PAGE, OTHERWISE, have it pop up on the side*/}
          <div className="lg:block w-fill lg:basis-6/12 p-4 bg-stone-50 min-h-full">
            <TriviaVenueCardList
              triviaVenueEntryList={triviaVenueEntryList}
              onTriviaVenueCardClick={handleSelectedTriviaVenueChange}
              currentlySelectedTriviaVenue={currentlySelectedTriviaVenue}
            />
          </div>
          {/* RESTRAUNT PAGE -- hidden unless lg*/}

          <div className="hidden lg:flex flex-col justify-center h-screen sticky sideFrameHeight self-end bottom-0 z-10 basis-5/12 bg-orange-700">
            <ScreenDisplay
              triviaEntry={triviaVenueEntryList?.find(
                (triviaVenueEntry) =>
                  triviaVenueEntry.triviaVenueId === currentlySelectedTriviaVenue
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TriviaVenueListDisplay;