import { model } from "mongoose";
import lovedMovieSchema from "../schemas/lovedMoviesSchema";

const LovedMovie = model<ISavedMovie>("LovedMovie", lovedMovieSchema);

export default LovedMovie;
