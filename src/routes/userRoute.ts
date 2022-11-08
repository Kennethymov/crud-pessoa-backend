import { Router } from 'express';
import UserController from '../controllers/UserController';

const userRoute = Router();
const userController = new UserController();

userRoute.get('/pessoas', userController.getAll);
userRoute.post('/pessoa', userController.create)

export default userRoute;
