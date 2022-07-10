import { Request, Response } from 'express';
import TicketService from '../services/ticketService';

export default class TicketController {
  static async getTicketById (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const ticket = await TicketService.getTicketById(paramsObj.id);
      if (ticket === false) {
        return res.status(404).json({ message: 'Ticket does not exist' });
      }
      return res.status(200).json(ticket);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async getTicketsByOwnerId (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const ticket = await TicketService.getTicketsByOwnerId(paramsObj.id);
      if (ticket === false) {
        return res.status(404).json({ message: "User has no tickets or doesn't exist" });
      }
      return res.status(200).json(ticket);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async getTicketsByEventId (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const ticket = await TicketService.getTicketsByEventId(paramsObj.id);
      if (ticket === false) {
        return res.status(404).json({ message: "Event has no tickets or doesn't exist" });
      }
      return res.status(200).json(ticket);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}