import { DataSource } from "apollo-datasource";
import { getUserById } from "./api.js"

import { User } from '../../types'

export default class UsersAPI extends DataSource {
  constructor () {
    super();
  }

  initialize () {
  }

  async getUserById (userId: number): Promise<User | null> {
    return getUserById(userId)
      .then((user: User | null) => Promise.resolve(user));
  }
}
