import { mockTriviaEvents } from "../src//mocks/events";
import { mockTriviaVenues } from "../src/mocks/venues";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // create the venues
  await prisma.triviaVenue.createMany({ data: mockTriviaVenues });

  // add events to all the venues
  await prisma.triviaEvent.createMany({ data: mockTriviaEvents });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
