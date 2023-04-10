const express = require("express");
const router = express.Router();

import lovedMoviesController from "../controllers/LovedMoviesController";

router
  .route("/")
  .get(lovedMoviesController.getMovies)
  .post(lovedMoviesController.createMovie);
router
  .route("/:id")
  .get(lovedMoviesController.getMovie)
  .put(lovedMoviesController.updateMovie)
  .delete(lovedMoviesController.deleteMovie);
module.exports = router;
