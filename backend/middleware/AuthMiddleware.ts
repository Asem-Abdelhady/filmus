import { NextFunction, Response, Request } from 'express';
import User from '../models/UserModel';
import { verifyToken } from '../services/tokenService';
import { getUserByID } from '../services/UserService';
import IUser from '../types/UserTypes';
import HttpException from './ErrorMiddleware';

const asyncHandler = require('express-async-handler');

export interface GetUserAuthInfoRequest extends Request {
  user: IUser;
}

export const protect = asyncHandler(
  async (req: GetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    // expect {headers: {authorization: "Bearer token"}}
    if (
      !req.headers ||
      !req.headers.authorization ||
      !req.headers.authorization.startsWith('Bearer ')
    ) {
      throw new HttpException('Unauthorized', 401);
    }

    const token = req.headers.authorization.split(' ')[1];
    const decoded = verifyToken(token);
    req.user = await getUserByID(decoded._id, User);
    next();
  }
);
