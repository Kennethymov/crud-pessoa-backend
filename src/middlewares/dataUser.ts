import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

const Joi = require('joi').extend(require('@joi/date'));

const userSchema = Joi.object({
  name: Joi.string().min(8).required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }).required(),
  birthDate: Joi.date().format('YYYY-MM-DD').required()
});

const dataUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userService = new UserService();

    const { name, email, birthDate } = req.body;

    const { error } = userSchema.validate({ name, email, birthDate });
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    const user = await userService.getByEmail(email);

    if (user) {
      return res.status(409).json({
        message: 'Este email já foi cadastrado!',
      });
    }
    
    next();
  } catch (error) {
    next(error);

    
  }
}

export default dataUser;