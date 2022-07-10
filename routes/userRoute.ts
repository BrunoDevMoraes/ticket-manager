import { Router } from 'express';
import UserController from '../controllers/userController';

const router = Router();

router.get('/users/:id', UserController.getUserById);
router.get('/users', UserController.getAllUsers);

export default router;