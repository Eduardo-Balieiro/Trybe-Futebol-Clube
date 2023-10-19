import { Router } from 'express';
import TokenValidation from '../database/middlewares/tokenValidation';
import { getAll,
  patchProgress, patchTeamsScore, postMatch } from '../database/controller/matches.controller';

const matchesRouter = Router();

matchesRouter.get('/', getAll);
matchesRouter.patch('/:id/finish', TokenValidation, patchProgress);
matchesRouter.patch('/:id', TokenValidation, patchTeamsScore);
matchesRouter.post('/', TokenValidation, postMatch);

export default matchesRouter;
