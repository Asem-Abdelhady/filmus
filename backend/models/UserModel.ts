import { model } from "mongoose";
import userSchema from "../schemas/userSchema";

const User = model<IUser>("User", userSchema);

export default User;
