const schema = `
  type Query {
    user(userId: Int!): User
  }

  type User {
    userId: Int
    firstName: String
    lastName: String
    handle: String
    email: String
    todos: [Todo]
  }

  type Todo {
    todoId: Int
    title: String
    description: String
    dueDate: String
    status: String
    created_at: String
    comments: [Comment]
  }

  type Comment {
    value: String
  }

  type Mutation {
    createTodo(userId: Int!, title: String!, description: String): Todo!
    updateTodo(userId: Int!, todoId: Int!, title: String, description: String, status: String): Todo!
    deleteTodo(userId: Int!, todoId: Int!): Todo
  }
`;

export default schema;
