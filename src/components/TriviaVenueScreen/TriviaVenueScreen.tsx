import React from "react";
import Image from "next/image";
import { useState } from "react";

import { TriviaVenueEntryData } from "@/types";

interface TriviaVenueCardProps {
  triviaVenueEntry: TriviaVenueEntryData | undefined;
}

const TriviaVenueScreen: React.FC<TriviaVenueCardProps> = ({ triviaVenueEntry }) => {
  return (
    <div className="text-white place-self-center">
      triviaVenue PAGE: {triviaVenueEntry?.triviaVenueName}
    </div>
  );
};


export default TriviaVenueScreen;
