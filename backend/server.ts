import * as express from "express";
import { connectDB } from "./database/db";
import { errorHandler } from "./middleware/ErrorMiddleware";
require("dotenv").config();
const lovedRouter = require("./routes/LovedRoutes");
const toWatchRouter = require("./routes/ToWatchRoutes");
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/loved", lovedRouter);
app.use("/to-watch", toWatchRouter);
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
