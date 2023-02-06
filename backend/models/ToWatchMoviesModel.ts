import { model } from "mongoose";
import toWatchMovieSchema from "../schemas/ToWatchMoveiesSchema";
import ISavedMovie from "../types/MoviesTypes";

const ToWatchMovieModel = model<ISavedMovie>(
  "ToWatchMovie",
  toWatchMovieSchema
);

export default ToWatchMovieModel;
