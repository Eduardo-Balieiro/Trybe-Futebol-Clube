import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface UsersAtributes {
  id:number;
  username:string;
  role:string;
  email:string;
  password:string;
}

export type UsersCreationalAtributes = Omit<UsersAtributes, 'id'>;

class UsersModel extends Model <UsersAtributes, UsersCreationalAtributes> {
  declare id:number;
  declare username:string;
  declare role:string;
  declare email:string;
  declare password:string;
}
UsersModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  username: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'users',
  modelName: 'UsersModel',
  underscored: true,
  timestamps: false,
});

export default UsersModel;
