import express, { Request, Response } from 'express';
import 'express-async-errors';
import { StatusCodes } from 'http-status-codes';
import erroMiddleware from './middlewares/erroMiddleware';
import userRoute from './routes/userRoute';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/', userRoute)

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('TESTE SIMBIOSE')
});

app.use(erroMiddleware);


export default app;
