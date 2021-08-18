const schema = `
  type Query {
    user(userId: Int!): User
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

  type Mutation {
    createTodo(userId: Int!, title: String!, description: String): Todo!
    updateTodo(userId: Int!, todoId: Int!, title: String, description: String): Todo!
    deleteTodo(userId: Int!, todoId: Int!): Todo
  }
`;

export default schema;
