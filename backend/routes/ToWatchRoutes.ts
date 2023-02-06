const express = require("express");
const router = express.Router();
import { Response, Request } from "express";

const {
  getMovies,
  getMovie,
  updateMovie,
  deleteMovie,
  createMovie,
} = require("../controllers/savedMoviesController");

router.route("/").get(getMovies).post(createMovie);
router.route("/:id").get(getMovie).put(updateMovie).delete(deleteMovie);
module.exports = router;
