import _prisma from '@prisma/client'
import { Comment } from './../../types'

const { PrismaClient } = _prisma;
const prisma = new PrismaClient();

type CommentPayload = {
  todoId: number;
  value: string;
}

export const createComment = async (
  userId: number,
  {
    todoId,
    value
  }: CommentPayload
): Promise<Comment> =>
  await prisma.comments.create({
    data: {
      value,
      users: {
        connect: {
          userId,
        },
      },
      todos: {
        connect: {
          todoId,
        }
      }
    }
  });

export const getCommentsForTodo = async (todoId: number): Promise<Comment[] | null> => await prisma.todos
    .findUnique({
      where: {
        todoId,
      }
    })
    .comments();
