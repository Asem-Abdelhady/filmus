import { Schema } from 'mongoose';
import IUser from '../types/UserTypes';

export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export interface IUserSchema extends IUser {
  _id: string;
}
const userSchema: Schema<IUser> = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is requried'],
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is requried'],
      min: [6, 'Email must be at least 6 characters'],
      max: [50, 'Email must be less then 50 characters'],
      match: [emailRegex, 'Please add a valid email'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      min: [6, 'Password must be at least 6 characters'],
      max: [50, 'Password must be less then 50 characters'],
    },
    pic: {
      type: 'String',
      required: true,
      default:
        'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
  },
  { timestamps: true }
);

export default userSchema;
