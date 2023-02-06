import { connect } from "mongoose";
require("dotenv").config();

const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI);

export const connectDB = async () => {
  if (!MONGO_URI) {
    console.log("-----------------\nUrl for mongo\n-----------------\n");
    process.exit(1);
  }
  try {
    await connect(MONGO_URI);
    console.log("-----------------\nMongoDB connected\n-----------------\n");
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};
