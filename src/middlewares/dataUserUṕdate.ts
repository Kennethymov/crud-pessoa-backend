import { Request, Response, NextFunction } from 'express';
import UserService from '../services/UserService';

const Joi = require('joi').extend(require('@joi/date'));

const userSchema = Joi.object({
  name: Joi.string().min(8),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'br'] } }),
  birthDate: Joi.date().format('YYYY-MM-DD')
});

const dataUserUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userService = new UserService();

    const { name, email, birthDate } = req.body;
    
    if (!name && !email && !birthDate) {
      return res.status(400).json({
        message: 'É necessário passar um nome, um email ou uma data de aniversario para atualizar',
      });
    }

    if (email) {
      const { error } = userSchema.validate({ email });
      if (error) {
        return res.status(400).json({ message: error.message });
      }
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

export default dataUserUpdate;