import { model } from "mongoose";
import watchedMovieSchema from "../schemas/watchedMoviesSchema";

const ToWatchMovieModel = model<ISavedMovie>(
  "ToWatchMovie",
  watchedMovieSchema
);
