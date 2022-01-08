import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import UsersAPI from "./datasources/users/index.js";
import TodosAPI from "./datasources/todos/index.js";
import CommentsAPI from "./datasources/comments/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    usersAPI: new UsersAPI(),
    todosAPI: new TodosAPI(),
    commentsAPI: new CommentsAPI(),
  }),
  introspection: true
});

server
  .listen()
  .then(({ url }: { url: string; }) => console.log(`Server is running on ${url}`));
