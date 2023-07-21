/*
  Warnings:

  - You are about to drop the column `restrauntId` on the `TriviaEvent` table. All the data in the column will be lost.
  - You are about to drop the column `starts_at` on the `TriviaEvent` table. All the data in the column will be lost.
  - You are about to drop the `Restraunt` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `startsAt` to the `TriviaEvent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `triviaVenueId` to the `TriviaEvent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "TriviaEvent" DROP CONSTRAINT "TriviaEvent_restrauntId_fkey";

-- AlterTable
ALTER TABLE "TriviaEvent" DROP COLUMN "restrauntId",
DROP COLUMN "starts_at",
ADD COLUMN     "startsAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "triviaVenueId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Restraunt";

-- CreateTable
CREATE TABLE "TriviaVenue" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "TriviaVenue_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "TriviaVenue_name_key" ON "TriviaVenue"("name");

-- AddForeignKey
ALTER TABLE "TriviaEvent" ADD CONSTRAINT "TriviaEvent_triviaVenueId_fkey" FOREIGN KEY ("triviaVenueId") REFERENCES "TriviaVenue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
