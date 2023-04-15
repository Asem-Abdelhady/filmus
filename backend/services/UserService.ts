import { Model } from 'mongoose';
import HttpException from '../middleware/ErrorMiddleware';
import { sanitizeLoginUser, sanitizeUser } from '../sanitizers/UserSanitizer';
import { IUserSchema } from '../schemas/UserSchema';
import IUser, { IUserReturnType } from '../types/UserTypes';
import bcrypt from 'bcrypt';
import { generateToken } from './tokenService';

export async function getUsers(model: Model<IUserSchema>): Promise<IUser[]> {
  try {
    const users = await model.find();
    if (!users) throw new Error('No users found');
    return users;
  } catch (err) {
    throw new Error(`Error getting users,  ${err}`);
  }
}

export async function getUserByID(
  userId: string,
  model: Model<IUserSchema>
): Promise<IUserSchema> {
  try {
    const user = await model.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  } catch (err) {
    throw new Error(`Error getting user,  ${err}`);
  }
}

export async function createUser(
  user: IUser,
  model: Model<IUserSchema>
): Promise<IUserReturnType> {
  const sanitizedUser = await sanitizeUser(user);
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(sanitizedUser.password, salt);

  try {
    const newUser = await model.create({
      username: sanitizedUser.username,
      email: sanitizedUser.email,
      password: hashedPassword,
      isAdmin: sanitizedUser.isAdmin,
    });
    if (!newUser) throw new HttpException('User not created', 400);

    return {
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      token: generateToken({
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        isAdmin: newUser.isAdmin,
      }),
    };
  } catch (err) {
    throw new HttpException(`Failed to create user: ${err.message}`, 400);
  }
}

export async function updateUser(
  userId: string,
  user: IUser,
  model: Model<IUserSchema>
): Promise<IUserSchema> {
  const sanitizedUser = await sanitizeUser(user);

  try {
    const updatedUser = await model.findByIdAndUpdate(userId, sanitizeUser, {
      new: true,
    });
    if (!updatedUser) throw new Error('User not found');
    return updatedUser;
  } catch (err) {
    throw new Error(`Error updating the user,  ${err}`);
  }
}

export async function deleteUser(
  userId: number,
  model: Model<IUserSchema>
): Promise<void> {
  try {
    const user = await model.findByIdAndDelete(userId);
    if (!user) throw new Error('User not found');
    return;
  } catch (err) {
    throw new Error(`Error deleting the user, ${err}`);
  }
}

export async function loginUser(
  email: string,
  password: string,
  model: Model<IUserSchema>
): Promise<IUserReturnType> {
  const sanitizedUser = await sanitizeLoginUser(email, password);

  try {
    const user = await model.findOne({ email });
    if (!user) throw new HttpException('User not found', 404);

    const isPasswordValid = await bcrypt.compare(
      sanitizedUser.password,
      user.password
    );
    if (!isPasswordValid) throw new HttpException('Password is invalid', 401);

    return {
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken({
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin,
      }),
    };
  } catch (err) {
    throw new HttpException(`Failed to login user: ${err.message}`, 401);
  }
}
