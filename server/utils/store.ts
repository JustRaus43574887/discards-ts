import { Sequelize } from "sequelize";
import config from "config";

import { userFactory, TUserStatic } from "../models/User";

export type Store = {
  User: TUserStatic;
};

export const createStore = (): Store => {
  const sequelize = new Sequelize(config.get("pgString"), {
    logging: false,
  });

  const User = userFactory(sequelize);

  sequelize.sync();

  return { User };
};
