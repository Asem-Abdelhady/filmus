import mongoose from 'mongoose';
import { connect } from 'mongoose';
import HttpException from '../middleware/ErrorMiddleware';
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

export const connectDB = async () => {
  if (!MONGO_URI) {
    console.log(
      '-----------------\nUrl for mongo not defined\n-----------------\n'.red
        .underline
    );
    process.exit(1);
  }
  try {
    await connect(MONGO_URI);
    console.log(
      '-----------------\nMongoDB connected\n-----------------\n'.blue.underline
        .bold
    );
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
export function checkIsValidObjectId(id: string) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw new HttpException(`${id} is not a valid id`, 400);
  }
}
