import { model } from 'mongoose';
import lovedMovieSchema from '../schemas/LovedMoviesSchema';
import ISavedMovedSchema from '../types/SavedMovieSchema';

const LovedMovie = model<ISavedMovedSchema>('LovedMovie', lovedMovieSchema);

export default LovedMovie;
