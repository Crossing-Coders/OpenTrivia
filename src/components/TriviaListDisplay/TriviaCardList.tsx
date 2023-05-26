import React from "react";
import { TriviaCard } from "./TriviaCard";
import { useState } from "react";


import { TriviaEntry } from "@/types";


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
