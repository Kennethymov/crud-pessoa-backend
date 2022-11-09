import { Request, Response } from 'express';
import IUser, { IUserUpdate } from '../interfaces/User';
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
    const { id } = req.params;
    const user = await this.userService.getById(parseInt(id, 10));
    return res.status(200).json(user);
  };

  public create = async (req: Request, res: Response) => {
    const user:IUser = req.body;
    const newUser = await this.userService.create(user);
    return res.status(201).json(newUser);
  };

  public update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const dataUser:IUserUpdate = req.body;
    const updatedUser = await this.userService.update(parseInt(id, 10), dataUser);
    return res.status(200).json(updatedUser);
  };

  public remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.userService.remove(parseInt(id, 10));
    return res.status(200).json({message: "usuário deletado com sucesso"});
  };
}

export default UserController;
