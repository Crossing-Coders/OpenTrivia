// const getTriviaVenuesFiltered = async (myname) => {
//   const response = await fetch(`/api/perp/perpSearch/${myname}`);
//   const data = await response.json();
//   console.log("perpService: getPerpsFiltered data", data);
//   return data;

//   return [
//     {
//       fullname: "JOHN F KENNEDY",
//       imageurl:
//         "https://static.life.com/wp-content/uploads/migrated/2013/10/131030-jfk-1947-senator-01.jpg",
//       webid: "JFK_WEBID",
//       perpdesc: "JFK_PERPDESC",
//     },
//     {
//       fullname: "fakename",
//       imageurl: null,
//       webid: "FAKEWEBID",
//       perpdesc: "fakeperpdesc",
//     },
//   ];
// };


export interface TriviaSearchTypeRequestData {
  searchParam: string;
}

const getTriviaSearchType = async (requestData: TriviaSearchTypeRequestData) => {
  console.log(requestData.searchParam)
};

export interface TriviaSearchLocationData {
  searchParam: string;
  searchParamType: string;
  distanceLimit: number;

}

const getTriviaVenuesByLocation = async (
  requestData: TriviaSearchLocationData
) => {
  const request = new Request("/api/triviaSearch/", {
    method: "POST",
    body: JSON.stringify(requestData),
  });
  const res = await fetch(request);
  if (!res.ok){
    throw new Error('Failed to fetch data')
  }


  const resBody = await res.json()
  

  return resBody;

};


export default {
  getTriviaSearchType,
  getTriviaVenuesByLocation
};
