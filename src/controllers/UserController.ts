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

  public getById = async (req: Request, res: Response) => {
    console.log('ooooi');
    
    const { id } = req.params;
    console.log(id);
    
    const user = await this.userService.getById(parseInt(id, 10));
    return res.status(200).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const newUser = await this.userService.create(user);
    return res.status(201).json(newUser);
  };
}

export default UserController;
