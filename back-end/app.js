const connect = require("connect");
const { ApolloServer, gql } = require("apollo-server-express");
const query = require("qs-middleware");
const mongoose = require("mongoose");
require('dotenv').config()

const typeDefs = require("./middleware/typeDefs");
const resolvers = require("./middleware/resolvers");

mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true }
);
mongoose.connection.once("open", () => {
  console.log("conneted to database");
});

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = connect();
  const path = "/graphql";

  app.use(query());
  server.applyMiddleware({ app, path });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}
startApolloServer();
