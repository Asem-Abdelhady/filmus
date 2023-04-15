import { model } from 'mongoose';
import watchedMovieSchema from '../schemas/WatchedMoviesSchema';
import ISavedMovedSchema from '../types/SavedMovieSchema';

const WatchedMovieModel = model<ISavedMovedSchema>(
  'Watched',
  watchedMovieSchema
);

export default WatchedMovieModel;
