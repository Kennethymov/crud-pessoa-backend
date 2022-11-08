import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const erroMiddleware: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err;
  console.log(`name: ${name}`);

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message: details[0].message });
      break;
    case 'NotFoundError':
      res.status(404).json({ message });
      break;
    case 'ConflictError':
      res.status(409).json({ message });
      break;
    default:
      console.error(err);
      res.sendStatus(500);
  }

  next();
};

export default erroMiddleware