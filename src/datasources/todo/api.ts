import _prisma from '@prisma/client'
import { Todo } from './../../types'

const { PrismaClient } = _prisma;
const prisma = new PrismaClient();

type TodoPayload = {
  title: string;
  description?: string;
  status?: string;
}

const DEFAULT_TODO_STATUS = 'TO_DO';

export const createTodo = async (
  userId: number,
  {
    title,
    description
  }: TodoPayload
): Promise<Todo> =>
  await prisma.todo.create({
    data: {
      title,
      description,
      status: DEFAULT_TODO_STATUS,
      user: {
        connect: {
          id: userId,
        },
      }
    }
  });

export const updateTodo = async (
  userId: number,
  todoId: number,
  {
    title,
    description,
    status
  }: TodoPayload
): Promise<Todo> =>
  await prisma.todo.update({
    where: {
      id: todoId,
    },
    data: {
      title,
      description,
      status,
      user: {
        connect: {
          id: userId,
        },
      }
    }
  });

export const deleteTodo = async (_userId: number, todoId: number): Promise<Todo | null> =>
  await prisma.todo.delete({
    where: {
      id: todoId,
    },
  });

export const getTodosForUser = async (userId: number): Promise<Todo[] | null> => await prisma.user
    .findUnique({
      where: {
        id: userId,
      }
    })
    .todo();
