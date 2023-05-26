//any shared types
export interface TriviaVenueEntryData {
  triviaVenueId: number;
  //For instances where triviaVenue has more than one trivia night
  triviaVenueName: string;
  triviaVenueWebsite: string;
  triviaVenueInstagram: string;
  triviaVenueTwitter: string;
  triviaVenueFacebook: string;
  triviaVenueImage: string;
  triviaVenueType: string;
  triviaVenuePhoneNumber: string;
  triviaVenueAddressStreet: string;
  triviaVenueAddressCity: string;
  triviaVenueAddressState: string;
  triviaVenueAddressZip: string;
  triviaVenueAddressFull: string;
  triviaVenueHours: {
    sunday: {
      openTime: number;
      closeTime: number;
    };
    monday: {
      openTime: number;
      closeTime: number;
    };
    tuesday: {
      openTime: number;
      closeTime: number;
    };
    wednesday: {
      openTime: number;
      closeTime: number;
    };
    thursday: {
      openTime: number;
      closeTime: number;
    };
    friday: {
      openTime: number;
      closeTime: number;
    };
    saturday: {
      openTime: number;
      closeTime: number;
    };
  };
  triviaInstances: Array<TriviaInstance>;
  triviaVenueFood: {
    foodTruck: boolean | string;
    kitchen: boolean | string;
    bringYourOwn: boolean | string;
  };
  triviaVenueAlcohol: {
    wine: boolean | string;
    liquor: boolean | string;
    beer: boolean | string;
  };
  triviaVenueAllowsDogs: boolean | string;
  triviaVenueOutdoorSeating: {
    forTrivia: boolean | string;
    general: boolean | string;
  };
}


export interface TriviaInstance {
  triviaId: number;
  triviaDay: string;
  triviaStartTime: number;
  triviaCompany: string | null;
}


export interface TriviaVenueFilterData {
  time: {
    sunday: boolean;
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
    saturday: boolean;
    timeStartBeginRange: number;
    timeStartEndRange: number;
  };
  geoData: {
    //Valid Zip Code Detection?
    zipCode: number | null;
    mileage: number | null;
  };
  searchTerm: string;
}