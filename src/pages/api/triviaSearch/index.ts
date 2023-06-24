// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// type Data = {
//   name: string
// }

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }



// export default async function handler(req, res) {
//   // get or edit data for the request project id
//   const { perpFilter } = req.query;
//   if (typeof perpFilter !== "string") {
//     res.status(400).json({ perps: "INVALID REQUEST" });
//     return;
//   }

//CUSTOM-SEARCH
//Enter Search Value
//Send to API, API Determines Search type
  //Restraunt??, Zip Code, City, Address

//API Returns Search Type and the Filter Value
  //ZipCode
  //CityState
  //CustomAddress

//We direct the address to this new filter
//Start Generating Restraunt Values at first request????? --- would need to figure out how to do this.
//Or do we do it after adding the query... then we show the loading screens.


// export default async function handler(req, res) {
//   // get or edit data for the request project id
//   const { perpFilter } = req.query;
//   if (typeof perpFilter !== "string") {
//     res.status(400).json({ perps: "INVALID REQUEST" });
//     return;
//   }


interface TriviaSearchTypeRequestData {
  searchParam: string;
}

//Not sure what else
interface TriviaSearchTypeResponseData {
  searchType: string;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<TriviaSearchTypeResponseData>
) {
  if (!req.body){
    res.status(400).json({ searchType: 'Bad Request: No Body Found' })

  }


  const myReqBody = await JSON.parse(req.body);
  if (req.method === "POST") {
    switch (myReqBody.searchParamType) {
      case "zipcode":
        res.status(200).json({ searchType: "zipcode" });
        console.log("zipcode");
        break;
      case "cityStateSearch":
        res.status(200).json({ searchType: "cityStateSearch" });
        console.log("citystate");
        break;
      case "currentLocationSearch":
        res.status(200).json({ searchType: "currentLocationSearch" });
        console.log("currentlocation");
        break;
      case "customSearch":
        res.status(200).json({ searchType: "customSearch" });
        console.log("customSearch");
        break;
      default:
        res
          .status(400)
          .json({ searchType: "Bad Request: Invalid Search Type" });
    }
    



  } else if (req.method === "GET") {
  } else if (req.method === "PUT") {
  }
}


//   const filteredPerps = await perpDataRetrievalUtils.getPerpsFiltered(
//     perpFilter
//   );

//   if (!filteredPerps) {
//     res.status(400).json({ perps: "NO PERPS FOUND" });
//     return;
//   }

//   if (req.method === "GET") {
//     res.status(200).json(filteredPerps);
//   } else if (req.method === "POST") {
//   } else if (req.method === "PUT") {
//   }
// }