import { ParamsDictionary } from 'express-serve-static-core';
import MatchesModel from '../models/matches.model';

class MatchesService {
  public static async findAll(inProgress: string): Promise<MatchesModel[]> {
    const matches = await MatchesModel.findAll({
      include: [{ all: true, attributes: { include: ['teamName'], exclude: ['id'] } }] });
    if (inProgress === 'true') {
      return matches.filter((e) => e.inProgress === true);
    } if (inProgress === 'false') {
      return matches.filter((e) => e.inProgress === false);
    }
    return matches;
  }

  public static async alterProgress(payload: ParamsDictionary) : Promise<string> {
    const { id } = payload;
    const updatedMatch = await MatchesModel.update({ inProgress: false }, { where: { id } });
    console.log({ updatedMatch });
    return 'Finished';
  }

  public static async alterTeamsScore(id: string, payload: ParamsDictionary): Promise<string> {
    const { homeTeamGoals, awayTeamGoals } = payload;
    await MatchesModel.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return 'Score Updated';
  }

  public static async createMatch(payload: ParamsDictionary) : Promise<MatchesModel> {
    const { homeTeamId, awayTeamId,
      homeTeamGoals, awayTeamGoals } = payload;

    const newMatch = await MatchesModel.create(
      { homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true },
    );

    return newMatch;
  }
}

export default MatchesService;
