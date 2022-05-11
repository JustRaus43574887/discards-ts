import { GraphQLFieldConfig, GraphQLNonNull } from "graphql";
import { IUserModel } from "../../models/User";
import { IApolloContext } from "../../utils/apolloServerConfig";

import UpdateInput from "../inputs/update";
import UserType from "../types/user";

import isEmail from "isemail";
import { ApolloError } from "apollo-server-errors";
import bcrypt from "bcryptjs";
import PhoneNumber from "awesome-phonenumber";

const update: GraphQLFieldConfig<any, IApolloContext, IUserModel> = {
  description: "Update current user.",
  args: UpdateInput,
  type: GraphQLNonNull(UserType),
  resolve: async (
    _,
    form,
    { dataSources, user }
  ): Promise<IUserModel | ApolloError> => {
    try {
      if (!user) return new ApolloError("Не авторизован!");

      let {
        name = user.name,
        surname = user.surname,
        phone = user.phone,
        email = user.email,
        password = user.password,
      } = form;

      if (!isEmail.validate(email)) return new ApolloError("Неверный Email!");
      if (password !== user.password) {
        if (!(await bcrypt.compare(password, user.password))) {
          password = await bcrypt.hash(password, 12);
        }
      }

      const pn = new PhoneNumber(phone, "RU");
      if (!pn.isValid()) return new ApolloError("Неверный формат телефона!");

      const result = await dataSources.userAPI.updateUser(user.id, <IUserModel>{
        name,
        surname,
        phone,
        email,
        password,
      });

      if (result) return result;
      else return new ApolloError("Ошибка обновления пользователя!");
    } catch (e) {
      console.log(e);
      return new ApolloError("Ошибка сервера!");
    }
  },
};

export default update;
