import { model } from "mongoose";
import watchedMovieSchema from "../schemas/WatchedMoviesSchema";
import ISavedMovie from "../types/MoviesTypes";

const WatchedMovieModel = model<ISavedMovie>(
  "ToWatchMovie",
  watchedMovieSchema
);

export default WatchedMovieModel;
