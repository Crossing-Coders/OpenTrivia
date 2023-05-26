import React from "react";
import Image from "next/image";
import { useState } from "react";

import LandingPageScreen from "../LandingPageScreen/LandingPageScreen";
import TriviaVenueScreen from "../TriviaVenueScreen";

import {TriviaVenueEntryData} from '../../types/index'




interface ScreenDisplayProps {
  triviaEntry: TriviaVenueEntryData | undefined;
}

export const ScreenDisplay: React.FC<ScreenDisplayProps> = ({ triviaEntry }) => {
  return triviaEntry === undefined ? (
    <LandingPageScreen />
  ) : (
    <TriviaVenueScreen triviaVenueEntry={triviaEntry} />
  );
};

