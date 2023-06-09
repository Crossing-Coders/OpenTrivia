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
      navigator.permissions.query({ name: "geolocation" });
      router.push({ pathname: "/", query: {'sunday':'y'} });
    };
  
  
  return (
    <div className="text-white place-self-center text-center">
      <div>Welcome to Open Trivia - Find Trivia Near You:</div>
      <button onClick={handleTestClick1}>TEST1</button>
      <br />
      <button onClick={handleTestClick2}>TEST2</button>
      <br />
      <button onClick={handleTestClick3}>TEST2</button>
    </div>
  );
};

export default LandingPageScreen;