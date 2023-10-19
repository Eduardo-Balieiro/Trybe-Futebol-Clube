import { Request, Response } from 'express';
import TeamsService from '../services/teams.service';

async function getAll(_req: Request, res:Response) {
  const teams = await TeamsService.findAll();
  res.status(200).json(teams);
}

async function getByID(req: Request, res:Response) {
  const { id } = req.params;
  const team = await TeamsService.findByPk(id);
  res.status(200).json(team);
}

export { getAll, getByID };
