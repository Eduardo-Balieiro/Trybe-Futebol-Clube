import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const password = process.env.JWT_SECRET || 'SenhaSecreta';

const verifyToken = (token:string) => {
  try {
    return jwt.verify(token, password);
  } catch (err) {
    return false;
  }
};

const TokenValidation = (req:Request, res:Response, next:NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  const verify = verifyToken(authorization);
  res.locals.login = verify;

  if (!verify) return res.status(401).json({ message: 'Token must be a valid token' });

  next();
};

export default TokenValidation;
