import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  static async postLogin (req: Request, res: Response) {
    try {
      const info = await LoginService.postLogin(req.body);
      if (info === false) {
        return res.status(401).json({ message: 'Incorrect email or password' });
      }
      return res.status(200).json(info);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}