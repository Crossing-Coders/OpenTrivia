import React from "react";
import Image from "next/image";
import { useState } from "react";

import LandingPageScreen from "../LandingPageScreen/LandingPageScreen";
import LocationTriviaScreen from "../LocationTriviaScreen";

import {TriviaEntry} from '../../types/index'




interface ScreenDisplayProps {
  triviaEntry: TriviaEntry | undefined;
}

export const ScreenDisplay: React.FC<ScreenDisplayProps> = ({ triviaEntry }) => {
  return triviaEntry === undefined ? (
    <LandingPageScreen />
  ) : (
    <LocationTriviaScreen triviaEntry={triviaEntry} />
  );
};

