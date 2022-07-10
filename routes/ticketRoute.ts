import { Router } from 'express';
import TicketController from '../controllers/ticketController';

const router = Router();

router.get('/tickets/owner/:id', TicketController.getTicketsByOwnerId);
router.get('/tickets/:id', TicketController.getTicketById);

export default router;