/*
  Warnings:

  - You are about to drop the `Pessoa` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Pessoa";

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "profileImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "biography" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
