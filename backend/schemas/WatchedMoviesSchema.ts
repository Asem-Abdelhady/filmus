import { Schema } from 'mongoose';
import type ISavedMovieSchema from '../types/SavedMovieSchema';

const watchedMovieSchema = new Schema<ISavedMovieSchema>(
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
