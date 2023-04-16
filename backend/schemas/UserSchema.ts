import { Schema } from 'mongoose';
import type IUser from '../types/UserTypes';
// eslint-disable-next-line no-useless-escape
export const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export interface IUserSchema extends IUser {
    _id: string;
}
const userSchema = new Schema<IUser>(
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
            type: String,
            required: true,
            default:
                'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },

        lovedMovies: {
            type: Map,
            of: {
                name: {
                    type: String,
                    required: [true, 'Cannot save namesless movie'],
                },
                desc: {
                    type: String,
                    required: [true, 'Movie with no description'],
                },
                pic: { type: String, required: [true, 'Movie with no pic'] },
                rate: { type: Number, required: true },
                movieId: { type: String, required: true },
            },
        },
        watchedMovies: {
            type: Map,
            of: {
                name: {
                    type: String,
                    required: [true, 'Cannot save namesless movie'],
                },
                desc: {
                    type: String,
                    required: [true, 'Movie with no description'],
                },
                pic: { type: String, required: [true, 'Movie with no pic'] },
                rate: { type: Number },
                movieId: { type: String, required: true },
            },
        },
        toWatchMovies: {
            type: Map,
            of: {
                name: {
                    type: String,
                    required: [true, 'Cannot save namesless movie'],
                },
                desc: {
                    type: String,
                    required: [true, 'Movie with no description'],
                },
                pic: { type: String, required: [true, 'Movie with no pic'] },
                rate: { type: Number },
                movieId: { type: String, required: true },
            },
        },
        resetPasswordToken: String,
        resetPasswordExpires: Date,
    },
    { timestamps: true }
);

export default userSchema;
