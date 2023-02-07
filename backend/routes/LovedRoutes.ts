const express = require("express");
const router = express.Router();
import { Response, Request } from "express";

import lovedMoviesHandler from "../controllers/LovedMoviesController";

router
  .route("/")
  .get(lovedMoviesHandler.getMovies)
  .post(lovedMoviesHandler.createMovie);
router
  .route("/:id")
  .get(lovedMoviesHandler.getMovie)
  .put(lovedMoviesHandler.updateMovie)
  .delete(lovedMoviesHandler.deleteMovie);
module.exports = router;
