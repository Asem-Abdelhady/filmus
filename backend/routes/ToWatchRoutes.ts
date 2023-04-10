const express = require("express");
const router = express.Router();
import toWatchMoviesController from "../controllers/ToWatchMoviesController";

router
  .route("/")
  .get(toWatchMoviesController.getMovies)
  .post(toWatchMoviesController.createMovie);
router
  .route("/:id")
  .get(toWatchMoviesController.getMovie)
  .put(toWatchMoviesController.updateMovie)
  .delete(toWatchMoviesController.deleteMovie);
module.exports = router;
