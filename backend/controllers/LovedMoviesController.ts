import MoviesHandler from "./SavedMoviesController";
import LovedMovie from "../models/LovedMoviesModel";

const lovedMoviesHandler = new MoviesHandler(LovedMovie);

export default lovedMoviesHandler;
