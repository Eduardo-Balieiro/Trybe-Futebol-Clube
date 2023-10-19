import { Request, Response } from 'express';
import MatchesService from '../services/matches.service';
import TeamsService from '../services/teams.service';

async function getAll(req: Request, res: Response) {
  const { inProgress } = req.query;
  //   console.log(req.query);
  const matches = await MatchesService.findAll(inProgress as string);
  res.status(200).json(matches);
}
async function patchProgress(req: Request, res: Response) {
  const payload = req.params;
  const matchEndConfirmation = await MatchesService.alterProgress(payload);
  res.status(200).json({ message: matchEndConfirmation });
}

async function patchTeamsScore(req: Request, res: Response) {
  const { id } = req.params;
  const payload = req.body;
  const matchScoreUpdated = await MatchesService.alterTeamsScore(id, payload);
  res.status(200).json({ message: matchScoreUpdated });
}

async function postMatch(req: Request, res: Response) {
  const payload = req.body;
  const { homeTeamId, awayTeamId } = payload;
  if (homeTeamId === awayTeamId) {
    return res.status(422).json(
      { message: 'It is not possible to create a match with two equal teams' },
    );
  }
  const homeTeamData = await TeamsService.findByPk(homeTeamId);
  const awayTeamData = await TeamsService.findByPk(awayTeamId);
  if (!homeTeamData || !awayTeamData) {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  const result = await MatchesService.createMatch(payload);
  res.status(201).json(result);
}
export { getAll, patchProgress, patchTeamsScore, postMatch };
