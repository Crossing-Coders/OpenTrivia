import React from "react";
import { TriviaCard } from "./TriviaCard";
import { useState } from "react";


interface TriviaEntry {
  locationId: number;
  //For instances where location has more than one trivia night
  triviaId: number;
  locationName: string;
  locationWebsite: string;
  locationInstagram: string;
  locationTwitter: string;
  locationFacebook: string;
  locationImage: string;
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


interface TriviaCardListProps {
  triviaEntryList: Array<TriviaEntry> | null;
  onLocationCardClick: (locationId: number | undefined) => void;
  currentlySelectedLocation: number | null;
}
    
//TODO: FIGURE OUT HOW TO ADD DIFFERENT MODULES, HOW TO DO MULTIPLE PAGES,


export const TriviaCardList: React.FC<TriviaCardListProps> = ({
  triviaEntryList,
  onLocationCardClick,
  currentlySelectedLocation,
}) => {
  
  //TODO: IF FILTER MAKES LIST EMPTY
  if (!triviaEntryList) return <>ERROR</>

  return (
    <div className="flex flex-col w-full items-center">
      {triviaEntryList.map((triviaEntry) => {
        return (
          <TriviaCard
            key={triviaEntry.locationId}
            triviaEntry={triviaEntry}
            onLocationCardClick={onLocationCardClick}
            currentlySelected={
              currentlySelectedLocation === triviaEntry.locationId
                ? true
                : false
            }
          />
        );
      })}
    </div>
  );
};
