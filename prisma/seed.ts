import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const restraunt_1 = await prisma.restraunt.create({
    data: {
      name: "North River Tavern",
      address: "8879 Roswell Rd",
      city: "Sandy Springs",
      state: "GA",
      zipCode: 30350,
      url: "https://northrivertavern.com/",
      triviaEvents: {
        create: [
          {
            name: "Team Trivia",
            starts_at: new Date("2023-03-22T07:30"),
            id: 1,
          },
          {
            name: "Team Trivia",
            starts_at: new Date("2023-03-23T08:00"),
            id: 2,
          },
        ],
      },
    },
  });

  const restraunt_2 = await prisma.restraunt.create({
    data: {
      name: "Eventide Brewing",
      address: "1015 Grant St Se",
      city: "Atlanta",
      state: "GA",
      zipCode: 30315,
      url: "https://eventidebrewing.com/",
      triviaEvents: {
        create: [
          {
            name: "Dirty South Trivia",
            starts_at: new Date("2023-03-23T07:00"),
            price: 0,
          },
          {
            name: "Dirty South Trivia",
            starts_at: new Date("2023-03-30T07:00"),
            price: 0,
          },
        ],
      },
    },
  });
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
