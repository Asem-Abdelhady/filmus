import * as express from "express";
import { connectDB } from "./database/db";
import { errorHandler } from "./middleware/ErrorMiddleware";
require("dotenv").config();

connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/loved", require("./routes/LovedRoutes"));
app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
console.log("Yo");
