import { DataSource } from "apollo-datasource";
import { getUserById } from "./get-user.js"

import { User } from './../../types'

export default class UserAPI extends DataSource {
  constructor () {
    super();
  }

  initialize () {
  }

  async getUserById (id: number): Promise<User | null> {
    return getUserById(id)
      .then((user: User | null) => Promise.resolve(user));
  }
}
