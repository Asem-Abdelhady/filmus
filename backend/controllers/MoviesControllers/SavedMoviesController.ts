import { Request, Response } from 'express';
import { Model } from 'mongoose';
import {
  createMovie,
  deleteMovie,
  getMovieByID,
  getMovies,
  updateMovie,
} from '../../services/SavedMovieService';
import ISavedMovedSchema from '../../types/SavedMovieSchema';
const asyncHandler = require('express-async-handler');

class MoviesHandler {
  constructor(public model: Model<ISavedMovedSchema>) {}

  getMoviesHandler = asyncHandler(async (req: Request, res: Response) => {
    const movies = await getMovies(this.model);
    res.status(200).json(movies);
  });

  getMovieHandler = asyncHandler(async (req: Request, res: Response) => {
    const movie = await getMovieByID(+req.params.id, this.model);
    res.status(201).json(movie);
  });

  createMovieHandler = asyncHandler(async (req: Request, res: Response) => {
    const createdMovie = await createMovie(req.body, this.model);
    res.status(201).json(createdMovie);
  });

  deleteMovieHandler = asyncHandler(async (req: Request, res: Response) => {
    await deleteMovie(+req.params.id, this.model);
    res.status(200).json({ message: `Movie ${req.params.id} deleted` });
  });

  updateMovieHandler = asyncHandler(async (req: Request, res: Response) => {
    const movie = await updateMovie(+req.params.id, req.body, this.model);

    res.json(movie);
  });
}

export default MoviesHandler;
