import { Request, Response, NextFunction } from 'express';

const Joi = require('joi').extend(require('@joi/date'));

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  birthDate: Joi.date().format('YYYY-MM-DD')
});

const dataUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, birthDate } = req.body;
    
    if (!name || !email || !birthDate) {
      return res.status(400).json({
        message: 'É necessário passar um nome, um email e uma data de nascimento cadastro',
      });
    }

    const { error } = userSchema.validate({ name, email, birthDate });
    if (error) {
      return res.status(401).json({ message: error.message });
    }
    
    next();
  } catch (error) {
    next(error);
  }
}

export default dataUser;