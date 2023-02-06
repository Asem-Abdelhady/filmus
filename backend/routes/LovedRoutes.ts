const express = require("express");
const router = express.Router();
import { Response, Request } from "express";

import lovedMoviesHandler from "../controllers/LovedMoveiesController";

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
