import { DataSource } from "apollo-datasource";
import {
  getCommentsForTodo,
  createComment,
} from "./api.js"

import { Comment } from './../../types'

export default class CommentAPI extends DataSource {
  constructor () {
    super();
  }

  initialize () {
  }

  async getCommentsForTodo (postId: number): Promise<Comment[] | null> {
    return getCommentsForTodo(postId)
      .then((comments: Comment[] | null) => Promise.resolve(comments));
  }

  async createComment (userId: number, todoId: number, value: string): Promise<Comment | null> {
    return createComment(userId, { todoId, value })
      .then((comment: Comment | null) => Promise.resolve(comment));
  }
}
