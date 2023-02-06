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

//Todo: All the routes(post, put, get, delete)
router.get("/", getMovies);
router.post("/", createMovie);
router.get("/:id", getMovie);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

module.exports = router;
