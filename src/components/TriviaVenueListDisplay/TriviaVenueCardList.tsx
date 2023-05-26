import React from "react";
import { TriviaVenueCard } from "./TriviaVenueCard";
import { useState } from "react";


import { TriviaVenueEntryData } from "@/types";


interface TriviaCardListProps {
  triviaVenueEntryList: Array<TriviaVenueEntryData> | null;
  onTriviaVenueCardClick: (triviaVenueId: number | undefined) => void;
  currentlySelectedTriviaVenue: number | null;
}
    
//TODO: FIGURE OUT HOW TO ADD DIFFERENT MODULES, HOW TO DO MULTIPLE PAGES,


export const TriviaVenueCardList: React.FC<TriviaCardListProps> = ({
  triviaVenueEntryList,
  onTriviaVenueCardClick,
  currentlySelectedTriviaVenue,
}) => {
  //TODO: IF FILTER MAKES LIST EMPTY
  if (!triviaVenueEntryList) return <>ERROR</>;

  return (
    <div className="flex flex-col w-full items-center">
      {triviaVenueEntryList.map((triviaVenueEntry) => {
        return (
          <TriviaVenueCard
            key={triviaVenueEntry.triviaVenueId}
            triviaVenueEntry={triviaVenueEntry}
            onTriviaVenueCardClick={onTriviaVenueCardClick}
            currentlySelected={
              currentlySelectedTriviaVenue === triviaVenueEntry?.triviaVenueId
                ? true
                : false
            }
          />
        );
      })}
    </div>
  );
};
