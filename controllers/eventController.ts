import { Request, Response } from 'express';
import EventService from '../services/eventService';
import UserService from '../services/userService';

export default class EventController {
  static async getAllEvents (_req: Request, res: Response) {
    try {
      const events = await EventService.getAllEvents();
      return res.status(200).json(events);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async getEventsByOrganization (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const events = await EventService.getEventsByOrganization(paramsObj.organization);
      return res.status(200).json(events);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}