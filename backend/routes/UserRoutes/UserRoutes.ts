import express from 'express';
import UsersHandler from '../../controllers/Users/UserController';
import { protect } from '../../middleware/AuthMiddleware';
const userRouter = express.Router();

const userHandler = new UsersHandler();
userRouter
    .route('/')
    .get(protect, userHandler.getUsersHandler)
    .post(userHandler.createUserHandler);

userRouter.route('/login').post(userHandler.loginUserHandler);

userRouter
    .route('/:id')
    .get(userHandler.getUserHandler)
    .put(protect, userHandler.updateUserHandler)
    .delete(protect, userHandler.deleteUserHandler);

userRouter
    .route('/:id/loved')
    .get(protect, userHandler.getLovedMoviesHandler)
    .post(protect, userHandler.createLovedMovieHandler);
userRouter
    .route('/:id/loved/movieId')
    .get(protect, userHandler.getLovedMovieHandler)
    .put(protect, userHandler.updateLovedMovieHandler)
    .delete(protect, userHandler.deleteLovedMovieHandler);

userRouter
    .route('/:id/watched')
    .get(protect, userHandler.getWatchedMoviesHandler)
    .post(protect, userHandler.createWatchedMovieHandler);
userRouter
    .route('/:id/watched/movieId')
    .get(protect, userHandler.getWatchedMovieHandler)
    .put(protect, userHandler.updateWatchedMovieHandler)
    .delete(protect, userHandler.deleteWatchedMovieHandler);

userRouter
    .route('/:id/to-watch')
    .get(protect, userHandler.getToWatchMoviesHandler)
    .post(protect, userHandler.createToWatchMovieHandler);
userRouter
    .route('/:id/to-watch/movieId')
    .get(protect, userHandler.getToWatchMovieHandler)
    .put(protect, userHandler.updateToWatchMovieHandler)
    .delete(protect, userHandler.deleteToWatchMovieHandler);
// userRouter.route('/watched');
// userRouter.route('/to-watch');
export default userRouter;
