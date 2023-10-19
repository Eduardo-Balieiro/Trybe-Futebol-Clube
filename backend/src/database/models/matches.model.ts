import { DataTypes, Model } from 'sequelize';
import sequelize from '.';
import TeamsModel from './teams.model';

class MatchesModel extends Model {
  declare id : number;
  declare homeTeamId: number;
  declare homeTeamGoals : number;
  declare awayTeamId: number;
  declare awayTeamGoals : number;
  declare inProgress: boolean;

  // static associate(models) {
  //   // define association here
  // }
}
MatchesModel.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  homeTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  homeTeamGoals: {
    type: DataTypes.INTEGER,
  },
  awayTeamId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'teams',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  awayTeamGoals: {
    type: DataTypes.INTEGER,
  },
  inProgress: {
    type: DataTypes.BOOLEAN,
  },
}, {
  sequelize,
  modelName: 'MatchesModel',
  tableName: 'matches',
  underscored: true,
  timestamps: false,
});

MatchesModel.belongsTo(TeamsModel, { as: 'homeTeam', foreignKey: 'homeTeamId' });
MatchesModel.belongsTo(TeamsModel, { as: 'awayTeam', foreignKey: 'awayTeamId' });

export default MatchesModel;
