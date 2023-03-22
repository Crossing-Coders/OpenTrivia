-- CreateTable
CREATE TABLE "Restraunt" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "url" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "TriviaEvent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "restrauntId" INTEGER NOT NULL,
    "starts_at" DATETIME NOT NULL,
    "price" INTEGER,
    CONSTRAINT "TriviaEvent_restrauntId_fkey" FOREIGN KEY ("restrauntId") REFERENCES "Restraunt" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Restraunt_name_key" ON "Restraunt"("name");
