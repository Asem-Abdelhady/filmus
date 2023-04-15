import { model } from 'mongoose';
import userSchema, { IUserSchema } from '../schemas/UserSchema';

const User = model<IUserSchema>('User', userSchema);

export default User;
