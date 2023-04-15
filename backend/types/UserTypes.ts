interface IUser {
  email: string;
  username: string;
  pic: string;
  isAdmin: boolean;
  password: string;
  resetPasswordToken: string;
  resetPasswordExpires: Date;
}

export interface IUserReturnType {
  _id: string;
  username: string;
  email: string;
  isAdmin: boolean;
  token: string;
}
export default IUser;
