import { Router } from 'express';
import auth from '../database/middlewares/auth';
import { postUser, getUserRole } from '../database/controller/users.controller';
import TokenValidation from '../database/middlewares/tokenValidation';

const loginRouter = Router();

loginRouter.post('/', auth, postUser);
loginRouter.get('/role', TokenValidation, getUserRole);

export default loginRouter;
