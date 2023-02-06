import MoviesHandler from "./SavedMoviesController";
import ToWatchMovieModel from "../models/ToWatchMoviesModel";

const toWatchMoviesHandler = new MoviesHandler(ToWatchMovieModel);

export default toWatchMoviesHandler;
