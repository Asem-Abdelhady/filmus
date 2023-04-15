import { Schema } from 'mongoose';
import ISavedMovedSchema from '../types/SavedMovieSchema';

const watchedMovieSchema = new Schema<ISavedMovedSchema>(
  {
    _id: { type: Number },
    name: { type: String },
    desc: { type: String },
    pic: { type: String },
    rate: { type: Number },
    date: { type: String },
  },
  {
    timestamps: true,
  }
);

export default watchedMovieSchema;
