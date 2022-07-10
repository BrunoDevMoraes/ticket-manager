import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();

router.get('/tickets/owner/:id', TicketController.getTicketsByOwnerId);
router.get('/tickets/event/:id', TicketController.getTicketsByEventId);
router.get('/tickets/:id', TicketController.getTicketById);

router.patch('/tickets/:id', TicketController.updateTicketOwner);

export default router;