import { model } from "mongoose";
import userSchema from "../schemas/UserSchema";

const User = model<IUser>("User", userSchema);

export default User;
