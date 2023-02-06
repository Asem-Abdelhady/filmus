import { Schema } from "mongoose";
import ISavedMovie from "../types/MoviesTypes";

const lovedMovieSchema = new Schema<ISavedMovie>(
  {
    name: { type: String, required: true },
    desc: { type: String, required: true },
    pic: { type: String, required: true },
    rate: { type: Number },
  },
  {
    timestamps: true,
  }
);

export default lovedMovieSchema;
