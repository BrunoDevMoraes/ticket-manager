import { Request, Response } from 'express';
import UserService from '../services/userService';

export default class UserController {
  static async getUserById (req: Request, res: Response) {
    try {
      const paramsObj = req.params;
      const user = await UserService.getUserById(paramsObj.id);
      if (user === false) {
        return res.status(404).json({ message: 'User does not exist' });
      }
      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }

  static async getAllUsers (_req: Request, res: Response) {
    try {
      const users = await UserService.getAllUsers();
      return res.status(200).json(users);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}