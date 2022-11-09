import { Request, Response, NextFunction } from 'express';

const Joi = require('joi').extend(require('@joi/date'));

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  birthDate: Joi.date().format('YYYY-MM-DD')
});

const dataUserUpdate = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, birthDate } = req.body;
    
    if (!name && !email && !birthDate) {
      if (email) {
        const { error } = userSchema.validate({ email });
        if (error) {
          return res.status(401).json({ message: error.message });
        }
      }
      return res.status(400).json({
        message: 'É necessário passar um nome, um email ou uma data de aniversario para atualizar',
      });
    }

    if (email) {
      const { error } = userSchema.validate({ email });
      if (error) {
        return res.status(401).json({ message: error.message });
      }
    }
    
    next();
  } catch (error) {
    next(error);
  }
}

export default dataUserUpdate;