import _prisma from '@prisma/client'
import { Todo } from './../../types'

const { PrismaClient } = _prisma;
const prisma = new PrismaClient();

export const getTodosForUser = async (id: number): Promise<Todo[] | null> => {
  const todos = await prisma.user
    .findUnique({
      where: {
        id,
      }
    })
    .todo();

  return todos;
};
