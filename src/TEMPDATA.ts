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
    triviaVenueAddressStreet: "1015 Grant St SE",
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
    triviaVenueAddressStreet: "11950 Jones Bridge Rd",
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
    triviaVenueName: "El Trompo (UNF)",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/joessportsbarngrill_johnscrk/",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "https://www.facebook.com/joesbarjohnscreek/",
    triviaVenueImage:
      "https://lh6.googleusercontent.com/-Bb3KLzVFCoI/AAAAAAAAAAI/AAAAAAAAAAA/O9YGG0C5gsE/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressStreet: "11950 Jones Bridge Rd",
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
        triviaId: 331,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 332,
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
    triviaVenueId: 44,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "The Local (UNF)",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/joessportsbarngrill_johnscrk/",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "https://www.facebook.com/joesbarjohnscreek/",
    triviaVenueImage:
      "https://lh6.googleusercontent.com/-Bb3KLzVFCoI/AAAAAAAAAAI/AAAAAAAAAAA/O9YGG0C5gsE/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressStreet: "11950 Jones Bridge Rd",
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
        triviaId: 441,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 442,
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
    triviaVenueId: 55,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "Mama's Boy (UNF)",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/joessportsbarngrill_johnscrk/",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "https://www.facebook.com/joesbarjohnscreek/",
    triviaVenueImage:
      "https://lh6.googleusercontent.com/-Bb3KLzVFCoI/AAAAAAAAAAI/AAAAAAAAAAA/O9YGG0C5gsE/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressStreet: "11950 Jones Bridge Rd",
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
        triviaId: 551,
        triviaDay: "thursday",
        triviaStartTime: 1930,
        triviaCompany: "https://www.dirtysouthtrivia.com/",
      },
      {
        triviaId: 552,
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
    triviaVenueId: 66,
    //For instances where triviaVenue has more than one trivia night

    triviaVenueName: "Cali N Titos (UNF)",
    triviaVenueWebsite: "https://joesjohnscreek.com/",
    triviaVenueInstagram:
      "https://www.instagram.com/joessportsbarngrill_johnscrk/",
    triviaVenueTwitter: "",
    triviaVenueFacebook: "https://www.facebook.com/joesbarjohnscreek/",
    triviaVenueImage:
      "https://lh6.googleusercontent.com/-Bb3KLzVFCoI/AAAAAAAAAAI/AAAAAAAAAAA/O9YGG0C5gsE/s29-p-k-no-ns-nd/photo.jpg",
    triviaVenueType: "Sports Bar",
    triviaVenuePhoneNumber: "7706741189",
    triviaVenueAddressStreet: "11950 Jones Bridge Rd",
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
        triviaId: 661,
        triviaDay: "thursday",
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
