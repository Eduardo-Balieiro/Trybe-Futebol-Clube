import { Router } from 'express';
import { getAll, getByID } from '../database/controller/teams.controller';

const teamsRouter = Router();

teamsRouter.get('/', getAll);
teamsRouter.get('/:id', getByID);

export default teamsRouter;
