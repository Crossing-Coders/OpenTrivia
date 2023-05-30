import { TriviaVenueEntryData } from "./types";
export const TEMPDATA: Array<TriviaVenueEntryData> = [
  {
    triviaVenueId: 11,
    //For instances where triviaVenue has more than one trivia night
    triviaVenueName: "Eventide",
    triviaVenueWebsite: "https://www.eventidebrewing.com/",
    triviaVenueInstagram: "",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "",
    triviaVenueImage:
      "https://lh5.googleusercontent.com/-PlzsaLgvL9E/AAAAAAAAAAI/AAAAAAAAAAA/h7s7lnJ0f6Y/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Brewery",
    triviaVenuePhoneNumber: "4049074543",
    triviaVenueAddressLine1: "1015 Grant St SE",
    triviaVenueAddressLine2: "",
    triviaVenueAddressCity: "Atlanta",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30315",
    triviaVenueAddressFull: "1015 Grant St SE, Atlanta, GA 30315",
    triviaVenueHours: {
      sunday: {
        openTime: 0,
        closeTime: 0,
      },
      monday: {
        openTime: 1100,
        closeTime: 2300,
      },
      tuesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      wednesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      thursday: {
        openTime: 1100,
        closeTime: 2300,
      },
      friday: {
        openTime: 1200,
        closeTime: 2330,
      },
      saturday: {
        openTime: 600,
        closeTime: 2200,
      },
    },
    triviaInstances: [
      {
        triviaId: 111,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 112,
        triviaDay: "tuesday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
    ],

    //setup ENUM incase of unknown? for now we do boolean or string
    triviaVenueFood: {
      foodTruck: true,
      kitchen: false,
      bringYourOwn: true,
    },
    triviaVenueAlcohol: {
      wine: false,
      liquor: false,
      beer: true,
    },
    triviaVenueAllowsDogs: true,
    triviaVenueOutdoorSeating: {
      forTrivia: false,
      general: true,
    },
  },
  {
    triviaVenueId: 22,
    //For instances where triviaVenue has more than one trivia night
    triviaVenueName: "Joe's Sports Bar & Grill",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/joessportsbarngrill_johnscrk/",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "https://www.facebook.com/joesbarjohnscreek/",
    triviaVenueImage:
      "https://lh6.googleusercontent.com/-Bb3KLzVFCoI/AAAAAAAAAAI/AAAAAAAAAAA/O9YGG0C5gsE/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressLine1: "11950 Jones Bridge Rd",
    triviaVenueAddressLine2: "",
    triviaVenueAddressCity: "Alpharetta",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30005",
    triviaVenueAddressFull: "11950 Jones Bridge Rd, Alpharetta, GA 30005",
    triviaVenueHours: {
      sunday: {
        openTime: 0,
        closeTime: 0,
      },
      monday: {
        openTime: 1100,
        closeTime: 2300,
      },
      tuesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      wednesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      thursday: {
        openTime: 1100,
        closeTime: 2300,
      },
      friday: {
        openTime: 1200,
        closeTime: 2330,
      },
      saturday: {
        openTime: 600,
        closeTime: 2200,
      },
    },
    triviaInstances: [
      {
        triviaId: 221,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 222,
        triviaDay: "tuesday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
    ],
    triviaVenueFood: {
      foodTruck: false,
      kitchen: true,
      bringYourOwn: false,
    },
    triviaVenueAlcohol: {
      wine: true,
      liquor: true,
      beer: true,
    },
    triviaVenueAllowsDogs: false,
    triviaVenueOutdoorSeating: {
      forTrivia: false,
      general: false,
    },
  },
  {
    triviaVenueId: 33,
    //For instances where triviaVenue has more than one trivia night
    triviaVenueName: "El Trompo",
    triviaVenueWebsite: "http://eltrompotaqueria.com/",
    triviaVenueInstagram: "",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "",
    triviaVenueImage:
      "https://eltrompotaqueria.com/wp-content/uploads/2020/08/LOGO-ICON-WHITE.png",
    triviaVenueType: "Grill",
    triviaVenuePhoneNumber: "7707549442",
    triviaVenueAddressLine1: "11877 Douglas Rd",
    triviaVenueAddressLine2: "#130",
    triviaVenueAddressCity: "Alpharetta",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30005",
    triviaVenueAddressFull: "11877 Jones Bridge Rd #113, Alpharetta, GA 30005",
    triviaVenueHours: {
      sunday: {
        openTime: 0,
        closeTime: 0,
      },
      monday: {
        openTime: 1100,
        closeTime: 2200,
      },
      tuesday: {
        openTime: 1100,
        closeTime: 2200,
      },
      wednesday: {
        openTime: 1100,
        closeTime: 2200,
      },
      thursday: {
        openTime: 1100,
        closeTime: 2200,
      },
      friday: {
        openTime: 1200,
        closeTime: 2300,
      },
      saturday: {
        openTime: 600,
        closeTime: 2300,
      },
    },
    triviaInstances: [
      {
        triviaId: 331,
        triviaDay: "thursday",
        triviaStartTime: 1730,
        triviaCompany: "",
      },
    ],
    triviaVenueFood: {
      foodTruck: false,
      kitchen: true,
      bringYourOwn: false,
    },
    triviaVenueAlcohol: {
      wine: true,
      liquor: false,
      beer: true,
    },
    triviaVenueAllowsDogs: false,
    triviaVenueOutdoorSeating: {
      forTrivia: false,
      general: true,
    },
  },
  {
    triviaVenueId: 44,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "The Local",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/thelocalpubandgrill/?hl=en",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "",
    triviaVenueImage: "http://thelocalkaraoke.com/LocalLogo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "4048735002",
    triviaVenueAddressLine1: "758 Ponce De Leon Ave NE",
    triviaVenueAddressLine2: "",
    triviaVenueAddressCity: "Atlanta",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30306",
    triviaVenueAddressFull: "758 Ponce De Leon Ave NE, Atlanta, GA 30306",
    triviaVenueHours: {
      sunday: {
        openTime: 1700,
        closeTime: 0,
      },
      monday: {
        openTime: 2000,
        closeTime: 200,
      },
      tuesday: {
        openTime: 1700,
        closeTime: 0,
      },
      wednesday: {
        openTime: 1700,
        closeTime: 0,
      },
      thursday: {
        openTime: 1700,
        closeTime: 100,
      },
      friday: {
        openTime: 1700,
        closeTime: 200,
      },
      saturday: {
        openTime: 1700,
        closeTime: 200,
      },
    },
    triviaInstances: [
      {
        triviaId: 441,
        triviaDay: "monday",
        triviaStartTime: 2230,
        triviaCompany: "",
      },
    ],
    triviaVenueFood: {
      foodTruck: false,
      kitchen: true,
      bringYourOwn: false,
    },
    triviaVenueAlcohol: {
      wine: true,
      liquor: true,
      beer: true,
    },
    triviaVenueAllowsDogs: false,
    triviaVenueOutdoorSeating: {
      forTrivia: true,
      general: true,
    },
  },
  {
    triviaVenueId: 55,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "Mama's Boy",
    triviaVenueWebsite: "https://www.mamasboyathens.com/",
    triviaVenueInstagram: "https://www.instagram.com/mamasboyathens",
    triviaVenueTwitter: "https://twitter.com/mamasboyathens",
    triviaVenueFacebook: "https://www.facebook.com/mamasboyathens",
    triviaVenueImage:
      "https://images.squarespace-cdn.com/content/v1/59a48f25bebafb9444642c2d/fed002d4-6c79-4793-917e-b5a6442dcace/Mama%27s+Boy+Registered+Logo1024_1.jpg?format=1500w",
    triviaVenueType: "Restraunt",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressLine1: "197 Oak St",
    triviaVenueAddressLine2: "",
    triviaVenueAddressCity: "Athens",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30601",
    triviaVenueAddressFull: "197 Oak St, Athens, GA 30601",
    triviaVenueHours: {
      sunday: {
        openTime: 0,
        closeTime: 0,
      },
      monday: {
        openTime: 1100,
        closeTime: 2300,
      },
      tuesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      wednesday: {
        openTime: 1100,
        closeTime: 2300,
      },
      thursday: {
        openTime: 1100,
        closeTime: 2300,
      },
      friday: {
        openTime: 1200,
        closeTime: 2330,
      },
      saturday: {
        openTime: 600,
        closeTime: 2200,
      },
    },
    triviaInstances: [
      {
        triviaId: 551,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 552,
        triviaDay: "wednesday",
        triviaStartTime: 1830,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
    ],
    triviaVenueFood: {
      foodTruck: true,
      kitchen: false,
      bringYourOwn: true,
    },
    triviaVenueAlcohol: {
      wine: true,
      liquor: false,
      beer: true,
    },
    triviaVenueAllowsDogs: true,
    triviaVenueOutdoorSeating: {
      forTrivia: false,
      general: false,
    },
  },
  {
    triviaVenueId: 66,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "Cali N Titos ",
    triviaVenueWebsite: "",
    triviaVenueInstagram: "",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "",
    triviaVenueImage: "",
    triviaVenueType: "Restraunt",
    triviaVenuePhoneNumber: "7062279979",
    triviaVenueAddressLine1: "1427 S Lumpkin St",
    triviaVenueAddressLine2: "",
    triviaVenueAddressCity: "Athens",
    triviaVenueAddressState: "GA",
    triviaVenueAddressZip: "30605",
    triviaVenueAddressFull: "1427 S Lumpkin St, Athens, GA 30605",
    triviaVenueHours: {
      sunday: {
        openTime: 1100,
        closeTime: 2100,
      },
      monday: {
        openTime: 1100,
        closeTime: 2100,
      },
      tuesday: {
        openTime: 1100,
        closeTime: 2100,
      },
      wednesday: {
        openTime: 1100,
        closeTime: 2100,
      },
      thursday: {
        openTime: 1100,
        closeTime: 2100,
      },
      friday: {
        openTime: 1100,
        closeTime: 2200,
      },
      saturday: {
        openTime: 1100,
        closeTime: 2200,
      },
    },
    triviaInstances: [
      {
        triviaId: 661,
        triviaDay: "saturday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 662,
        triviaDay: "tuesday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
    ],
    triviaVenueFood: {
      foodTruck: false,
      kitchen: true,
      bringYourOwn: false,
    },
    triviaVenueAlcohol: {
      wine: true,
      liquor: true,
      beer: true,
    },
    triviaVenueAllowsDogs: false,
    triviaVenueOutdoorSeating: {
      forTrivia: false,
      general: false,
    },
  },
];
