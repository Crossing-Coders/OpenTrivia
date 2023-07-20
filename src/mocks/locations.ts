/**
 * @file This mock data file provides an example list of locations.
 *
 * @author Ben Flanders
 * @date 2023-05-2023
 *
 * The TriviaVenue object can be a restraunt, brewery, or other type of
 * establishment that hosts a trivia event.
 */

import { TriviaVenue } from "@prisma/client";

export const triviaVenues: TriviaVenue[] = [
  // add a list of locations here for seeding the database and for testing
  {
    id: 1,
    name: "Eventide",
    address: "1015 Grant St SE",
    city: "Atlanta",
    email: "",
    phone: "4049074543",
    state: "Georgia",
    url: "https://www.eventidebrewing.com/",
    zipCode: 30315,
  },
];
