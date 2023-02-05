const express = require("express");
const routes = express.Router();
import { Response, Request } from "express";

//Todo: All the routes(post, put, get, delete)
routes.get("/", (req: Request, res: Response) => {
  res.json({ message: `Get saved movies` });
});

module.exports = routes;
