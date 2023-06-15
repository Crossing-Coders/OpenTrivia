import React from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Router, { useRouter } from "next/router";

import LandingPageSearchBar from "./LandingPageSearchBar";




const LandingPageScreen= () => {
  
  //router containing the current search value

  
  const router=useRouter()


    const handleTestClick1 = async (event: any) => {
      event.preventDefault();
      console.log(navigator);
      const myPerms = await navigator.permissions.query({
        name: "geolocation",
      });
      console.log(myPerms);
    };

    const handleTestClick2 = (event: any) => {
      event.preventDefault();
      navigator.permissions.query({ name: "geolocation" });
      navigator.geolocation.getCurrentPosition((test) => {
        console.log("Location - Lat", test.coords.latitude);
        console.log("Location - Lat", test.coords.longitude);
      });
    };

    
    const handleTestClick3 = (event: any) => {
      event.preventDefault();
      router.push({ pathname: "/", query: {'sunday':'y'}});
    };
  

  return (
    <div className="flex flex-col text-white w-full h-full items-center">
      <div className="h-1/6"></div>
      <div className="text-xl mt-3">Welcome to Open Trivia!</div>
      <div className="mt-3">Find Trivia Near You:</div>
      <div className="mt-3 w-[350px]">
        <div className="flex flex-row w-full items-center">
          <LandingPageSearchBar/>
          <div className="ml-2"></div>
        </div>
      </div>
      <div className="h-full"></div>
      <button onClick={handleTestClick1}>
        LOG NAVIGATOR & GEO LOCATION PERMISSIONS
      </button>
      <button onClick={handleTestClick2}>
        TRYS TO ACCESS GEO LOCATION AND LOG THE LAT/LONG
      </button>
      <button onClick={handleTestClick3}>ADD SUNDAY FILTER</button>
    </div>
  );
};

export default LandingPageScreen;