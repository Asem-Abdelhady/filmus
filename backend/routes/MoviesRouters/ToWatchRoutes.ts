import express from 'express';
const router = express.Router();
import toWatchMoviesController from '../../controllers/MoviesControllers/ToWatchMoviesController';
import { protect } from '../../middleware/AuthMiddleware';

router
  .route('/')
  .get(toWatchMoviesController.getMoviesHandler)
  .post(protect, toWatchMoviesController.createMovieHandler);
router
  .route('/:id')
  .get(toWatchMoviesController.getMoviesHandler)
  .put(protect, toWatchMoviesController.updateMovieHandler)
  .delete(protect, toWatchMoviesController.deleteMovieHandler);
module.exports = router;
