import HttpException from '../middleware/ErrorMiddleware';
import ISavedMovedSchema from '../types/SavedMovieSchema';

export function sanitizeSavedMovie(
  movie: ISavedMovedSchema
): ISavedMovedSchema {
  let sanitizedMovie = <ISavedMovedSchema>{ ...movie };
  sanitizedMovie.name = sanitizeName(sanitizedMovie.name);
  return sanitizedMovie;
}

function sanitizeName(name: string): string {
  if (name === undefined) {
    throw new HttpException('Name is undefined', 400);
  }

  if (typeof name !== 'string') {
    throw new HttpException('Name is not a string', 400);
  }

  name = name.trim();

  if (name.length < 3) {
    throw new HttpException('Name must be at least 3 characters', 400);
  }

  if (name.length > 80) {
    throw new HttpException('Name must be mess than 80 characters', 400);
  }

  return name;
}
