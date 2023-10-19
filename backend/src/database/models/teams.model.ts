import { DataTypes, Model } from 'sequelize';
import sequelize from '.';

export interface teamAtributes {
  id:number;
  teamName:string;
}

class TeamsModel extends Model <teamAtributes> {
  declare id: number;
  declare teamName: string;
}

TeamsModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  teamName: {
    type: DataTypes.STRING,
  },
}, {
  sequelize,
  tableName: 'teams',
  modelName: 'TeamsModel',
  underscored: true,
  timestamps: false,
});

export default TeamsModel;
