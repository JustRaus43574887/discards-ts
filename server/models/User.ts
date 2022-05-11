import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface IUserAttributes {
  id: string;
  name: string;
  surname?: string;
  phone?: string;
  email: string;
  password: string;
}

export interface IUserModel extends Model<IUserAttributes>, IUserAttributes {}
class User extends Model<IUserModel, IUserAttributes> {}

export type TUserStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUserModel;
};

export const userFactory = (sequelize: Sequelize): TUserStatic =>
  <TUserStatic>sequelize.define("user", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: { type: DataTypes.STRING, allowNull: false },
    surname: { type: DataTypes.STRING, allowNull: true },
    phone: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
  });

export default User;
