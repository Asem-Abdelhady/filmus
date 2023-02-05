import * as express from "express";
require("dotenv").config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/loved", require("./routes/lovedRoutes"));
app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
console.log("Yo");
