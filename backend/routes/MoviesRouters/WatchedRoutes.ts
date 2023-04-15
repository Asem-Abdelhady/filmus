import express from 'express';
const router = express.Router();
import watchedMoviesHandler from '../../controllers/MoviesControllers/WatchedMoviesController';
import { protect } from '../../middleware/AuthMiddleware';

router
  .route('/')
  .get(watchedMoviesHandler.getMoviesHandler)
  .post(protect, watchedMoviesHandler.createMovieHandler);
router
  .route('/:id')
  .get(watchedMoviesHandler.getMoviesHandler)
  .put(protect, watchedMoviesHandler.updateMovieHandler)
  .delete(protect, watchedMoviesHandler.deleteMovieHandler);
module.exports = router;
