export default {
  Query: {
    user: (_: any, { id }: { id: number }, { dataSources }: any) =>
      dataSources.userAPI.getUserById(id),
  },
  User: {
    todos: (parent: any, __: any, { dataSources }: any) =>
      dataSources.todoAPI.getTodosForUser(parent.id)
  }
};
