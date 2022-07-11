import { Router } from 'express';
import EventController from '../controllers/eventController';
import LoginController from '../controllers/loginController';
import CheckAuth from '../middlewares/checkAuth';

const router = Router();

router.get('/events/id/:id', CheckAuth.jwtValidator, EventController.getEventById);
router.get('/events/:organization', CheckAuth.jwtValidator, EventController.getEventsByOrganization);
router.get('/events', CheckAuth.jwtValidator, EventController.getAllEvents);

router.post('/events', CheckAuth.jwtValidator, EventController.createEvent);

router.patch('/events/:id', CheckAuth.jwtValidator, EventController.updateEvent);

export default router;