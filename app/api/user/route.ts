import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export interface UserProps {
  name: string;
  age: number;
  street: string;
  biography: string;
  profileImage?: string;
}

export const POST = async (req: Request) => {
  const { age, biography, name, street } = await req.json();

  try {
    const updatedUser = await prisma.user.update({
      where: { id: 1 },
      data: {
        age,
        biography,
        name,
        street,
      },
    });
    return NextResponse.json({updatedUser});
  } catch (error: any) {
    throw new Error("Erro ao atualizar pessoa: " + error.message);
  }
};

export const GET = async () => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: 1 },
    });
    console.log(user)
    return NextResponse.json({user});
  } catch (error: any) {
    throw new Error("Erro ao atualizar pessoa: " + error.message);
  }
};
