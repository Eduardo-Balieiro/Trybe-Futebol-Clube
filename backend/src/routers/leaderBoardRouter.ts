import { Router } from 'express';
import { getHomeLeaderBoard,
  getAwayLeaderBoard, getAllLeaderBoard } from '../database/controller/leaderBoard.controller';

const leaderBoardRouter = Router();

leaderBoardRouter.get('/home', getHomeLeaderBoard);
leaderBoardRouter.get('/away', getAwayLeaderBoard);
leaderBoardRouter.get('/', getAllLeaderBoard);

export default leaderBoardRouter;
