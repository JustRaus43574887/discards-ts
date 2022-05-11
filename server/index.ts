import express from "express";
import { ApolloServer } from "apollo-server-express";
import expressStaticGzip from "express-static-gzip";
import path from "path";
import config from "config";

import apolloServerConfig from "./utils/apolloServerConfig";

const server = new ApolloServer(apolloServerConfig);

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(
    "/",
    expressStaticGzip(path.join("client", "build"), {
      enableBrotli: true,
      orderPreference: ["br", "gz"],
    })
  );
  app.get("*", (_, res) => {
    res.sendFile(path.resolve("client", "build", "index.html"));
  });
}

server.applyMiddleware({ app });

const port = config.get("port");
app.listen({ port }, () => {
  console.log(
    "🚀 Server ready at",
    `https://localhost:${port}${server.graphqlPath}`
  );
});
