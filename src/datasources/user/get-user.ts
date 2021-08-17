import _prisma from '@prisma/client'
import { User } from './../../types'

const { PrismaClient } = _prisma;
const prisma = new PrismaClient();

export const getUserById = async (id: number): Promise<User | null> => {
  const user = await prisma.user
    .findUnique({
      where: {
        id,
      }
    });

  return user;
};
