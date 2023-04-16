import type ISavedMovieSchema from './SavedMovieSchema';

interface IUser {
    email: string;
    username: string;
    pic: string;
    isAdmin: boolean;
    password: string;
    resetPasswordToken: string;
    resetPasswordExpires: Date;
    lovedMovies: Map<string, ISavedMovieSchema>;
    toWatchMovies: Map<string, ISavedMovieSchema>;
    watchedMovies: Map<string, ISavedMovieSchema>;
}

export interface IUserReturnType {
    _id: string;
    username: string;
    email: string;
    isAdmin: boolean;
    token: string;
}

export interface IUserSanitizerType {
    username: string;
    email: string;
    password: string;
    isAdmin: boolean;
}
export default IUser;
