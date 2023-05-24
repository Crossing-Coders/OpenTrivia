import React from "react";
import Image from "next/image";

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

interface TriviaCardProps {
  triviaEntry: TriviaEntry | null;
}

export const TriviaCard: React.FC<TriviaCardProps> = ({ triviaEntry }) => {
  return (
    <div className="test w-full" id={"outerHoverBoxMain"}>
      <div className="test w-full" id={"innerHoverBox"}>
        <div
          className="flex flex-row justify-center"
          id={"restrauntMainContainer"}
        >
          <div className="basis-1/3 " id={"restrauntImageContainer"}>
            <Image
              src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
          <div
            className="flex flex-col w-full h-full basis-2/3"
            id={"restrauntInfoContainer"}
          >
            <div className="text-3xl basis-1/4 font-bold underline text-ellipsis break-norma">
              NAME ({triviaEntry?.locationName})
            </div>
            <div className="basis-1/4">LINK</div>
            <div className="basis-1/4">DAY</div>
            <div className="basis-1/4">TIME</div>
          </div>
        </div>
      </div>
    </div>

    // in theory, there is also a spacer <div class='search-results-divider><div>
  );
};

{/* <div class="chat-notification">
  <div class="chat-notification-logo-wrapper">
    <img class="chat-notification-logo" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div class="chat-notification-content">
    <h4 class="chat-notification-title">ChitChat</h4>
    <p class="chat-notification-message">You have a new message!</p>
  </div>
</div>


<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
  <div class="shrink-0">
    <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo">
  </div>
  <div>
    <div class="text-xl font-medium text-black">ChitChat</div>
    <p class="text-slate-500">You have a new message!</p>
  </div>
</div> */}