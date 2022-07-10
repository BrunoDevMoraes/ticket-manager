import { Router } from 'express';
import SigninController from '../controllers/signinController';

const router = Router();

router.post('/signin', SigninController.postSignin)

export default router;
