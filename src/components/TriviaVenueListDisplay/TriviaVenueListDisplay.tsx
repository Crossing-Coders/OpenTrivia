import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useQueryState } from "next-usequerystate";
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

//TODO: DEFAULT OPEN TRIVIA PAGE
//TODO: SET UP EACH Venues PAGE
//TODO: WE NEED A MAP
//TODO: FILTERS
//TODO: CLEAN UP CSS


const TriviaVenueListDisplay: React.FC = () => {
  const [triviaVenueEntryList, setTriviaVenueEntryList] =
    useState<Array<TriviaVenueEntryData> | null>(null);

  const [currentlySelectedTriviaVenue, setCurrentlySelectedTriviaVenue] =
    useState<number | null>(0);

  //TODO: Figure out if this is needed
  const router = useRouter();


  const [isLoading, setIsLoading] = useState(true);

//not sure
  // useEffect(() => {
  //   const fetchData = async () => {
  //   };
  //   fetchData();
  // }, []);

const queryFilter = {
  time: {
    sunday: router.query.sunday ? true : false,
    monday: router.query.monday ? true : false,
    tuesday: router.query.tuesday ? true : false,
    wednesday: router.query.wednesday ? true : false,
    thursday: router.query.thursday ? true : false,
    friday: router.query.friday ? true : false,
    saturday: router.query.saturday ? true : false,
    timeStartBeginRange: router.query.earliestStart
      ? Number(router.query.earliestStart)
      : -1,
    timeStartEndRange: Number(router.query.latestStart)
      ? Number(router.query.latestStart)
      : -1,
  },
  geoData: {
    zipCode: router.query.zipCode ? Number(router.query.zipCode) : null,
    mileage: router.query.maxMileage ? Number(router.query.maxMileage) : null,
  },
  searchTerm: router.query.searchParam ? router.query.searchParam : "",
};
  //useEffect() for when the router updates?
  useEffect(() => {
      setIsLoading(true);
      setTriviaVenueEntryList(TEMPDATA);
      setIsLoading(false);
  }, [router.query]);

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
        <div className="flex flex-row min-w-full min-h-screen ">
          {/* FILTER*/}
          <div className="hidden lg:block sticky overflow-x-hidden overflow-y-auto sideFrameHeight self-end basis-1/12 bottom-0 border-r-4 z-10  bg-stone-50 text-black">
            <TriviaVenueFilterSelector
              selectedFilters={queryFilter}
              // onFilterChange={handleFilterChange}
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

          <div className="hidden lg:flex flex-col overflow-x-hidden overflow-y-auto justify-center h-screen sticky sideFrameHeight self-end bottom-0 z-10 basis-5/12 bg-cyan-700">
            <ScreenDisplay
              triviaEntry={triviaVenueEntryList?.find(
                (triviaVenueEntry) =>
                  triviaVenueEntry.triviaVenueId ===
                  currentlySelectedTriviaVenue
              )}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TriviaVenueListDisplay;