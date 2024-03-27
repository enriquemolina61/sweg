import { Prisma, PrismaClient } from "@prisma/client";

export const users: Prisma.UserCreateInput[] = [
  {
    name: "John Doe",
    email: "teste@teste.com",
    phoneNumber: "11999999999",
  },
];

export const user = async (prisma: PrismaClient) => {
  for (const obj of Object.values(users)) {
    await prisma.user.upsert({
      where: {
        id: obj.id,
      },
      update: {},
      create: {
        ...obj,
      },
    });
  }
};
