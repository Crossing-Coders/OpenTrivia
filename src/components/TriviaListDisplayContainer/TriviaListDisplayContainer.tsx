import React, { useState, useEffect } from "react";

import { TriviaFilterSelector } from "./TriviaFilterSelector";
import Header from "../layout/Header";
import {TriviaCard} from './TriviaCard'
//Should I have another container for the trivia cards?

import { TEMPDATA } from "../../TEMPDATA";
import { BooleanLiteral } from "typescript";
import { TriviaCardList } from "./TriviaCardList";

//Seperate Types Folder?

//TriviaFilter
//TriviaList
//TriviaEntry

//Use of string | null vs. string === ''?
//How best to represent time?
//setup ENUM incase of unknown? for now we do boolean or string

interface TriviaEntry {
  locationId: number;
  //For instances where location has more than one trivia night
  triviaId: number;
  locationName: string;
  locationWebsite: string;
  locationInstagram: string;
  locationTwitter: string;
  locationFacebook: string;
  locationImage: string | null;
  locationType: string;
  locationPhoneNumber: string;
  locationAddressStreet: string;
  locationAddressCity: string;
  locationAddressState: string;
  locationAddressZip: string;
  locationAddressFull: string;
  triviaDay: string;
  triviaStartTime: number;
  //On day of trivia
  locationCloseTime: number;
  triviaCompany: string | null;
  locationFood: {
    foodTruck: boolean | string;
    kitchen: boolean | string;
    bringYourOwn: boolean | string;
  };
  locationAlcohol: {
    wine: boolean | string;
    liquor: boolean | string;
    beer: boolean | string;
  };
  locationAllowsDogs: boolean | string;
  locationOutdoorSeating: {
    forTrivia: boolean | string;
    general: boolean | string;
  };
}


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

export const TriviaListDisplayContainer: React.FC = () => {
    //Should we have a list of filtered Trivias?
//   const [filteredTriviaList, setFilteredTriviaList] = useState<Array<TriviaEntry> | null>(null);

  const [triviaEntryList, setTriviaEntryList] = useState<Array<TriviaEntry> | null>(null);

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

  return (
    <div className="min-h-screen w-full">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex flex-row min-w-full min-h-screen">
          {/* FILTER*/}
          {/* want height to be (h-screen) - (headerheight) */}
          <div className="hidden lg:block h-screen sticky self-end basis-1/12 bottom-0 z-10  bg-slate-800 text-white">
            <TriviaFilterSelector
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
            />
          </div>
          {/* LIST*/}
          {/* Need to add the Filter Logic - might make sense to put in a triviaList Component // NEW - ON CLICK, IF ITS MOBILE, REDIRECT TO PAGE, OTHERWISE, have it pop up on the side*/}
          <div className="lg:block w-fill lg:basis-6/12 p-4 bg-gray-300 min-h-full">
            <div className="flex flex-col w-full items-center    ">
              <TriviaCardList triviaEntryList={triviaEntryList} />
            </div>
          </div>
          {/* RESTRAUNT PAGE -- hidden unless lg*/}
          <div className="hidden lg:block h-screen sticky self-end bottom-0 z-10 basis-5/12 bg-orange-700">
            {" "}
            test{" "}
          </div>
        </div>
      )}
    </div>
  );
};
