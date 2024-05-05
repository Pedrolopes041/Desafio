-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "profileImage" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "street" TEXT NOT NULL,
    "biography" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);
