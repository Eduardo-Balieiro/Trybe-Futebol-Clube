import MatchesService from './matches.service';
import TeamService from './teams.service';
import LeaderBoardAtributes, { postAll } from '../interface/LeaderBoard.interface';

class LeaderBoardService {
  static async LeaderBoardOrdenateAndAssign(homeOrAway: string) {
    const teams = await TeamService.findAll();
    const matches = await MatchesService.findAll('false');
    const leaderBoardDisorderly = postAll(teams, matches, homeOrAway);
    console.log(leaderBoardDisorderly);
    const leaderBoard = leaderBoardDisorderly.sort(
      (a: LeaderBoardAtributes, b: LeaderBoardAtributes) => b.goalsFavor - a.goalsFavor,
    )
      .sort((a: LeaderBoardAtributes, b: LeaderBoardAtributes) => b.goalsBalance - a.goalsBalance)
      .sort((a: LeaderBoardAtributes, b: LeaderBoardAtributes) => b.totalPoints - a.totalPoints);
    return leaderBoard;
  }
}

export default LeaderBoardService;
