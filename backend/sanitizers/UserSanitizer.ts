import HttpException from '../middleware/ErrorMiddleware';
import { emailRegex } from '../schemas/UserSchema';
import type IUser from '../types/UserTypes';
import { type IUserSanitizerType } from '../types/UserTypes';

export async function sanitizeUser(user: IUser): Promise<IUserSanitizerType> {
    const sanitizedUser: IUserSanitizerType = {
        username: '',
        email: '',
        password: '',
        isAdmin: false,
    };
    sanitizedUser.email = sanitizeEmail(user.email);
    sanitizedUser.password = await sanitizePassword(user.password);
    sanitizedUser.isAdmin = sanitizeIsAdmin(user.isAdmin);
    sanitizedUser.username = sanitizeUsername(user.username);
    return sanitizedUser;
}

function sanitizeUsername(username: string): string {
    if (username === undefined) {
        throw new HttpException('Username is undefined', 400);
    }
    if (typeof username !== 'string') {
        throw new HttpException('Username is not a string', 400);
    }

    // Attributes
    username = username.trim();

    return username;
}
function sanitizeIsAdmin(isAdmin: boolean): boolean {
    // Types
    if (!isAdmin) isAdmin = false;

    return isAdmin;
}

export async function sanitizeLoginUser(
    email: string,
    password: string
): Promise<IUserSanitizerType> {
    // eslint-disable-next-line no-use-before-define
    const sanitizedUser: IUserSanitizerType = {
        username: '',
        email: '',
        password: '',
        isAdmin: false,
    };
    sanitizedUser.email = sanitizeEmail(email);
    sanitizedUser.password = await sanitizePassword(password);

    return sanitizedUser;
}

function sanitizeEmail(email: string): string {
    // Types
    if (email === undefined) {
        throw new HttpException('Email is undefined', 400);
    }
    if (typeof email !== 'string') {
        throw new HttpException('Email is not a string', 400);
    }

    // Attributes
    email = email.trim();
    if (email.length < 6) {
        throw new HttpException('Email must be at least 6 characters', 400);
    }
    if (email.length > 50) {
        throw new HttpException('Email must be less then 50 characters', 400);
    }
    if (email.match(emailRegex) == null) {
        throw new HttpException('Please add a valid email', 400);
    }

    return email;
}

async function sanitizePassword(password: string): Promise<string> {
    // Types
    if (password === undefined) {
        throw new HttpException('Password is undefined', 400);
    }
    if (typeof password !== 'string') {
        throw new HttpException('Password is not a string', 400);
    }

    // Attributes
    password = password.trim();
    if (password.length < 6) {
        throw new HttpException('Password must be at least 6 characters', 400);
    }
    if (password.length > 50) {
        throw new HttpException('Password mut be less then 50 characters', 400);
    }

    return password;
}
