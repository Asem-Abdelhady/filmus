import express from 'express';
import { connectDB } from './database/db';
import { errorHandler } from './middleware/ErrorMiddleware';
import * as Colors from 'colors.ts';
Colors.colors('', '');

require('dotenv').config();

const lovedRouter = require('./routes/MoviesRouters/LovedRoutes');
const toWatchRouter = require('./routes/MoviesRouters/ToWatchRoutes');
const watchedRouter = require('./routes/MoviesRouters/WatchedRoutes');

const userRouter = require('./routes/UserRoutes/UserRoutes');

connectDB();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.use('/loved', lovedRouter);
app.use('/to-watch', toWatchRouter);
app.use('/watched', watchedRouter);

app.use('/users', userRouter);

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server started on the port ${PORT}`);
});
