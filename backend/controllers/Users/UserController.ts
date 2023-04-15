import { Request, Response } from 'express';
import { Model } from 'mongoose';
import User from '../../models/UserModel';
import { IUserSchema } from '../../schemas/UserSchema';
import {
  createUser,
  deleteUser,
  getUserByID,
  getUsers,
  loginUser,
  updateUser,
} from '../../services/UserService';
const asyncHandler = require('express-async-handler');

class UsersHandler {
  constructor(public model: Model<IUserSchema> = User) {}

  getUsersHandler = asyncHandler(async (req: Request, res: Response) => {
    const users = await getUsers(this.model);
    res.status(200).json(users);
  });

  getUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await getUserByID(req.params.id, this.model);
    res.status(201).json(user);
  });

  createUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdUser = await createUser(req.body, this.model);
    res.status(201).json(createdUser);
  });

  deleteUserHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteUser(+req.params.id, this.model);
    res.status(200).json({ message: `User ${req.params.id} deleted` });
  });

  updateUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await updateUser(req.params.id, req.body, this.model);

    res.json(user);
  });

  loginUserHandler = asyncHandler(async (req: Request, res: Response) => {
    const user = await loginUser(req.body.email, req.body.password, this.model);
    res.status(201).json(user);
  });
}

export default UsersHandler;
