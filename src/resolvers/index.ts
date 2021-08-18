export default {
  Query: {
    user: (_: any, { userId }: { userId: number }, { dataSources }: any) =>
      dataSources.userAPI.getUserById(userId),
  },
  User: {
    todos: (parent: any, __: any, { dataSources }: any) =>
      dataSources.todoAPI.getTodosForUser(parent.id)
  },
  Mutation: {
    createTodo: (
      _: any,
      {
        userId,
        title,
        description
      }: {
        userId: number;
        title: string;
        description: string;
      },
      {
        dataSources
      }: any
    ) => dataSources.todoAPI.createTodo(userId, title, description),
    updateTodo: (
      _: any,
      {
        userId,
        todoId,
        title,
        description,
        status,
      }: {
        userId: number;
        todoId: number;
        title: string;
        description: string;
        status: string;
      },
      {
        dataSources
      }: any
    ) => dataSources.todoAPI.updateTodo(userId, todoId, { title, description, status }),
    deleteTodo: (
      _: any,
      {
        userId,
        todoId,
      }: {
        userId: number;
        todoId: number;
      },
      {
        dataSources
      }: any
    ) => dataSources.todoAPI.deleteTodo(userId, todoId),
  }
};
