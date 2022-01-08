import _prisma from '@prisma/client'
import { User } from './../../types'

const { PrismaClient } = _prisma;
const prisma = new PrismaClient();

export const getUserById = async (userId: number): Promise<User | null> => {
  const user = await prisma.users
    .findUnique({
      where: {
        userId
      }
    });

  return user;
};
