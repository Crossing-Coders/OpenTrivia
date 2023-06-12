import React from "react";
import Image from "next/image";
import Router, { useRouter } from "next/router";


const LandingPageScreen= () => {
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
      router.push({ pathname: "/", query: {'sunday':'y'} });
    };
  
  
  return (
    <div className="flex flex-col text-white text-center w-full h-full">
      <div className="h-1/6"></div>
      <div className="text-xl mt-3">Welcome to Open Trivia!</div>
      <div className="mt-3">Find Trivia Near You:</div>
      <div className="mt-3">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          <input
            className="text-black border-green-500 border-2 active:border-red-500"
            type="text"
          />
        </label>
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