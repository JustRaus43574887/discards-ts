import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { IUserModel } from "../../models/User";
import { IApolloContext } from "../../utils/apolloServerConfig";

import UserInput from "../inputs/user";

import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcryptjs";

const registration: GraphQLFieldConfig<any, IApolloContext, IUserModel> = {
  description: "Registrate new user.",
  args: UserInput,
  type: GraphQLNonNull(GraphQLString),
  resolve: async (
    _,
    { name, email, password },
    { dataSources }
  ): Promise<string | ApolloError> => {
    try {
      if (password.length < 6)
        return new ApolloError("Слишком короткий пароль!");

      const candidate = await dataSources.userAPI.findUser(email);
      if (candidate) return new ApolloError("Пользователь уже существует!");

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await dataSources.userAPI.createUser({
        name,
        email,
        password: hashedPassword,
      } as IUserModel);

      if (user) return "Пользователь создан!";
      else return new ApolloError("Ошибка создания пользователя!");
    } catch (e) {
      console.log(e);
      return new ApolloError("Ошибка сервера!");
    }
  },
};

export default registration;
