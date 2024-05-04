-- CreateTable
CREATE TABLE "Pessoa" (
    "id" SERIAL NOT NULL,
    "imagemDePerfil" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idade" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "biografia" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("id")
);
