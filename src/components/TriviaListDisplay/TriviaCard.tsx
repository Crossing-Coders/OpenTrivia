import React from "react";
import Image from "next/image";

import {TriviaEntry} from '../../types/index'



//TODO: FINALIZE WHAT IT LOOKS LIKE WHEN SELECTED
//TODO: Figure out how to make it open a new page instead of mobile selecting the thing or have a back button or something
//TODO: REMOVE IDS FROM DIVS
//TODO: ACTUALLY FORMAT IT THE WAY WE WANT
//TODO: FIGURE OUT WHY THE IMAGES ARE SO BAD LOL
//TODO: FIGURE OUT DEFAULT IMAGE
//TODO: SHAREABLE LINKS
//TODO: IMG BORDERS?

interface TriviaCardProps {
  triviaEntry: TriviaEntry | null;
  onLocationCardClick: (triviaId: number | undefined) => void;
  currentlySelected: boolean;
}
export const TriviaCard: React.FC<TriviaCardProps> = ({
  triviaEntry,
  onLocationCardClick,
  currentlySelected
}) => {
  const handleLocationCardClick = (event: any) => {
    console.log(triviaEntry?.locationId);
    onLocationCardClick(triviaEntry?.locationId);
  };

  const backGroundColor = currentlySelected ? 'bg-green-300' : 'bg-slate-50' 
  //TODO: Figureout what to return if there is an error here
  if (!triviaEntry) return <>FALSE</>

  return (
    <div
      className={`test mb-8 w-full h-64 ${backGroundColor} rounded-md cursor-pointer shadow-md motion-reduce:animate-pulse ease-in duration-150 hover:shadow-xl py-2`}
      id={"outerHoverBoxMain"}
      onClick={handleLocationCardClick}
    >
      <div className="test h-full w-full" id={"innerHoverBox"}>
        <div className="flex h-full flex-row" id={"restrauntMainContainer"}>
          <div
            className="flex flex-col basis-4/12 grow-0 pl-7 h-max w-full self-center"
            id={"restrauntImageContainer"}
          >
            <Image
              className="rounded-md self-center outline-dotted outline-pink-200"
              src={
                triviaEntry
                  ? triviaEntry.locationImage
                  : "https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg"
              }
              width={150}
              height={150}
              alt="Picture of the author"
            />
          </div>
          <div
            className="flex flex-col w-full h-full basis-8/12"
            id={"restrauntInfoContainer"}
          >
            <div className="text-3xl basis-1/4 font-bold underline text-ellipsis break-norma">
              NAME (
              {triviaEntry.locationName}
              )
            </div>
            <div className="basis-1/4">LINK</div>
            <div className="basis-1/4">DAY</div>
          </div>
        </div>
      </div>
    </div>
  );
};
