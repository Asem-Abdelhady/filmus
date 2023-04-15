import { Model } from 'mongoose';
import { sanitizeSavedMovie } from '../sanitizers/SavedMovieSanitizer';
import ISavedMovedSchema from '../types/SavedMovieSchema';

export async function getMovies(
  model: Model<ISavedMovedSchema>
): Promise<ISavedMovedSchema[]> {
  try {
    const movies = await model.find();
    return movies;
  } catch (e) {
    throw new Error('No Movies Yet!!');
  }
}

export async function getMovieByID(
  id: number,
  model: Model<ISavedMovedSchema>
): Promise<ISavedMovedSchema> {
  try {
    const movie = await model.findById(id);
    if (!movie) throw new Error('Movie not found');
    return movie;
  } catch (err) {
    throw new Error();
  }
}

export async function createMovie(
  movie: ISavedMovedSchema,
  model: Model<ISavedMovedSchema>
): Promise<ISavedMovedSchema> {
  const sanitizedMovie = sanitizeSavedMovie(movie);

  try {
    const movie = await model.create(sanitizedMovie);
    if (!movie) throw new Error('Movie was not created');

    return movie;
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateMovie(
  id: number,
  movie: ISavedMovedSchema,
  model: Model<ISavedMovedSchema>
): Promise<ISavedMovedSchema> {
  const sanitizedMovie = sanitizeSavedMovie(movie);

  try {
    const updatedMovie = await model.findByIdAndUpdate(id, sanitizeSavedMovie, {
      new: true,
    });
    if (!updatedMovie) throw new Error('Movie not found');
    return updatedMovie;
  } catch (e) {
    throw new Error('Error updating the movie');
  }
}

export async function deleteMovie(
  id: number,
  model: Model<ISavedMovedSchema>
): Promise<void> {
  try {
    const movie = await model.findByIdAndDelete(id);
    if (!movie) throw new Error('Movie not found');
    return;
  } catch (err) {
    throw new Error('Error deleting the movie');
  }
}
