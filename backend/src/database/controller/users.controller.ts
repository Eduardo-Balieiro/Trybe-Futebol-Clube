import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import UsersService from '../services/users.service';

const param = process.env.JWT_SECRET || 'SenhaSecreta';

async function postUser(req: Request, res:Response) {
  const { email, password } = req.body;
  const user = await UsersService.findEmail(email);
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = jwt.sign({ data: { id: user.id, email, role: user.role } }, param, {
    expiresIn: '5d',
    algorithm: 'HS256',
  });
  res.status(200).json({ token });
}

async function getUserRole(req: Request, res:Response) {
  const { data } = res.locals.login;
  const { email } = data;
  // console.log(email);
  const user = await UsersService.findEmail(email);
  const userRole = user?.role;
  return res.status(200).json({ role: userRole });
}

export { postUser, getUserRole };
