import MatchesModel from '../models/matches.model';
import TeamsModel from '../models/teams.model';

export default interface LeaderBoardAtributes {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

class LeaderBoardStructure {
  private name: string;
  private declare totalPoints: number;
  private declare totalGames: number;
  private declare totalVictories: number;
  private declare totalDraws: number;
  private declare totalLosses: number;
  private declare goalsFavor: number;
  private declare goalsOwn: number;
  private declare goalsBalance: number;
  private declare efficiency: number;

  constructor(name: string) {
    this.name = name;
    this.totalPoints = 0;
    this.totalGames = 0;
    this.totalVictories = 0;
    this.totalDraws = 0;
    this.totalLosses = 0;
    this.goalsFavor = 0;
    this.goalsOwn = 0;
    this.goalsBalance = 0;
    this.efficiency = 0;
  }

  private leaderBoard() {
    return {
      name: this.name,
      totalPoints: this.totalPoints,
      totalGames: this.totalGames,
      totalVictories: this.totalVictories,
      totalDraws: this.totalDraws,
      totalLosses: this.totalLosses,
      goalsFavor: this.goalsFavor,
      goalsOwn: this.goalsOwn,
      goalsBalance: this.goalsBalance,
      efficiency: Number(this.efficiency).toFixed(2),
    };
  }

  private gameWinAndLoses(homeTeam: number, awayTeam: number) {
    this.goalsFavor += homeTeam;
    this.goalsOwn += awayTeam;
    if (homeTeam > awayTeam) {
      this.totalPoints += 3; this.totalVictories += 1;
    }
    if (homeTeam === awayTeam) {
      this.totalPoints += 1;
      this.totalDraws += 1;
    }
    if (homeTeam < awayTeam) { this.totalLosses += 1; }
  }

  private efficiencyCalculum() {
    this.efficiency = ((this.totalPoints / (this.totalGames * 3)) * 100);
  }

  private scoreCalculum() {
    this.goalsBalance = this.goalsFavor - this.goalsOwn;
  }

  public makeTheLeaderBord(id: number, matches: MatchesModel[]) {
    this.totalGames = matches.length;
    matches.forEach((e: MatchesModel) => {
      if (e.homeTeamId === id) this.gameWinAndLoses(e.homeTeamGoals, e.awayTeamGoals);
      else this.gameWinAndLoses(e.awayTeamGoals, e.homeTeamGoals);
    });
    this.efficiencyCalculum();
    this.scoreCalculum();
    return this.leaderBoard();
  }
}
const postAll = (teams: TeamsModel[], matches: MatchesModel[], param: string) => {
  const result = teams.map((team: TeamsModel) => {
    const newTeam = new LeaderBoardStructure(team.teamName);
    if (param === 'home') {
      return newTeam.makeTheLeaderBord(team.id, matches.filter(
        (e: MatchesModel) => e.homeTeamId === team.id,
      ));
    } if (param === 'away') {
      return newTeam.makeTheLeaderBord(team.id, matches.filter(
        (e: MatchesModel) => e.awayTeamId === team.id,
      ));
    } return newTeam.makeTheLeaderBord(team.id, matches.filter((
      e: MatchesModel,
    ) => e.homeTeamId === team.id
      || e.awayTeamId === team.id));
  });
  return result;
};

export { postAll };
