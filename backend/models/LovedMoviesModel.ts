import { model } from "mongoose";
import lovedMovieSchema from "../schemas/LovedMoviesSchema";
import ISavedMovie from "../types/MoviesTypes";

const LovedMovie = model<ISavedMovie>("LovedMovie", lovedMovieSchema);

export default LovedMovie;
