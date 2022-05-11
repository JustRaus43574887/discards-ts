import { ApolloServerExpressConfig } from "apollo-server-express";
import jwt from "jsonwebtoken";
import config from "config";

import { createStore } from "./store";

import schema from "../schema";
import UserAPI from "../dataSources/user";
import { IUserModel } from "../models/User";

export interface IApolloContext {
  dataSources?: {
    userAPI: UserAPI;
  };
  user: IUserModel;
}

const store = createStore();

const dataSources = () => ({
  userAPI: new UserAPI(store),
});

const context: ApolloServerExpressConfig["context"] = async ({
  req,
  res,
}): Promise<IApolloContext> => {
  const auth: string = (req.headers && req.headers.authorization) || "";
  if (auth.length === 0) return { user: null };
  try {
    const { userId } = jwt.verify(auth, config.get("jwtSecret")) as {
      userId: string;
    };
    const user = await store.User.findOne({ where: { id: userId } });
    return { user };
  } catch (e) {
    res.set("auth", "jwt expired");
  }
};

const apolloServerConfig: ApolloServerExpressConfig = {
  schema,
  dataSources,
  context,
};

export default apolloServerConfig;
