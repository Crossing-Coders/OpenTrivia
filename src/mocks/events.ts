import { TriviaEvent } from "@prisma/client";

export const mockTriviaEvents: TriviaEvent[] = [
  // relies on mockTriviaVenues
  {
    id: 1,
    name: "Dirty South Trivia",
    startsAt: new Date("2023-03-23T07:00"),
    price: 0,
    triviaVenueId: 1,
  },
  {
    id: 2,
    name: "Dirty South Trivia",
    startsAt: new Date("2023-03-30T07:00"),
    price: 0,
    triviaVenueId: 1,
  },
  {
    id: 3,
    name: "Team Trivia",
    startsAt: new Date("2023-03-22T07:30"),
    price: 0,
    triviaVenueId: 2,
  },
  {
    id: 4,
    name: "Team Trivia",
    startsAt: new Date("2023-03-23T08:00"),
    price: 0,
    triviaVenueId: 2,
  },
];
