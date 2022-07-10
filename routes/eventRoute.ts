import { Router } from 'express';
import EventController from '../controllers/eventController';
import LoginController from '../controllers/loginController';

const router = Router();

router.get('/events/id/:id', EventController.getEventById);
router.get('/events/:organization', EventController.getEventsByOrganization);
router.get('/events', EventController.getAllEvents);

export default router;