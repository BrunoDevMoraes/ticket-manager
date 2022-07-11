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

  static async updateTicketOwner (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const bodyObj = req.body;
      const event = await TicketService.updateTicket(bodyObj.owner_id, paramsObj.id);
      if (event === false) {
        return res.status(404).json({ message: `No event with id ${paramsObj.id}`  });
      }
      return res.status(200).json(event);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async createTickets (req: Request, res: Response) {
    try {
      const bodyObj = req.body;
      const tickets = await TicketService.createTickets(bodyObj);
      if (tickets !== undefined && tickets[0] === 'limit') {
        return res.status(403).json(tickets[1]);
      }
      if (tickets !== undefined && tickets[0] === false) {
        return res.status(404).json(tickets[1]);
      }
      return res.status(201).json(tickets[1]);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}