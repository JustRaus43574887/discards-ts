import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { IUserModel } from "../../models/User";
import { IApolloContext } from "../../utils/apolloServerConfig";

import UserInput from "../inputs/user";
import LoginType, { TLogin } from "../types/login";

import isEmail from "isemail";
import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

const login: GraphQLFieldConfig<any, IApolloContext, IUserModel> = {
  description: "Log in user account.",
  args: UserInput,
  type: GraphQLNonNull(LoginType),
  resolve: async (_, { email, password }, { dataSources }): Promise<TLogin> => {
    try {
      if (!isEmail.validate(email)) return new ApolloError("Неверный Email!");

      const user = await dataSources.userAPI.findUser(email);
      if (!user) return new ApolloError("Такого пользователя не существует!");

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return new ApolloError("Неверный пароль");

      const token = jwt.sign({ userId: user.id }, config.get("jwtSecret"), {
        expiresIn: "30d",
      });

      return {
        token,
        user,
      };
    } catch (e) {
      console.log(e);
      return new ApolloError("Ошибка сервера!");
    }
  },
};

export default login;
