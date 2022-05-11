import { DataSource } from "apollo-datasource";
import isEmail from "isemail";
import { Store } from "../utils/store";
import { IUserModel, IUserAttributes } from "../models/User";

class UserAPI extends DataSource {
  private store: Store;

  constructor(store: Store) {
    super();
    this.store = store;
  }

  async createUser(data: IUserAttributes): Promise<IUserModel> {
    return await this.store.User.create(data);
  }

  async findUser(email: string): Promise<IUserModel> {
    if (!isEmail.validate(email)) return;
    return await this.store.User.findOne({ where: { email } });
  }

  async updateUser(id: string, data: IUserAttributes): Promise<IUserModel> {
    return await this.store.User.update(data, { where: { id } })[0];
  }
}

export default UserAPI;
