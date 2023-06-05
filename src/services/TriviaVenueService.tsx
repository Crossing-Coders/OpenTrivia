const getTriviaVenuesFiltered = async (myname) => {
  const response = await fetch(`/api/perp/perpSearch/${myname}`);
  const data = await response.json();
  console.log("perpService: getPerpsFiltered data", data);
  return data;

  return [
    {
      fullname: "JOHN F KENNEDY",
      imageurl:
        "https://static.life.com/wp-content/uploads/migrated/2013/10/131030-jfk-1947-senator-01.jpg",
      webid: "JFK_WEBID",
      perpdesc: "JFK_PERPDESC",
    },
    {
      fullname: "fakename",
      imageurl: null,
      webid: "FAKEWEBID",
      perpdesc: "fakeperpdesc",
    },
  ];
};

const getSpecificPerp = async (mywebid) => {
  //CREATE NEXTJS API
};

const getRandomPerp = async () => {
  const response = await fetch(`/api/perp/random`);
  const data = await response.json();
  return data;
};

const votePerp = async (mywebid, myvote) => {
  //CREATE NEXTJS API
};

export default {
  getPerpsFiltered,
  getSpecificPerp,
  getRandomPerp,
  votePerp,
};
