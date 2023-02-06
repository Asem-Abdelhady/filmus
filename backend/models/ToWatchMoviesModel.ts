import { model } from "mongoose";
import toWatchMovieSchema from "../schemas/toWatchMoveiesSchema";

const ToWatchMovieModel = model<ISavedMovie>(
  "ToWatchMovie",
  toWatchMovieSchema
);
