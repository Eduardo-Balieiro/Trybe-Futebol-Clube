import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderBoard.service';

async function getHomeLeaderBoard(_req: Request, res: Response) {
  const leaderBoard = await LeaderBoardService.LeaderBoardOrdenateAndAssign('home');
  res.status(200).json(leaderBoard);
}

async function getAwayLeaderBoard(_req: Request, res: Response) {
  const leaderBoard = await LeaderBoardService.LeaderBoardOrdenateAndAssign('away');
  res.status(200).json(leaderBoard);
}

async function getAllLeaderBoard(_req: Request, res: Response) {
  const leaderBoard = await LeaderBoardService.LeaderBoardOrdenateAndAssign('');
  res.status(200).json(leaderBoard);
}

export { getHomeLeaderBoard, getAwayLeaderBoard, getAllLeaderBoard };
