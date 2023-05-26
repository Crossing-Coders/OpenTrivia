import React from "react";
import Image from "next/image";
import { useState } from "react";
import { OpenTriviaCard } from "./OpenTriviaCard";

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

interface LocationCardProps {
  triviaEntry: TriviaEntry | undefined;
}
//box-shadow: 0 0 10px #0000001a;

export const LocationCard: React.FC<LocationCardProps> = ({ triviaEntry }) => {
  return triviaEntry === undefined ? (
    <OpenTriviaCard />
  ) : (
    <div className="text-white place-self-center">
      LOCATION PAGE: {triviaEntry?.locationName}
    </div>
  );
};
