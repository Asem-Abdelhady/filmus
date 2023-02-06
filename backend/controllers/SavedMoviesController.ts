import { Request, Response } from "express";
import { Model } from "mongoose";
import ISavedMovie from "../types/MoviesTypes";
const asyncHandler = require("express-async-handler");

class MoviesHandler {
  constructor(public model: Model<ISavedMovie>) {}
  getMovies = asyncHandler(async (req: Request, res: Response) => {
    const movies = await this.model.find();
    res.status(200).json(movies);
  });

  getMovie = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `The movie id is: ${req.params.id}` });
  });

  createMovie = asyncHandler(async (req: Request, res: Response) => {
    if (!req.body.name) {
      res.status(400);
      throw new Error("Name is required");
    }
    const movie = await this.model.create(req.body);
    if (!movie) {
      res.status(400);
      throw new Error("Movie not added to the DB");
    }
    res.status(201).json(movie);
  });

  deleteMovie = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `Deleting a movie: ${req.params.id}` });
  });

  updateMovie = asyncHandler(async (req: Request, res: Response) => {
    res.status(200).json({ message: `updating a movie: ${req.params.id}` });
  });
}

export default MoviesHandler;
