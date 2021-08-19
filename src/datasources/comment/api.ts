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
  await prisma.comment.create({
    data: {
      value,
      user: {
        connect: {
          id: userId,
        },
      },
      todo: {
        connect: {
          id: todoId,
        }
      }
    }
  });

export const getCommentsForTodo = async (todoId: number): Promise<Comment[] | null> => await prisma.todo
    .findUnique({
      where: {
        id: todoId,
      }
    })
    .comment();
