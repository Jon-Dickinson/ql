import { schema } from "lib/schema";
import resolvers from "lib/resolvers";
import { NextApiRequest, NextApiResponse } from "next";
import { ApolloServer } from "apollo-server-micro";

// Create the Apollo server
const apolloServer = new ApolloServer({
  schema, // Use the imported schema here
  resolvers,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
