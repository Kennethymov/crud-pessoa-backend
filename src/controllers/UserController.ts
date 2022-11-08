import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  public getAll = async (req: Request, res: Response) => {
    const users = await this.userService.getAll();
    return res.status(200).json(users);
  }

  public getByEmail = async (req: Request, res: Response) => {
    const { email } = req.body;
    const user = await this.userService.getByEmail(email);
    return res.status(200).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await this.userService.create(user);
    return res.status(201).json(newUser);
  };
}

export default UserController;
