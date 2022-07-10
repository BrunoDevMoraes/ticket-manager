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

  static async getEventById (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const event = await EventService.getEventById(paramsObj.id);
      if (event === false) {
        return res.status(404).json({ message: 'Event does not exist' });
      }
      return res.status(200).json(event);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async createEvent (req: Request, res: Response) {
    try {
      const bodyObj = req.body;
      const event = await EventService.createEvent(bodyObj);
      return res.status(201).json(event);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async updateEvent (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const bodyObj = req.body;
      const event = await EventService.updateEvent(bodyObj, paramsObj.id);
      return res.status(200).json(event);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}