import { model } from 'mongoose';
import toWatchMovieSchema from '../schemas/ToWatchMoveiesSchema';
import ISavedMovedSchema from '../types/SavedMovieSchema';

const ToWatchMovieModel = model<ISavedMovedSchema>(
  'ToWatchMovie',
  toWatchMovieSchema
);

export default ToWatchMovieModel;
