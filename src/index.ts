import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/index.js";
import resolvers from "./resolvers/index.js";
import UserAPI from "./datasources/user/index.js";
import TodoAPI from "./datasources/todo/index.js";
import CommentAPI from "./datasources/comment/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    userAPI: new UserAPI(),
    todoAPI: new TodoAPI(),
    commentAPI: new CommentAPI(),
  }),
  introspection: true
});

server
  .listen()
  .then(({ url }: { url: string; }) => console.log(`Server is running on ${url}`));
