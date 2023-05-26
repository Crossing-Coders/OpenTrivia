import React from "react";
import Image from "next/image";
import { useState } from "react";

import { TriviaEntry } from "@/types";

interface LocationCardProps {
  triviaEntry: TriviaEntry | undefined;
}

const LocationTriviaScreen: React.FC<LocationCardProps> = ({ triviaEntry }) => {
  
  return (

    <div className="text-white place-self-center">
      LOCATION PAGE: {triviaEntry?.locationName}
    </div>
  );
};


export default LocationTriviaScreen
