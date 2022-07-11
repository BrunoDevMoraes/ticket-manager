import { Router } from 'express';
import UserController from '../controllers/userController';
import CheckAuth from '../middlewares/checkAuth';

const router = Router();

router.get('/users/:id', CheckAuth.jwtValidator, UserController.getUserById);
router.get('/users', CheckAuth.jwtValidator, UserController.getAllUsers);

export default router;