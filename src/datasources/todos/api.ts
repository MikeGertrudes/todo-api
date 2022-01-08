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
  await prisma.todos.create({
    data: {
      title,
      description,
      status: DEFAULT_TODO_STATUS,
      users: {
        connect: {
          userId,
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
  await prisma.todos.update({
    where: {
      todoId,
    },
    data: {
      title,
      description,
      status,
      users: {
        connect: {
          userId,
        },
      }
    }
  });

// user with id 2, shouldn't be able to delete something they don't own, like user 3's todo
export const deleteTodo = async (_userId: number, todoId: number): Promise<Todo | null> => {
  // const allowedTodos = await prisma.user
  //   .findUnique({ where: { id: 2 }})
  //   .todo()
  //   .map

  return await prisma.todos.delete({
    where: {
      todoId
    },
  });
}


export const getTodosForUser = async (userId: number): Promise<Todo[] | null> => await prisma.users
    .findUnique({
      where: {
        userId,
      }
    })
    .todos();
