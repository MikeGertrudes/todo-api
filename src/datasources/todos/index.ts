import { DataSource } from "apollo-datasource";
import {
  getTodosForUser,
  createTodo,
  updateTodo,
  deleteTodo,
} from "./api.js"

import { Todo } from '../../types'

export default class TodosAPI extends DataSource {
  constructor () {
    super();
  }

  initialize () {
  }

  async getTodosForUser (userId: number): Promise<Todo[] | null> {
    return getTodosForUser(userId)
      .then((todos: Todo[] | null) => Promise.resolve(todos));
  }

  async createTodo (userId: number, title: string, description?: string): Promise<Todo | null> {
    return createTodo(userId, { title, description })
      .then((todo: Todo | null) => Promise.resolve(todo));
  }

  async updateTodo (
    userId: number,
    todoId: number,
    {
      title,
      description,
      status
    }: {
      title: string;
      description?: string;
      status?: string;
    }): Promise<Todo | null> {
    return updateTodo(userId, todoId, { title, description, status })
      .then((todo: Todo | null) => Promise.resolve(todo));
  }

  async deleteTodo (userId: number, todoId: number): Promise<Todo | null> {
    return deleteTodo(userId, todoId)
      .then((todo: Todo | null) => Promise.resolve(todo));
  }
}
