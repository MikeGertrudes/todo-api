import { DataSource } from "apollo-datasource";
import { getTodosForUser } from "./get-todo.js"

import { Todo } from './../../types'

export default class TodoAPI extends DataSource {
  constructor () {
    super();
  }

  initialize () {
  }

  async getTodosForUser (id: number): Promise<Todo[] | null> {
    return getTodosForUser(id)
      .then((todos: Todo[] | null) => Promise.resolve(todos));
  }
}
