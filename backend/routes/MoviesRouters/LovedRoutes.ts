import express from 'express';
const router = express.Router();

import lovedMoviesController from '../../controllers/MoviesControllers/LovedMoviesController';
import { protect } from '../../middleware/AuthMiddleware';

router
  .route('/')
  .get(lovedMoviesController.getMoviesHandler)
  .post(protect, lovedMoviesController.createMovieHandler);
router
  .route('/:id')
  .get(lovedMoviesController.getMovieHandler)
  .put(protect, lovedMoviesController.updateMovieHandler)
  .delete(protect, lovedMoviesController.deleteMovieHandler);
module.exports = router;
