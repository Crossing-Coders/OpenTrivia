-- CreateTable
CREATE TABLE "Restraunt" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zipCode" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Restraunt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriviaEvent" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "restrauntId" INTEGER NOT NULL,
    "starts_at" TIMESTAMP(3) NOT NULL,
    "price" INTEGER,

    CONSTRAINT "TriviaEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Restraunt_name_key" ON "Restraunt"("name");

-- AddForeignKey
ALTER TABLE "TriviaEvent" ADD CONSTRAINT "TriviaEvent_restrauntId_fkey" FOREIGN KEY ("restrauntId") REFERENCES "Restraunt"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
