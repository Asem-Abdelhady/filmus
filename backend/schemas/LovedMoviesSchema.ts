import { Schema } from 'mongoose';
import ISavedMovedSchema from '../types/SavedMovieSchema';

const lovedMovieSchema = new Schema<ISavedMovedSchema>(
  {
    _id: { type: Number, required: true },
    name: { type: String, required: true },
    desc: { type: String, required: true },
    pic: { type: String, required: true },
    rate: { type: Number },
    date: { type: String },
  },
  {
    timestamps: true,
  }
);

export default lovedMovieSchema;
