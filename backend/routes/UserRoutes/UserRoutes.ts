import express from 'express';
const router = express.Router();
import UsersHandler from '../../controllers/Users/UserController';
import { protect } from '../../middleware/AuthMiddleware';

const userHandler = new UsersHandler();
router
  .route('/')
  .get(protect, userHandler.getUsersHandler)
  .post(userHandler.createUserHandler);
router.route('/login').post(userHandler.loginUserHandler);
router
  .route('/:id')
  .get(userHandler.getUsersHandler)
  .put(protect, userHandler.updateUserHandler)
  .delete(protect, userHandler.deleteUserHandler);
module.exports = router;
