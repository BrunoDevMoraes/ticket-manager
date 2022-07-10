import { Request, Response } from 'express';
import SigninService from '../services/signinService';

export default class SigninController {
  static async postSignin(req: Request, res: Response) {
    try {
      const newUser = await SigninService.postSignin(req.body);
      return res.status(201).json(newUser);
    } catch (err) {
      return res.status(500).json({ message: (err as Error).message });
    }
  }
}

