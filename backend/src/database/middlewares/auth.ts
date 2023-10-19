import { Request, Response, NextFunction } from 'express';

const auth = (req:Request, res:Response, next:NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  const emailFormat = email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi);
  if (password.length < 6 || !emailFormat) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default auth;
