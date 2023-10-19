import TeamsModel from '../models/teams.model';

class TeamsService {
  public static async findAll(): Promise<TeamsModel[]> {
    const teams = await TeamsModel.findAll();
    return teams;
  }

  public static async findByPk(id : string): Promise<TeamsModel | null> {
    const team = await TeamsModel.findByPk(id);
    return team;
  }
}

export default TeamsService;
