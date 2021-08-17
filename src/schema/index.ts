const schema = `
  type Query {
    user(id: Int!): User
  }

  type User {
    id: Int
    firstName: String
    lastName: String
    handle: String
    email: String
    todos: [Todo]
  }

  type Todo {
    id: Int
    title: String
    description: String
    status: String
  }
`;

export default schema;
