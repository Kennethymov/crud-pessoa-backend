import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

const userValidate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userService = new UserService();
    
    const { id } = req.params;
    const user = await userService.getById(Number(id));

    if (!user) {
      return res.status(404).json({
        message: 'pessoa não encontrada',
      });
    }
    
    next();
  } catch (error) {
    next(error);
  }
}

export default userValidate;