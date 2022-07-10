import { Router } from 'express';
import EventController from '../controllers/eventController';
import LoginController from '../controllers/loginController';

const router = Router();

router.get('/events', EventController.getAllEvents)
router.get('/events/:organization', EventController.getEventsByOrganization)

export default router;