import React from "react";
import { TriviaCard } from "./TriviaCard";



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


interface TriviaCardListProps {
  triviaEntryList: Array<TriviaEntry> | null
}

export const TriviaCardList: React.FC<TriviaCardListProps> = ({
  triviaEntryList
}) => {
  return <>{triviaEntryList?.map(
    triviaEntry => {
        return (
        <TriviaCard key= {triviaEntry.triviaId} triviaEntry={triviaEntry}/>
        )
    }
  )}</>;
};
