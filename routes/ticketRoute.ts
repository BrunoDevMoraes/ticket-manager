import { Router } from 'express';
import TicketController from '../controllers/ticketController';
import CheckAuth from '../middlewares/checkAuth';

const router = Router();

router.get('/tickets/owner/:id', CheckAuth.jwtValidator, TicketController.getTicketsByOwnerId);
router.get('/tickets/event/:id', CheckAuth.jwtValidator, TicketController.getTicketsByEventId);
router.get('/tickets/:id', CheckAuth.jwtValidator, TicketController.getTicketById);

router.post('/tickets', CheckAuth.jwtValidator, TicketController.createTickets);

router.patch('/tickets/:id', CheckAuth.jwtValidator, TicketController.updateTicketOwner);

export default router;